import * as path from 'path'

import './declarations'
import { createFilePath } from 'gatsby-source-filesystem'

interface PageNode {
  readonly internal: {
    readonly type: string
  }
}

interface CreateNodeFieldArgs {
  readonly node: PageNode
  readonly name: string
  readonly value: string
}

interface OnCreateNodeArgs  {
  readonly node: PageNode
  readonly getNode: unknown
  readonly basePath: string
  readonly actions: {
    readonly createNodeField: (args: CreateNodeFieldArgs) => void
  }
}

export const onCreateNode = ({ node, getNode, actions }: OnCreateNodeArgs) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
