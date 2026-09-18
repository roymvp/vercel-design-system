import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(process.argv[2] || '.')
const contract = JSON.parse(readFileSync(join(root, 'v0.json'), 'utf8'))
assert.equal(contract.version, 1)
assert.equal(contract.starter.source, 'skill-directory')
assert.equal(contract.starter.path, 'assets/starter')
const starter = join(root, contract.starter.path)
const ignored = new Set(['node_modules', '.next', 'next-env.d.ts', 'tsconfig.tsbuildinfo'])
const files = []
function walk(dir, prefix = '') {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue
    assert(!entry.isSymbolicLink(), `Symlink: ${prefix}${entry.name}`)
    assert(!entry.name.startsWith('.env'), `Environment file: ${entry.name}`)
    const path = `${prefix}${entry.name}`
    if (entry.isDirectory()) walk(join(dir, entry.name), `${path}/`)
    else files.push(path)
  }
}
walk(starter)
for (const path of ['package.json', 'pnpm-lock.yaml', 'components.json', 'app/page.tsx', 'app/layout.tsx', 'app/globals.css', 'examples/quick-start.tsx']) {
  assert(files.includes(path), `Missing: ${path}`)
}
const pkg = JSON.parse(readFileSync(join(starter, 'package.json'), 'utf8'))
for (const version of Object.values({ ...pkg.dependencies, ...pkg.devDependencies })) {
  assert(!version.startsWith('file:/'), `Absolute dependency: ${version}`)
}
for (const path of files.filter((name) => /\.(tsx?|css|json|mjs)$/.test(name))) {
  const text = readFileSync(join(starter, path), 'utf8')
  assert(!text.includes('\uFFFD'), `Damaged text: ${path}`)
  assert(!/(?:from\s+|import\s*)['"][^'"]*(?:user_read_only_context|v0_memories)/.test(text), `Mounted import: ${path}`)
}
console.log(`Starter contract verified: ${files.length} source/configuration files`)
