import React from 'react';

import { extractJsonFromHtml } from '../contentUtils';
import { ExampleType, ExampleData, CodeExample } from './codeexample';
import './page.scss';

export const APIContent: React.FC<{ readonly rawHtml: string }> = (props) => {
    const htmlData = extractJsonFromHtml(props.rawHtml);
    return (
        <>
            {htmlData.map((d, i) => {
                if (typeof d === 'object' && (d as ExampleData).type === ExampleType.AlgxExample) {
                    return <CodeExample key={i} {...(d as ExampleData)} />;
                } else if (typeof d === 'string') {
                    return <div key={i} dangerouslySetInnerHTML={{ __html: d }} />;
                }
            })}
        </>
    );
};
