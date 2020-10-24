import React from 'react';
import { connect } from 'react-redux';
import { Reducer, Action } from 'redux';

import { RootState } from '../state/state';
import { GlobalHeader } from '../templates/global';
import { HeaderSection, HeaderState } from '../components/header';
import './demo.scss';

const DEMO_URL = 'https://algrx.github.io/algorithmx-demo';

enum DemoActionType {
    Init = 'demo/init',
    Load = 'demo/load',
}

interface DemoStateProps {
    readonly loaded: boolean;
    readonly headerState: HeaderState;
}
interface DemoDispatchProps {
    readonly dispatchInit: () => void;
    readonly dispatchLoad: () => void;
}

export const DempPageFC: React.FC<DemoStateProps & DemoDispatchProps> = (props) => {
    const iframeRef = React.useRef<HTMLIFrameElement>(null);
    React.useEffect(() => {
        props.dispatchInit();

        return () => {
            if (!iframeRef.current) return;
            const iframe = iframeRef.current;
            try {
                if (iframe.contentWindow && iframe.contentWindow.onbeforeunload) {
                    iframe.contentWindow.onbeforeunload({} as BeforeUnloadEvent);
                }
            } catch (err) {}
        };
    });

    const hasOpenDropdown = Object.values(props.headerState.dropdowns).includes(true);
    return (
        <div className={`demo-wrapper ${props.loaded ? 'demo-wrapper-loaded' : ''}`}>
            <GlobalHeader curSection={HeaderSection.Demo} />
            <iframe
                className={`demo ${hasOpenDropdown ? 'demo-inactive' : ''}`}
                src={DEMO_URL}
                onLoad={() => props.dispatchLoad()}
                ref={iframeRef}
            ></iframe>
            {!props.loaded ? (
                <div className="demo-loading">
                    <span className="fas fa-spinner fa-spin" />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export interface DemoState {
    readonly loaded: boolean;
}
export const initDemoState: DemoState = {
    loaded: false,
};
export const demoReducer: Reducer<DemoState> = (state = initDemoState, action) => {
    if (action.type === DemoActionType.Init) return initDemoState;
    if (action.type === DemoActionType.Load) return { ...state, loaded: true };
    return state;
};

const DemoPage = connect<DemoStateProps, DemoDispatchProps, {}, RootState>(
    (state) => ({
        loaded: state.demoState.loaded,
        headerState: state.headerState,
    }),
    (dispatch) => ({
        dispatchInit: () => dispatch({ type: DemoActionType.Init }),
        dispatchLoad: () => dispatch({ type: DemoActionType.Load }),
    })
)(DempPageFC);

export default DemoPage;
