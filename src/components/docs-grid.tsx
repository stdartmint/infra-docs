import React from "react"
import { Card } from "fumadocs-ui/components/card"
import { Separator as SeparatorComponent } from "@/components/separator"
import { Folder, Item, Separator } from "fumadocs-core/page-tree"
import { source } from "@/lib/source"
import { ResourcesGridContainer } from "@/components/resource-grid"

const isFolder = (node: Folder | Item | Separator): node is Folder => {
  return (node as Folder).children !== undefined && (node as Folder).children.length > 0
}

export const DocsResourcesGrid: React.FC<{ className?: string }> = ({ className }) => {
  let pages = source.getPages()
  let tree = source.getPageTree()

  pages = pages.filter(page => page.url !== "/docs")

  return (
    <div>
      {tree.children.map(category => (
        <React.Fragment key={category.$id}>
          {isFolder(category) && (
            <>
              <h3 className="flex items-center gap-2  pt-4">
                <span className="text-gray-500 [&>svg]:w-[20px] [&>svg]:h-[20px]">{category.icon}</span>
                {category.name}
              </h3>
              <SeparatorComponent />
              <ResourcesGridContainer className={className}>
                {category.children?.map(
                  node =>
                    node.type === "page" && (
                      <Card
                        key={(node as Item).url}
                        href={(node as Item).url}
                        title={(node as Item).name}
                        description={(node as Item).description}
                      />
                    )
                )}
              </ResourcesGridContainer>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
