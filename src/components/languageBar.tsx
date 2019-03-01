import React from 'react'
import { connect } from 'react-redux'

import * as state from '../state/languageBar'
import { PLanguage } from '../state/languageBar'
import { ToggleBtn } from './toggleBtn'
import './languageBar.scss'

type LanguageBarProps = state.LanguageBarProps & state.LanguageBarDispatch

interface LanguageBarBtnProps {
  readonly text: string
  readonly lang: PLanguage
  readonly icon: string
}

const LanguageBarBtn: React.FC<LanguageBarProps & LanguageBarBtnProps> = props => (
  <div className={`language-bar-btn ${props.curLang === props.lang ? 'language-bar-btn-cur' : ''}`}
    onClick={() => props.onChangeLang(props.lang)}>

    <ToggleBtn/>
    <span className={`${props.icon} language-bar-btn-icon`}/>
    <span className='language-bar-btn-text'>{props.text}</span>
  </div>
)

const LanguageBar: React.FC<LanguageBarProps> = props => (
  <div className='language-bar'>
    <div className='language-bar-btn-container'>
      <LanguageBarBtn {...props} text='JavaScript' lang={PLanguage.JS} icon='fab fa-js'/>
      <LanguageBarBtn {...props} text='Python' lang={PLanguage.Python} icon='fab fa-python'/>
    </div>
  </div>
)

export const LanguageBarConnected = connect(
  state.mapStateToProps,
  state.mapDispatchToProps
)(LanguageBar)
