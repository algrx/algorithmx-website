import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'gatsby';

import { PLang, PLangName } from '../../state/plang';
import { APIContent } from './content';
import { RootState } from '../../state/state';
import './page.scss';

export interface APIPageFrontmatter {
    readonly title: string;
    readonly docs: ReadonlyArray<string>;
}

export interface APIPageState {
    readonly lang: PLang;
}

export interface APIPageProps extends React.Props<unknown> {
    readonly frontmatter: APIPageFrontmatter;
    readonly rawHtml: string;
}

export const gqlAPIFrontmatterFragment = () => graphql`
    fragment ApiFrontmatterFragment on MarkdownRemark {
        frontmatter {
            title
            docs
        }
    }
`;

const APIDocLinks: React.FC<APIPageProps & APIPageState> = (props) => {
    return (
        <div className="api-doc-links">
            {props.frontmatter.docs.map((docLink, i) => {
                const [docLinkClass, docLinkMethod] = docLink.split('.');

                const docUrls: { readonly [k in PLang]: string } = {
                    [PLang.JS]:
                        'https://algrx.github.io/algorithmx/docs/js/interfaces/' +
                        `${docLinkClass.toLowerCase()}.html#${docLinkMethod}`,
                    [PLang.Python]:
                        'https://algorithmx-python.readthedocs.io/en/latest/graphics/selections.html#graphics.' +
                        `${docLinkClass}.${docLinkMethod}`,
                };

                return (
                    <div key={i} className="api-doc-link">
                        <span className="api-doc-link-title">{docLink}</span>
                        <a href={docUrls[props.lang]} className="api-doc-link-text">
                            <span className="fas fa-book-open api-doc-link-icon" />
                            {`${PLangName[props.lang]} Docs`}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

const APIPageFC: React.FC<APIPageProps & APIPageState> = (props) => {
    return (
        <div className="api-page">
            <h1>{props.frontmatter.title}</h1>
            <APIDocLinks {...props} />
            <APIContent rawHtml={props.rawHtml} />
        </div>
    );
};

export const APIPage = connect<APIPageState, APIPageProps, {}, RootState>((state) => ({
    lang: state.pLang,
}))(APIPageFC);
