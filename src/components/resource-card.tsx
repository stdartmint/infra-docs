import Image from "next/image"
import { Card, CardProps } from "fumadocs-ui/components/card"

export type ResourceCardProps = Pick<CardProps, "title" | "description" | "href" | "external"> & {
  size?: number
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ title, href, description, external, size = 24 }) => {
  const domain =
    href ??
    (() => {
      try {
        return new URL(href || "").hostname
      } catch {
        return ""
      }
    })()

  return (
    <Card
      href={href}
      title={title}
      description={description}
      icon={
        <Image
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          width={size}
          height={size}
          alt={`${title} logo`}
          className="rounded-md"
        />
      }
    />
  )
}
