import { SiteNav } from '@/components/ui/site-nav'
import { HeroSection } from '@/components/showcase/hero-section'
import { FoundationsSection, LayoutFoundationsSection } from '@/components/showcase/foundations-section'
import { PreviewComponentsSection } from '@/components/showcase/preview-components-section'
import { TypeSection } from '@/components/showcase/type-section'
import { ComponentsSection } from '@/components/showcase/components-section'
import { SystemSection } from '@/components/showcase/system-section'
import { FooterSection } from '@/components/showcase/footer-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroSection />
        <FoundationsSection />
        <TypeSection />
        <PreviewComponentsSection />
        <LayoutFoundationsSection />
        <ComponentsSection />
        <SystemSection />
      </main>
      <FooterSection />
    </div>
  )
}
