import React from 'react';

import { extractJsonFromHtml } from './content-utils';
import { ExampleType, ExampleData, CodeExample } from './example-code';
import './example-page.scss';

export const ExampleContent: React.FC<{ readonly rawHtml: string }> = (props) => {
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
