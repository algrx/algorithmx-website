import React from 'react';
import { graphql } from 'gatsby';

import { GlobalHeader } from './global';
import { NodeProps, EdgeNodeProps, MarkdownNode } from './utils';
import { HeaderSection } from '../components/header';
import { PLangBar } from '../components/language-bar';
import { TocConnected } from '../components/toc';
import { TocJson, contentsFromJson, gqlTocJsonFragment } from '../components/toc-paths';
import {
    ExampleFrontmatter,
    ExamplePage,
    gqlExampleFrontmatterFragment,
} from '../components/example-page';
import './example.scss';

type ExampleProps = NodeProps<'markdownRemark', MarkdownNode<ExampleFrontmatter>> &
    NodeProps<
        'file',
        {
            readonly childJsonData: TocJson;
        }
    > &
    EdgeNodeProps<
        'allMarkdownRemark',
        MarkdownNode<{
            readonly title: string;
        }>
    >;

gqlTocJsonFragment();
gqlExampleFrontmatterFragment();
export const queryMarkdown = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            ...ExampleFrontmatterFragment
        }
        file(relativePath: { eq: "pages/examples/toc.json" }) {
            childJsonData {
                ...TocJsonFragment
            }
        }
        allMarkdownRemark(filter: { fields: { slug: { regex: "^/examples/" } } }) {
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
`;

export const ExampleTemplate: React.FC<ExampleProps> = (props) => {
    const post = props.data.markdownRemark;

    const tocPath = props.data.markdownRemark.fields.slug;
    const tocPathNames = props.data.allMarkdownRemark.edges.reduce((result, edge) => {
        return { ...result, [edge.node.fields.slug]: edge.node.frontmatter.title };
    }, {} as { readonly [k: string]: string });

    const tocData = contentsFromJson('/examples/', props.data.file.childJsonData, tocPathNames);

    return (
        <>
            <GlobalHeader curSection={HeaderSection.Examples}>
                <PLangBar />
            </GlobalHeader>
            <div className="example-toc-container">
                <TocConnected curPath={tocPath} contents={tocData} />
            </div>
            <div className="example-page-container">
                <ExamplePage frontmatter={post.frontmatter} rawHtml={post.html}>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </ExamplePage>
            </div>
        </>
    );
};
export default ExampleTemplate;
