import React from 'react'

import { GlobalHeader } from './global'
import { NodeProps, MarkdownNode } from './utils'
import { HeaderSection } from '../components/header'
import { LanguageBarConnected } from '../components/languageBar'
import { ApiContent } from '../components/api/content'
import './fullPage.scss'
import '../components/page.scss'


export type FullPageQueryProps = NodeProps<'markdownRemark', MarkdownNode<{}>>

type FullPageProps = FullPageQueryProps & {
  readonly section: HeaderSection
}

export const FullPage: React.FC<FullPageProps> = props => {
  const post = props.data.markdownRemark

  return <>
    <GlobalHeader curSection={HeaderSection.Home}>
      <LanguageBarConnected/>
    </GlobalHeader>
    <div className='full-page-container'>
      <div className='full-page'>
        <ApiContent rawHtml={post.html}/>
      </div>
    </div>
  </>
}
