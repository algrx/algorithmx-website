import React from 'react';

import { FullPageTemplate } from './full-page';
import { NodeProps, MarkdownNode } from './utils';
import { HeaderSection } from '../components/header';
import { ExampleContent } from '../components/example-content';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`;

type HomeProps = NodeProps<'markdownRemark', MarkdownNode<{}>>;

const HomeTemplate: React.FC<HomeProps> = (props) => {
    const post = props.data.markdownRemark;
    return (
        <FullPageTemplate section={HeaderSection.Home} pLangBar={true}>
            <ExampleContent rawHtml={post.html} />
        </FullPageTemplate>
    );
};
export default HomeTemplate;
