import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'

import { PLanguage, PLanguageNames } from '../../state/languageBar'
import { ApiContent } from './content'
import { RootState } from '../../state/state'
import './page.scss'

export interface ApiPageFrontmatter {
  readonly title: string
  readonly docs: ReadonlyArray<string>
}

export interface ApiPageStateProps {
  readonly lang: PLanguage
}

export interface ApiPageProps {
  readonly frontmatter: ApiPageFrontmatter
  readonly rawHtml: string
}

export const gqlApiFrontmatterFragment = () => graphql`
  fragment ApiFrontmatterFragment on MarkdownRemark {
    frontmatter {
      title,
      docs
    }
  }
`

const ApiDocLinks: React.FC<ApiPageProps & ApiPageStateProps> = props => {
  return <div className='api-doc-links'>
    {props.frontmatter.docs.map((docLink, i) => {
      const [docLinkClass, docLinkMethod] = docLink.split('.')

      const docUrls: { readonly [k in PLanguage]: string } = {
        [PLanguage.JS]: 'https://algrx.github.io/algorithmx/docs/js/interfaces/'
          + `${docLinkClass.toLowerCase()}.html#${docLinkMethod}`,
        [PLanguage.Python]: 'https://algorithmx-python.readthedocs.io/en/latest/graphics/selections.html#graphics.'
          + `${docLinkClass}.${docLinkMethod}`
      }

      return <div key={i} className='api-doc-link'>
        <span className='api-doc-link-title'>{docLink}</span>
        <a href={docUrls[props.lang]} className='api-doc-link-text'>
          <span className='fas fa-book-open api-doc-link-icon'/>
          {`${PLanguageNames[props.lang]} Docs`}
        </a>
      </div>
    })}
  </div>
}

const ApiPage: React.FC<ApiPageProps & ApiPageStateProps> = props => {
  return (
    <div className='api-page'>
      <h1>{props.frontmatter.title}</h1>
      <ApiDocLinks {...props}/>
      <ApiContent rawHtml={props.rawHtml}/>
    </div>
  )
}

const mapStateToProps = (state: RootState): ApiPageStateProps => {
  return { lang: state.apiLang }
}
export const ApiPageConnected = connect(mapStateToProps)(ApiPage)
