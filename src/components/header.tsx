import React from 'react';
import { connect } from 'react-redux';
import { Reducer, Action, AnyAction } from 'redux';
import { RootState } from '../state/state';
import { Link } from 'gatsby';

const Logo = require('../assets/logo.svg');

import './header.scss';
import './utils.scss';

export enum HeaderSection {
    Home = 'home',
    API = 'api',
    Docs = 'docs',
    Demo = 'demo',
}

interface HeaderDispatchProps {
    readonly dispatchToggleDropdown: (section: HeaderSection, open: boolean) => void;
}
export interface HeaderOwnProps {
    readonly curSection: HeaderSection;
}

enum HeaderActionType {
    ToggleDropdown = 'header/toggle-dropdown',
}
export interface ActionToggleDropdown extends Action {
    readonly type: HeaderActionType.ToggleDropdown;
    readonly section: HeaderSection;
    readonly open: boolean;
}

interface HeaderBtnProps {
    readonly text: string;
    readonly section: HeaderSection;
    readonly link: string;
}
const HeaderBtn: React.FC<HeaderOwnProps & HeaderBtnProps> = (props) => {
    const isCur = props.curSection === props.section;
    return (
        <div className={`header-btn ${isCur ? 'header-btn-cur' : ''}`}>
            <Link to={props.link} className="a-btn">
                <span>{props.text}</span>
                <div className={`header-btn-overlay ${isCur ? 'header-btn-overlay-cur' : ''}`} />
            </Link>
        </div>
    );
};

const Header: React.FC<HeaderOwnProps & HeaderDispatchProps> = (props) => (
    <header>
        <div className="header-left">
            <div className="header-title">
                <Logo className="header-logo" />
                AlgorithmX
            </div>
            <div className="header-btn-container">
                <HeaderBtn {...props} text="HOME" link="/" section={HeaderSection.Home} />
                <HeaderBtn
                    {...props}
                    text="API"
                    link="/api/Selection/add"
                    section={HeaderSection.API}
                />
                <div
                    className="header-btn header-dropdown-btn"
                    onMouseEnter={() => props.dispatchToggleDropdown(HeaderSection.Docs, true)}
                    onMouseLeave={() => props.dispatchToggleDropdown(HeaderSection.Docs, false)}
                >
                    <span>DOCS</span>
                    <div className="header-dropdown-menu header-dropdown-menu-docs">
                        <div className="header-dropdown-inner-btn">
                            <a
                                href="https://algrx.github.io/algorithmx/docs/js/"
                                target="_blank"
                                className="a-btn"
                            >
                                <span className="fab fa-js header-dropdown-inner-icon" />
                                JavaScript
                            </a>
                        </div>
                        <div className="header-dropdown-inner-btn">
                            <a
                                href="https://algrx.github.io/algorithmx/docs/python"
                                target="_blank"
                                className="a-btn"
                            >
                                <span className="fab fa-python header-dropdown-inner-icon" />
                                Python
                            </a>
                        </div>
                    </div>
                    <div className="header-btn-overlay" />
                </div>
                <HeaderBtn {...props} text="DEMO" link="/demo/" section={HeaderSection.Demo} />
            </div>
        </div>
        <div className="header-right">
            <div className="header-right-btn">
                <a href="https://github.com/algrx/algorithmx" className="a-btn">
                    <span className="fab fa-github header-right-icon" />
                </a>
            </div>
        </div>
    </header>
);

export interface HeaderState {
    readonly dropdowns: {
        readonly [s in HeaderSection]?: boolean;
    };
}
export const initHeaderState: HeaderState = {
    dropdowns: {},
};
export const headerReducer: Reducer<HeaderState, AnyAction> = (state = initHeaderState, action) => {
    if (action.type === HeaderActionType.ToggleDropdown) {
        return {
            ...state,
            dropdowns: {
                ...state.dropdowns,
                [(action as ActionToggleDropdown).section]: (action as ActionToggleDropdown).open,
            },
        };
    }
    return state;
};

export const HeaderConnected = connect<{}, HeaderDispatchProps, HeaderOwnProps, RootState>(
    () => ({}),
    (dispatch) => ({
        dispatchToggleDropdown: (section, open) =>
            dispatch<ActionToggleDropdown>({
                type: HeaderActionType.ToggleDropdown,
                section,
                open,
            }),
    })
)(Header);
