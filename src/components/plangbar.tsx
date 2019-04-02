import React from 'react'
import { connect } from 'react-redux'
import { Action, Dispatch, AnyAction, Reducer } from 'redux'

import { PLang, PLangName, ChangePLangProps, mapChangePLangToProps } from '../state/plang'
import { ToggleBtn } from './toggleBtn'
import { RootState } from '../state/state'
import './plangbar.scss'

interface PLangBarStateProps {
  readonly curPLang: PLang
}
type PLangBarProps = PLangBarStateProps & ChangePLangProps

interface LanguageBarBtnProps {
  readonly text: string
  readonly pLang: PLang
  readonly icon: string
}

const PLangBarBtn: React.FC<LanguageBarBtnProps & PLangBarProps> = props => (
  <div className={`language-bar-btn ${props.curPLang === props.pLang ? 'language-bar-btn-cur' : ''}`}
    onClick={() => props.dispatchChangePLang(props.pLang)}>

    <ToggleBtn/>
    <span className={`${props.icon} language-bar-btn-icon`}/>
    <span className='language-bar-btn-text'>{props.text}</span>
  </div>
)

const PLangBar: React.FC<PLangBarProps> = props => (
  <div className='language-bar'>
    <div className='language-bar-btn-container'>
      <PLangBarBtn {...props} text='JavaScript' pLang={PLang.JS} icon='fab fa-js'/>
      <PLangBarBtn {...props} text='Python' pLang={PLang.Python} icon='fab fa-python'/>
    </div>
  </div>
)

export const PLangBarConnected = connect<PLangBarStateProps, ChangePLangProps, {}, RootState>(
  state => ({ curPLang: state.pLang }),
  mapChangePLangToProps
)(PLangBar)
