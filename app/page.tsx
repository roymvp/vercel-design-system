import { SiteNav } from '@/components/ui/site-nav'
import { HeroSection } from '@/components/showcase/hero-section'
import { FoundationsSection } from '@/components/showcase/foundations-section'
import { TypeSection } from '@/components/showcase/type-section'
import { ComponentsSection } from '@/components/showcase/components-section'
import { FooterSection } from '@/components/showcase/footer-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroSection />
        <FoundationsSection />
        <TypeSection />
        <ComponentsSection />
      </main>
      <FooterSection />
    </div>
  )
}
