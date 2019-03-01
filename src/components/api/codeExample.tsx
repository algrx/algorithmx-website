import './declarations'
import React from 'react'
import { connect } from 'react-redux'
import Prism from 'prismjs'
import * as Babel from '@babel/standalone'
import * as algorithmx from 'algorithmx'

import { RootState } from '../../state/state'
import { PLanguage } from '../../state/languageBar'
import './codeExample.scss'

export enum ExampleType {
  AlgxExample = 'algorithmx-example'
}
export interface ExampleData {
  readonly type: ExampleType.AlgxExample
  readonly code: { readonly [k in PLanguage]: string }
}

export interface CodeExampleStateProps {
  readonly lang: PLanguage
}

export interface CodeExampleStateProps {
  readonly lang: PLanguage
}

const PRISM_LANGS: { readonly [k in PLanguage]: Prism.LanguageDefinition } = {
  [PLanguage.JS]: Prism.languages.js,
  [PLanguage.Python]: Prism.languages.python
}

const resetCanvas = (canvas: algorithmx.CanvasSelection, el: Element) => {
  canvas.duration(0).eventQ(null).remove().cancelall().startall()
  const size: [number, number] = [el.getBoundingClientRect().width, 200]
  canvas.duration(0).svgattr('width', '100%').size(size)
}

class CodeExample extends React.Component<CodeExampleStateProps & ExampleData> {
  /* tslint:disable */
  private canvas: algorithmx.CanvasSelection | null = null
  private canvasElement: Element | null = null
  /* tslint:enable */

  public render (): React.ReactElement {
    /* tslint:disable */
    const props = this.props
    /* tslint:enable */
    const formattedCode = Prism.highlight(props.code[props.lang], PRISM_LANGS[props.lang])

    const jsCode = Babel.transform(props.code[PLanguage.JS], { presets: ['es2015'] }).code
    const jsCodeFunction = new Function('canvas', jsCode)

    return (
      <div className='code-example'>
        <pre className='code-example-code'>
          <code >
            <span className='code-example-code-text' dangerouslySetInnerHTML={{ __html: formattedCode }}/>
          </code>
        </pre>
        <div className='code-example-output' style={{ height: '200px' }} ref={el => {
          if (el !== null) {
             /* tslint:disable */
            this.canvasElement = el
            if (!this.canvas) this.canvas = algorithmx.canvas(this.canvasElement)
            const canvas = this.canvas
            const canvasElement = this.canvasElement
            /* tslint:enable */

            resetCanvas(canvas, canvasElement)
            jsCodeFunction(canvas)
          }
        }}/>
        <div className='code-example-bar'>
          <div className='code-example-btn' onClick={event => {
            /* tslint:disable */
            const canvas = this.canvas
            const canvasElement = this.canvasElement
            /* tslint:enable */
            if (canvas && canvasElement) {
              resetCanvas(canvas, canvasElement)
              jsCodeFunction(canvas)

              const target = event.currentTarget
              target.classList.add('code-example-btn-rotate')
              setTimeout(() => target.classList.remove('code-example-btn-rotate'), 500)
            }
          }}>
          <span className='fas fa-sync-alt'/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): CodeExampleStateProps => {
  return {
    lang: state.apiLang
  }
}

export const CodeExampleConnected = connect(mapStateToProps)(CodeExample)
