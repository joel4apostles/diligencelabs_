import { BaseComponentProps } from '@/types'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { EnhancedBackground } from '@/components/ui/enhanced-background'

interface PageSectionProps extends BaseComponentProps {
  readonly id: string
  readonly component: React.ComponentType
}

interface PageLayoutProps {
  readonly sections: readonly PageSectionProps[]
  readonly navigation: React.ComponentType
  readonly background: React.ComponentType
}

export function PageLayout({ sections, navigation: Navigation, background: Background }: PageLayoutProps) {
  return (
    <>
      <Background />
      <EnhancedBackground />
      <ScrollIndicator />
      
      {/* Subtle texture overlays for professional appearance */}
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      
      <div className="relative z-10 text-text-primary">
        <Navigation />
        {sections.map(({ id, component: Section, ...props }) => (
          <section key={id} id={id} {...props}>
            <Section />
          </section>
        ))}
      </div>
    </>
  )
}