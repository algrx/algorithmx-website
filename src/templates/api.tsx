import React from 'react'
import { graphql } from 'gatsby'

import { GlobalHeader } from './global'
import { NodeProps, EdgeNodeProps, MarkdownNode } from './utils'
import { HeaderSection } from '../components/header'
import { LanguageBarConnected } from '../components/languageBar'
import { TocConnected } from '../components/toc/toc'
import { TocJson, contentsFromJson, gqlTocJsonFragment } from '../components/toc/paths'
import { ApiPageFrontmatter, ApiPageConnected, gqlApiFrontmatterFragment } from '../components/api/page'
import './api.scss'
import '../components/page.scss'

type ApiProps = NodeProps<'markdownRemark', MarkdownNode<ApiPageFrontmatter>>
& NodeProps<'file', {
  readonly childJson: TocJson
}> & EdgeNodeProps<'allMarkdownRemark', MarkdownNode<{
  readonly title: string
}>>

gqlTocJsonFragment()
gqlApiFrontmatterFragment()
export const queryMarkdown = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      ...ApiFrontmatterFragment
    },
    file(relativePath: { eq: "pages/api/toc.json" }) {
      childJson {
        ...TocJsonFragment
      }
    },
    allMarkdownRemark(filter: { fields: { slug: { regex: "^/api/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export const ApiPage: React.FC<ApiProps> = props => {
  const post = props.data.markdownRemark

  const tocPath = props.data.markdownRemark.fields.slug
  const tocPathNames: { readonly [k: string]: string } =
    props.data.allMarkdownRemark.edges.reduce((result, edge) => {
      return {...result, [edge.node.fields.slug]: edge.node.frontmatter.title }
    }, {})

  const tocData = contentsFromJson('/api/', props.data.file.childJson, tocPathNames)

  return <>
    <GlobalHeader curSection={HeaderSection.API}>
      <LanguageBarConnected/>
    </GlobalHeader>
    <div className='api-toc-container'>
      <TocConnected curPath={tocPath} contents={tocData}/>
    </div>
    <div className='api-page-container'>
      <ApiPageConnected frontmatter={post.frontmatter} rawHtml={post.html}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ApiPageConnected>
    </div>
  </>
}
export default ApiPage
