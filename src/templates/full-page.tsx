import React from 'react';

import { GlobalHeader } from './global';
import { HeaderSection } from '../components/header';
import { PLangBar } from '../components/language-bar';
import './full-page.scss';
import '../components/page.scss';

interface FullPageProps extends React.Props<unknown> {
    readonly section: HeaderSection;
    readonly pLangBar: boolean;
}

export const FullPageTemplate: React.FC<FullPageProps> = (props) => {
    return (
        <>
            <GlobalHeader curSection={props.section}>
                {props.pLangBar ? <PLangBar /> : <></>}
            </GlobalHeader>
            <div className="full-page-container">
                <div className="full-page">{props.children}</div>
            </div>
        </>
    );
};
