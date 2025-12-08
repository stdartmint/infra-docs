import { icons } from "lucide-react"
import { createElement } from "react"
import { Card } from "fumadocs-ui/components/card"
import { source } from "@/lib/source"
import { ResourcesGridContainer, LinkItem } from "@/components/resource-grid"

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  if (!icon) {
    // You may set a default icon
    return
  }
  if (icon in icons) return createElement(icons[icon as keyof typeof icons])
}

export const DocsResourcesGrid: React.FC<{ className?: string }> = ({ className }) => {
  const pages = source.getPages()

  const links = pages
    .filter(page => page.url !== "/docs")
    .map(page => ({
      title: page.data.title,
      href: page.url,
      description: page.data.description,
      icon: page.data.icon
    }))

  return (
    <ResourcesGridContainer className={className}>
      {links.map(item => (
        <Card
          key={item.href}
          href={item.href}
          title={item.title}
          description={item.description}
          icon={item.icon ? <Icon icon={item.icon} /> : undefined}
        />
      ))}
    </ResourcesGridContainer>
  )
}
