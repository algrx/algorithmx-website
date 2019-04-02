import * as path from 'path'
import { TocJson, redirectsFromJson, graphqlTocJsonFragmentStr } from '../components/toc/paths'

interface CreatePageArgs {
  readonly path: string
  readonly component: string
  readonly context: {
    readonly slug: string
  }
}
interface CreateRedirectArgs {
  readonly fromPath: string
  readonly toPath: string
  readonly isPermanent?: boolean
  readonly redirectInBrowser?: boolean
}

interface CreatePagesQuery {
  readonly data: {
    readonly allMarkdownRemark: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly fields: {
            readonly slug: string
          }
        }
      }>
    }
    readonly file: {
      readonly childJson: TocJson
    }
  }
}

interface CreatePagesArgs {
  readonly graphql: (query: string) => Promise<CreatePagesQuery>
  readonly actions: {
    readonly createPage: (args: CreatePageArgs) => void
    readonly createRedirect: (args: CreateRedirectArgs) => void
  }
}

const queryStr = `
  ${graphqlTocJsonFragmentStr},
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    },
    file(relativePath: { eq: "pages/api/toc.json" }) {
      childJson {
        ...TocJsonFragment
      }
    }
  }
`

const API_PATH = '/api/'

/* tslint:disable */
const COMPONENTS: ReadonlyArray<[string, string]> = [
/* tslint:enable */
  [API_PATH, '../templates/api.tsx'],
  ['/', '../templates/home.tsx']
]

export const createApiRedirects = (props: CreatePagesQuery,
                                   createRedirect: CreatePagesArgs['actions']['createRedirect']) => {
  const apiPaths = props.data.allMarkdownRemark.edges
    .map(edge => edge.node.fields.slug)
    .filter(s => s.startsWith(API_PATH))
  const apiRedirects = redirectsFromJson(API_PATH, props.data.file.childJson, apiPaths)

  Object.entries(apiRedirects).forEach(([k, v]) => {
    createRedirect({ fromPath: k, toPath: v, isPermanent: true, redirectInBrowser: true })
  })
}

export const createPages = ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage, createRedirect } = actions

  return graphql(queryStr).then(props => {
    createApiRedirects(props, createRedirect)

    props.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const component = COMPONENTS.find(e => node.fields.slug.startsWith(e[0]))![1]
      createPage({
        path: node.fields.slug,
        component: path.resolve(path.join(__dirname, component)),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
