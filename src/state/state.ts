import * as redux from 'redux'
import { Reducer, AnyAction, combineReducers } from 'redux'

import { PLang, ActionChangePLang, pLangReducer } from './plang'
import { TocOpenDropdownState, ActionToggleDropdown, tocReducer } from './toc'
import { HeaderState, initHeaderState, headerReducer } from '../components/header'
import { DemoState, initDemoState, demoReducer } from '../pages/demo'

export interface RootState {
  readonly pLang: PLang
  readonly tocDropdowns: TocOpenDropdownState
  readonly headerState: HeaderState
  readonly demoState: DemoState
}

const initialState: RootState = {
  pLang: PLang.JS,
  tocDropdowns: {},
  headerState: initHeaderState,
  demoState: initDemoState
}

const rootReducer: Reducer<RootState> = combineReducers({
  pLang: pLangReducer,
  tocDropdowns: tocReducer,
  headerState: headerReducer,
  demoState: demoReducer
})

export const createStore = () => redux.createStore(rootReducer, initialState)
