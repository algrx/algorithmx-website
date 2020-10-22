import { Action, Dispatch, AnyAction, Reducer } from 'redux';
import { RootState } from './state';

export interface TocOpenDropdownState {
    readonly [k: string]: boolean;
}

export enum TocActionTypes {
    ToggleDropdown = 'toc/toggle-dropdown',
}
export interface ActionToggleDropdown extends Action {
    readonly type: TocActionTypes.ToggleDropdown;
    readonly path: string;
}

export interface TocProps {
    readonly openDropdowns: TocOpenDropdownState;
}
export interface TocDispatch {
    readonly onToggleDropdown: (path: string) => void;
}

export const mapStateToProps = (state: RootState, ownProps: {}): TocProps => {
    return {
        openDropdowns: state.tocDropdowns,
    };
};
export const mapDispatchToProps = (dispatch: Dispatch<ActionToggleDropdown>): TocDispatch => ({
    onToggleDropdown: (path) =>
        dispatch({
            type: TocActionTypes.ToggleDropdown,
            path,
        }),
});

export const tocReducer: Reducer<TocOpenDropdownState, AnyAction | ActionToggleDropdown> = (
    state,
    action
) => {
    if (state && action.type === TocActionTypes.ToggleDropdown) {
        return { ...state, [action.path]: !(state[action.path] || false) };
    }
    return state || {};
};
