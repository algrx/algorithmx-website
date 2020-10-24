import React from 'react';

import { FullPageTemplate } from './fullpage';
import { NodeProps, MarkdownNode } from './utils';
import { HeaderSection } from '../components/header';
import { APIContent } from '../components/api/content';
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
            <APIContent rawHtml={post.html} />
        </FullPageTemplate>
    );
};
export default HomeTemplate;
