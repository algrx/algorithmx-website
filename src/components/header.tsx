import React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/logo.svg'

import './header.scss'
import './utils.scss'

export enum HeaderSection {
  Home = 'home',
  API = 'api',
  Demo = 'demo'
}

export interface HeaderProps {
  readonly curSection: HeaderSection
}

interface HeaderBtnProps {
  readonly text: string
  readonly section: HeaderSection
  readonly link: string
}
const HeaderBtn: React.FC<HeaderProps & HeaderBtnProps> = props => (
  <div className='header-btn'>
    <Link to={props.link} className='a-btn'>
      <span>{props.text}</span>
      <div className={`header-btn-overlay ${props.curSection === props.section ? 'header-btn-overlay-cur' : ''}`}/>
    </Link>
  </div>
)

export const Header: React.FC<HeaderProps> = props => (
  <header>
    <div className='header-left'>
      <div className='header-title'>
        <Logo className='header-logo'/>
        AlgorithmX
      </div>
      <div className='header-btn-container'>
        <HeaderBtn {...props} text='HOME' link='/' section={HeaderSection.Home}/>
        <HeaderBtn {...props} text='API' link='/api/' section={HeaderSection.API}/>
        <div className='header-btn header-dropdown-btn'>
          <span>DOCS</span>
          <div className='header-dropdown-menu header-dropdown-menu-docs'>
            <div className='header-dropdown-inner-btn'>
              <a href='https://algrx.github.io/algorithmx/docs/js/' className='a-btn'>
                <span className='fab fa-js header-dropdown-inner-icon'/>
                JavaScript
              </a>
            </div>
            <div className='header-dropdown-inner-btn'>
              <a href='https://algorithmx-python.readthedocs.io' className='a-btn'>
                <span className='fab fa-python header-dropdown-inner-icon'/>
                Python
              </a>
            </div>
          </div>
          <div className='header-btn-overlay'/>
        </div>
        <HeaderBtn {...props} text='DEMO' link='/demo/' section={HeaderSection.Demo}/>
      </div>
    </div>
    <div className='header-right'>
      <div className='header-right-btn'>
        <a href='https://github.com/algrx/algorithmx' className='a-btn'>
          <span className='fab fa-github header-right-icon'/>
        </a>
      </div>
    </div>
  </header>
)
