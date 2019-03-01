import * as redux from 'redux'
import { Reducer, AnyAction, combineReducers } from 'redux'

import { PLanguage, ActionChangeLang, langReducer } from './languageBar'
import { TocOpenDropdownState, ActionToggleDropdown, tocReducer } from './toc'

export interface RootState {
  readonly apiLang: PLanguage
  readonly tocDropdowns: TocOpenDropdownState
}

type RootAction = AnyAction | ActionChangeLang | ActionToggleDropdown

const initialState: RootState = {
  apiLang: PLanguage.JS,
  tocDropdowns: {}
}

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  apiLang: langReducer,
  tocDropdowns: tocReducer
})

export const createStore = () => redux.createStore(rootReducer, initialState)
