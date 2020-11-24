import React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch, AnyAction, Reducer } from 'redux';

import { PLang, PLangName, ChangePLangProps, mapChangePLangToProps } from '../state/plang';
import { ToggleBtn } from './toggle-btn';
import { RootState } from '../state/root';
import './language-bar.scss';

interface PLangBarStateProps {
    readonly curPLang: PLang;
}
type PLangBarProps = PLangBarStateProps & ChangePLangProps;

interface PLangBtnProps {
    readonly text: string;
    readonly pLang: PLang;
    readonly icon: string;
}

const PLangBtn: React.FC<PLangBtnProps & PLangBarProps> = (props) => (
    <div
        className={`language-bar-btn ${
            props.curPLang === props.pLang ? 'language-bar-btn-cur' : ''
        }`}
        onClick={() => props.dispatchChangePLang(props.pLang)}
    >
        <ToggleBtn />
        <span className={`${props.icon} language-bar-btn-icon`} />
        <span className="language-bar-btn-text">{props.text}</span>
    </div>
);

const PLangBarFC: React.FC<PLangBarProps> = (props) => (
    <div className="language-bar">
        <div className="language-bar-btn-container">
            <PLangBtn {...props} text="JavaScript" pLang={PLang.JS} icon="fab fa-js" />
            <PLangBtn {...props} text="Python" pLang={PLang.Python} icon="fab fa-python" />
        </div>
    </div>
);

export const PLangBar = connect<PLangBarStateProps, ChangePLangProps, {}, RootState>(
    (state) => ({ curPLang: state.pLang }),
    mapChangePLangToProps
)(PLangBarFC);
