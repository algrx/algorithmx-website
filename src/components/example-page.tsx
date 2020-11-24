import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'gatsby';

import { ExampleContent } from './example-content';
import { PLang, PLangName } from '../state/plang';
import { RootState } from '../state/root';
import './page.scss';

export interface ExampleFrontmatter {
    readonly title: string;
    readonly docs: ReadonlyArray<string>;
}

export interface ExamplePageState {
    readonly lang: PLang;
}

export interface ExamplePageProps extends React.Props<unknown> {
    readonly frontmatter: ExampleFrontmatter;
    readonly rawHtml: string;
}

export const gqlExampleFrontmatterFragment = () => graphql`
    fragment ExampleFrontmatterFragment on MarkdownRemark {
        frontmatter {
            title
            docs
        }
    }
`;

const ExampleDocLinks: React.FC<ExamplePageProps & ExamplePageState> = (props) => {
    return (
        <div className="example-doc-links">
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
                    <div key={i} className="example-doc-link">
                        <span className="example-doc-link-title">{docLink}</span>
                        <a href={docUrls[props.lang]} className="example-doc-link-text">
                            <span className="fas fa-book-open example-doc-link-icon" />
                            {`${PLangName[props.lang]} Docs`}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

const ExamplePageFC: React.FC<ExamplePageProps & ExamplePageState> = (props) => {
    return (
        <div className="example-page">
            <h1>{props.frontmatter.title}</h1>
            <ExampleDocLinks {...props} />
            <ExampleContent rawHtml={props.rawHtml} />
        </div>
    );
};

export const ExamplePage = connect<ExamplePageState, ExamplePageProps, {}, RootState>((state) => ({
    lang: state.pLang,
}))(ExamplePageFC);
