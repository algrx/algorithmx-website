import * as yamlParser from 'js-yaml'
import { createDocument } from 'domino'

const DATA_TAG = 'data'

enum DataTypes {
  JSON = 'json',
  YAML = 'yaml'
}

export interface DataTag {
  readonly type: string
}

const DOCUMENT = typeof document === 'undefined' ? createDocument() : document

export const extractJsonFromHtml = (htmlStr: string): ReadonlyArray<string | object> => {
  const element = DOCUMENT.createElement('div')
  /* tslint:disable */
  element.innerHTML = htmlStr
  /* tslint:enable */

  return Array.from(element.children).reduce((result: ReadonlyArray<string | object>, el) => {
    if (el.tagName.toLocaleLowerCase() === DATA_TAG) {
      const dataType = el.getAttribute('type') as DataTypes
      const parsed = dataType === DataTypes.JSON ? JSON.parse(el.textContent!) : yamlParser.load(el.textContent!)
      return result.concat([parsed])
    } else if (result.length === 0) {
      return [el.outerHTML]
    } else {
      const prev = result[result.length - 1]
      return typeof prev === 'string' ? result.slice(0, -1).concat([prev + el.outerHTML])
        : result.concat([el.outerHTML])
    }
  }, [])
}
