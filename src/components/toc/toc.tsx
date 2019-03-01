import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

import * as state from '../../state/toc'
import './toc.scss'
import '../utils.scss'
import { TocContentsData, TocEntryType, TocEntryLink } from './paths'


type TocProps = state.TocProps & state.TocDispatch & {
  readonly contents: TocContentsData
  readonly curPath: string
}

interface TocLinkProps {
  readonly name: string
  readonly path: string
}
interface TocDropdownProps extends TocLinkProps {
  readonly entries: ReadonlyArray<TocLinkProps>
}

const TocDropdownLink: React.FC<TocProps & TocLinkProps> = props => (
  <div className={`toc-dropdown-link
      ${props.curPath === props.path ? 'toc-dropdown-link-cur' : ''}`}>
    <Link to={props.path} className='a-btn'>
      <span className='toc-dropdown-link-text'>{props.name}</span>
      <div className='toc-dropdown-link-overlay'/>
    </Link>
  </div>
)

const TocDropdown: React.FC<TocProps & TocDropdownProps> = props => {
  const open = props.openDropdowns[props.path] || false
  if (props.openDropdowns[props.path] === undefined && props.curPath.startsWith(props.path)) {
    props.onToggleDropdown(props.path)
  }
  return <>
    <div className={`toc-dropdown ${open ? 'toc-dropdown-open' : ''}`}
      onClick={() => props.onToggleDropdown(props.path)}>
      <span className='fas fa-angle-right toc-dropdown-icon'/>
      <span className='toc-dropdown-text'>{props.name}</span>
    </div>

    <div className={`toc-dropdown-menu ${open ? 'toc-dropdown-menu-open' : ''}`}>
      {props.entries.map(entry => {
        return <TocDropdownLink key={entry.path} {...props} name={entry.name} path={entry.path}/>
      })}
    </div>
  </>
}

export const linkPropsFromEntry = (entry: TocEntryLink) => ({
  name: entry.name,
  path: entry.path
})

const Toc: React.FC<TocProps> = props => {
  return (
    <div className='toc'>
      {props.contents.entries.map(entry => {
        if (entry.type === TocEntryType.Dropdown) {
          const entriesProps = entry.entries.map(linkPropsFromEntry)
          return <TocDropdown key={entry.path} {...props} name={entry.name} path={entry.path} entries={entriesProps}/>
        }
      })}
    </div>
  )
}

export const TocConnected = connect(
  state.mapStateToProps,
  state.mapDispatchToProps
)(Toc)

export const TocContainerLeft: React.FC = props => (
  <div className='toc-container'>
    {props.children}
  </div>
)
export const TocPage: React.FC = props => (
  <div className='toc-page'>
    {props.children}
  </div>
)
