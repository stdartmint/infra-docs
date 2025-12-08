import { ResourceCard } from "@/components/resource-card"

export type LinkItem = {
  title: string
  href: string
  description?: string
}

type ResourcesGridProps = {
  links: LinkItem[]
  className?: string
}

export const ResourcesGridContainer: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children
}) => {
  return <div className={`grid gap-6 sm:grid-cols-2 md:grid-cols-4 ${className ?? ""}`}>{children}</div>
}

export const ResourcesGrid: React.FC<ResourcesGridProps> = ({ links, className }) => {
  return (
    <ResourcesGridContainer className={className}>
      {links.map(item => (
        <ResourceCard key={item.href} href={item.href} title={item.title} description={item.description} />
      ))}
    </ResourcesGridContainer>
  )
}
