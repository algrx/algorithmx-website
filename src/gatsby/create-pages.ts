import * as path from 'path';
import { TocJson, redirectsFromJson, graphqlTocJsonFragmentStr } from '../components/toc-paths';
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
    file(relativePath: { eq: "pages/examples/toc.json" }) {
      childJsonData {
        ...TocJsonFragment
      }
    }
  }
`;

const EXAMPLES_PATH = '/examples/';

const COMPONENTS: ReadonlyArray<[string, string]> = [
    [EXAMPLES_PATH, '../templates/example.tsx'],
    ['/', '../templates/home.tsx'],
];

const createExampleRedirects = (
    props: CreatePagesQuery,
    createRedirect: Actions['createRedirect']
) => {
    const examplePaths = props.data.allMarkdownRemark.edges
        .map((edge) => edge.node.fields.slug)
        .filter((s) => s.startsWith(EXAMPLES_PATH));
    const exampleRedirects = redirectsFromJson(
        EXAMPLES_PATH,
        props.data.file.childJsonData,
        examplePaths
    );

    Object.entries(exampleRedirects).forEach(([k, v]) => {
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
        createExampleRedirects(props, createRedirect);

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
