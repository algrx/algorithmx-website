import React from 'react';

import { extractJsonFromHtml } from './content-utils';
import { ExampleType, ExampleData, ExampleCode } from './example-code';
import './example-page.scss';

export const ExampleContent: React.FC<{ readonly rawHtml: string }> = (props) => {
    const htmlData = extractJsonFromHtml(props.rawHtml);
    return (
        <>
            {htmlData.map((d, i) => {
                if (typeof d === 'object' && (d as ExampleData).type === ExampleType.AlgxExample) {
                    return <ExampleCode key={i} {...(d as ExampleData)} />;
                } else if (typeof d === 'string') {
                    return <div key={i} dangerouslySetInnerHTML={{ __html: d }} />;
                }
            })}
        </>
    );
};
