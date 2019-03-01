export interface NodeProps<QueryName extends string, Node extends {}> {
  readonly data: {
    readonly [k in QueryName]: Node
  }
}
export interface EdgeNodeProps<QueryName extends string, Node extends {}> {
  readonly data: {
    readonly [k in QueryName]: {
      readonly edges: ReadonlyArray<{
        readonly node: Node
      }>
    }
  }
}

export interface MarkdownNode<FrontMatter extends {}> {
  readonly html: string
  readonly fields: {
    readonly slug: string
  }
  readonly frontmatter: FrontMatter
}
