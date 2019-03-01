declare module 'gatsby-source-filesystem' {
  export function createFilePath (args: {
    readonly node: unknown
    readonly getNode: unknown
    readonly basePath: string
  }): string
}
