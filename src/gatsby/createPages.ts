import * as path from 'path';
import { TocJson, redirectsFromJson, graphqlTocJsonFragmentStr } from '../components/toc/paths';
import { GatsbyNode, Actions } from 'gatsby';

interface CreatePagesQuery {
    readonly data: {
        readonly allMarkdownRemark: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly fields: {
                        readonly slug: string;
                    };
                };
            }>;
        };
        readonly file: {
            readonly childJsonData: TocJson;
        };
    };
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
      childJsonData {
        ...TocJsonFragment
      }
    }
  }
`;

const API_PATH = '/api/';

const COMPONENTS: ReadonlyArray<[string, string]> = [
    [API_PATH, '../templates/api.tsx'],
    ['/', '../templates/home.tsx'],
];

export const createApiRedirects = (
    props: CreatePagesQuery,
    createRedirect: Actions['createRedirect']
) => {
    const apiPaths = props.data.allMarkdownRemark.edges
        .map((edge) => edge.node.fields.slug)
        .filter((s) => s.startsWith(API_PATH));
    const apiRedirects = redirectsFromJson(API_PATH, props.data.file.childJsonData, apiPaths);

    Object.entries(apiRedirects).forEach(([k, v]) => {
        createRedirect({
            fromPath: k,
            toPath: v,
            isPermanent: true,
            redirectInBrowser: true,
        });
    });
};

export const createPages: GatsbyNode['createPages'] = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    return graphql(queryStr).then((rawProps) => {
        const props = rawProps as CreatePagesQuery;
        createApiRedirects(props, createRedirect);

        props.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const component = COMPONENTS.find((e) => node.fields.slug.startsWith(e[0]))![1];
            createPage({
                path: node.fields.slug,
                component: path.resolve(path.join(__dirname, component)),
                context: {
                    slug: node.fields.slug,
                },
            });
        });
    });
};
