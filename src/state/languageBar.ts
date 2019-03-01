import { Action, Dispatch, AnyAction, Reducer } from 'redux'
import { RootState } from './state'

export enum PLanguage {
  JS = 'js',
  Python = 'python'
}
export const PLanguageNames: { readonly [k in PLanguage]: string } = {
  [PLanguage.JS]: 'JavaScript',
  [PLanguage.Python]: 'Python'
}

export enum LanguageBarActionTypes {
  ChangeLang = 'change-language'
}
export interface ActionChangeLang extends Action {
  readonly type: LanguageBarActionTypes.ChangeLang
  readonly newLang: PLanguage
}

export interface LanguageBarProps {
  readonly curLang: PLanguage
}
export interface LanguageBarDispatch {
  readonly onChangeLang: (newLang: PLanguage) => void
}

export const mapStateToProps = (state: RootState): LanguageBarProps => ({
  curLang: state.apiLang
})
export const mapDispatchToProps = (dispatch: Dispatch<ActionChangeLang>): LanguageBarDispatch => ({
  onChangeLang: newLang => dispatch({
    type: LanguageBarActionTypes.ChangeLang,
    newLang
  })
})

export const langReducer: Reducer<PLanguage, AnyAction | ActionChangeLang> = (state, action) => {
  if (state && action.type === LanguageBarActionTypes.ChangeLang) {
    return action.newLang
  }
  return state || PLanguage.JS
}
