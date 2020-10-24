import React from 'react';

import { GlobalHeader } from './global';
import { HeaderSection } from '../components/header';
import { PLangBarConnected } from '../components/plangbar';
import './fullpage.scss';
import '../components/page.scss';

interface FullPageProps extends React.Props<unknown> {
    readonly section: HeaderSection;
    readonly pLangBar: boolean;
}

export const FullPageTemplate: React.FC<FullPageProps> = (props) => {
    return (
        <>
            <GlobalHeader curSection={props.section}>
                {props.pLangBar ? <PLangBarConnected /> : <></>}
            </GlobalHeader>
            <div className="full-page-container">
                <div className="full-page">{props.children}</div>
            </div>
        </>
    );
};
