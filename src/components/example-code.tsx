import './declarations';
import React from 'react';
import { connect } from 'react-redux';
import Prism from 'prismjs';
import * as Babel from '@babel/standalone';
import { createCanvas, Canvas } from 'algorithmx';

import { RootState } from '../state/root';
import { PLang } from '../state/plang';
import './example-code.scss';

export enum ExampleType {
    AlgxExample = 'algorithmx-example',
}
export interface ExampleData {
    readonly type: ExampleType.AlgxExample;
    readonly code: { readonly [k in PLang]: string };
}

export interface ExampleCodeState {
    readonly pLang: PLang;
}

const PRISM_LANGS: { readonly [k in PLang]: Prism.Grammar } = {
    [PLang.JS]: Prism.languages.js,
    [PLang.Python]: Prism.languages.python,
};

const resetCanvas = (canvas: Canvas, el: Element) => {
    canvas.duration(0).withQ(null).remove();
    canvas.queues().clear().start();

    canvas.duration(0).attrs({
        svgattrs: { width: '100%' },
        size: [el.getBoundingClientRect().width, 200],
        zoomtoggle: true,
    })
};

export const ExampleCodeFC: React.FC<ExampleCodeState & ExampleData> = (props) => {
    const [canvas, setCanvas] = React.useState<Canvas | null>(null);
    const canvasRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (canvas === null) setCanvas(createCanvas(canvasRef.current!));
        else {
            resetCanvas(canvas, canvasRef.current!);
            jsCodeFunction(canvas);
        }
    });

    const prismPLangId = {
        [PLang.JS]: 'js',
        [PLang.Python]: 'python',
    }[props.pLang];

    const formattedCode = Prism.highlight(
        props.code[props.pLang],
        PRISM_LANGS[props.pLang],
        prismPLangId
    );

    const jsCode = Babel.transform(props.code[PLang.JS], {
        presets: ['es2015'],
    }).code;
    const jsCodeFunction = new Function('canvas', jsCode);

    return (
        <div className="code-example">
            <pre className="code-example-code">
                <code>
                    <span
                        className="code-example-code-text"
                        dangerouslySetInnerHTML={{ __html: formattedCode }}
                    />
                </code>
            </pre>
            <div className="code-example-output" style={{ height: '200px' }} ref={canvasRef} />
            <div className="code-example-bar">
                <div
                    className="code-example-btn"
                    onClick={(event) => {
                        if (!(canvas && canvasRef.current)) return;

                        resetCanvas(canvas, canvasRef.current);
                        jsCodeFunction(canvas);

                        const target = event.currentTarget;
                        target.classList.add('code-example-btn-rotate');
                        setTimeout(() => target.classList.remove('code-example-btn-rotate'), 500);
                    }}
                >
                    <span className="fas fa-sync-alt" />
                </div>
            </div>
        </div>
    );
};

export const ExampleCode = connect<ExampleCodeState, {}, {}, RootState>((state) => ({
    pLang: state.pLang,
}))(ExampleCodeFC);
