import * as React from 'react'

import { Head } from '../components/head'
import { Header, HeaderProps } from '../components/header'
import './global.scss'

export const GlobalHeader: React.FC<HeaderProps> = props => {
  return (
    <div className='global-header'>
    <Head/>
    <Header curSection={props.curSection}/>
    {props.children}
    </div>
  )
}

export const GlobalBody: React.FC = props => {
  return (
    <div className='global-body'>
      {props.children}
    </div>
  )
}
