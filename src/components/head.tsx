import '@fortawesome/fontawesome-free/css/all.css'

import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

export interface SiteMetadataProps {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string
      readonly description: string
      readonly keywords: ReadonlyArray<string>
    }
  }
}

export const query = graphql`
  query HeadQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

const importScripts: ReadonlyArray<object> = [
  // { src: 'https://use.fontawesome.com/releases/v5.7.1/js/all.js', defer: true }
]

export const Head: React.FC = () => (
  <StaticQuery
    query={query}
    render={(props: SiteMetadataProps) =>
      <Helmet
        title={props.site.siteMetadata.title}
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: props.site.siteMetadata.description },
          { name: 'keywords', content: String(props.site.siteMetadata.keywords) }
        ]}
        script={importScripts.map(s => ({ type: 'text/javascript', ...s }))}
      >
      </Helmet>
    }
  />
)
