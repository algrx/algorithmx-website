import * as React from 'react'

import { Head } from '../components/head'
import { HeaderConnected, HeaderOwnProps } from '../components/header'
import './global.scss'

export const GlobalHeader: React.FC<HeaderOwnProps> = props => {
  return (
    <div className='global-header'>
    <Head/>
    <HeaderConnected {...props}/>
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
