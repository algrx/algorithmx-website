import React from 'react'

import { extractJsonFromHtml } from '../contentUtils'
import { ExampleType, ExampleData, CodeExampleConnected } from './codeExample'
import './page.scss'

export const ApiContent: React.FC<{ readonly rawHtml: string }> = props => {
  const htmlData = extractJsonFromHtml(props.rawHtml)
  return <>
    {htmlData.map((d, i) => {
      if (typeof d === 'object' && (d as ExampleData).type === ExampleType.AlgxExample) {
        return <CodeExampleConnected key={i} {...d as ExampleData}/>
      } else if (typeof d === 'string') {
        return <div key={i} dangerouslySetInnerHTML={{__html: d }}/>
      }
    })}
  </>
}
