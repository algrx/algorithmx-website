import './declarations'
import React from 'react'
import { connect } from 'react-redux'
import Prism from 'prismjs'
import * as Babel from '@babel/standalone'
import * as algorithmx from 'algorithmx'

import { RootState } from '../../state/state'
import { PLang } from '../../state/plang'
import './codeexample.scss'

export enum ExampleType {
  AlgxExample = 'algorithmx-example'
}
export interface ExampleData {
  readonly type: ExampleType.AlgxExample
  readonly code: { readonly [k in PLang]: string }
}

export interface CodeExampleStateProps {
  readonly pLang: PLang
}

const PRISM_LANGS: { readonly [k in PLang]: Prism.Grammar } = {
  [PLang.JS]: Prism.languages.js,
  [PLang.Python]: Prism.languages.python
}

const resetCanvas = (canvas: algorithmx.CanvasSelection, el: Element) => {
  canvas.duration(0).eventQ(null).remove().cancelall().startall()
  /* tslint:disable */
  const size: [number, number] = [el.getBoundingClientRect().width, 200]
  /* tslint:enable */
  canvas.duration(0).svgattr('width', '100%').size(size)
}

class CodeExample extends React.Component<CodeExampleStateProps & ExampleData> {
  /* tslint:disable */
  private canvas: algorithmx.CanvasSelection | null = null
  private canvasElement: Element | null = null
  /* tslint:enable */

  public render (): JSX.Element {
    const props = this.props
    const prismPLangId = {
      [PLang.JS]: 'js',
      [PLang.Python]: 'python'
    }[props.pLang]
    const formattedCode = Prism.highlight(props.code[props.pLang], PRISM_LANGS[props.pLang], prismPLangId)

    const jsCode = Babel.transform(props.code[PLang.JS], { presets: ['es2015'] }).code
    const jsCodeFunction = new Function('canvas', jsCode)

    return (
      <div className='code-example'>
        <pre className='code-example-code'>
          <code>
            <span className='code-example-code-text' dangerouslySetInnerHTML={{ __html: formattedCode }}/>
          </code>
        </pre>
        <div className='code-example-output' style={{ height: '200px' }} ref={el => {
          if (el !== null) {
            /* tslint:disable */
            this.canvasElement = el
            if (!this.canvas) this.canvas = algorithmx.canvas(this.canvasElement)
            /* tslint:enable */
            const canvas = this.canvas
            const canvasElement = this.canvasElement

            resetCanvas(canvas, canvasElement)
            jsCodeFunction(canvas)
          }
        }}/>
        <div className='code-example-bar'>
          <div className='code-example-btn' onClick={event => {
            const canvas = this.canvas
            const canvasElement = this.canvasElement

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
    pLang: state.pLang
  }
}

export const CodeExampleConnected = connect<CodeExampleStateProps, {}, {}, RootState>(
  state => ({ pLang: state.pLang })
)(CodeExample)
