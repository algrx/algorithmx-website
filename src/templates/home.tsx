import React from 'react'

import { FullPage } from './fullpage'
import { NodeProps, MarkdownNode } from './utils'
import { HeaderSection } from '../components/header'
import { ApiContent } from '../components/api/content'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

type HomePageProps = NodeProps<'markdownRemark', MarkdownNode<{}>>

const HomePage: React.FC<HomePageProps> = props => {
  const post = props.data.markdownRemark
  return (
    <FullPage section={HeaderSection.Home} pLangBar={true}>
      <ApiContent rawHtml={post.html}/>
    </FullPage>
  )
}
export default HomePage
