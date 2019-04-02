import { Action, Dispatch, AnyAction, Reducer } from 'redux'
export enum PLang {
  JS = 'js',
  Python = 'python'
}
export const PLangName: { readonly [k in PLang]: string } = {
  [PLang.JS]: 'JavaScript',
  [PLang.Python]: 'Python'
}

export enum PLangActionType {
  Change = 'plang/change'
}

export interface ActionChangePLang extends Action {
  readonly type: PLangActionType.Change
  readonly newPLang: PLang
}

export interface ChangePLangProps {
  readonly dispatchChangePLang: (newPLang: PLang) => void
}

export const mapChangePLangToProps = (dispatch: Dispatch<ActionChangePLang>): ChangePLangProps => ({
  dispatchChangePLang: newPLang => dispatch({ type: PLangActionType.Change, newPLang: newPLang })
})

export const pLangReducer: Reducer<PLang, AnyAction> = (state = PLang.JS, action) => {
  if (action.type === PLangActionType.Change) return (action as ActionChangePLang).newPLang
  else return state
}
