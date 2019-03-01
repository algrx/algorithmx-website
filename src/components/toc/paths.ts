import { graphql } from 'gatsby'
import { join as pathJoin } from 'path'

export enum TocEntryType {
  Dropdown = 'dropdown',
  Link = 'link'
}
export interface TocEntry {
  readonly type: TocEntryType
  readonly name: string
  readonly path: string
}
export interface TocEntryLink extends TocEntry {
  readonly type: TocEntryType.Link
}
export interface TocEntryDropdown extends TocEntry {
  readonly type: TocEntryType.Dropdown
  readonly entries: ReadonlyArray<TocEntryLink>
}
export interface TocContentsData {
  readonly entries: ReadonlyArray<TocEntryLink | TocEntryDropdown>
}

export enum TocJsonEntryType {
  File = 'file',
  Folder = 'folder'
}
export interface TocJson {
  readonly entries: ReadonlyArray<{
    readonly type: TocJsonEntryType
    readonly name: string
    readonly path: string
  }>
}

export interface TocRedirects {
  readonly [k: string]: string
}

export const graphqlTocJsonFragmentStr = `
  fragment TocJsonFragment on Json {
    entries {
      type
      name
      path
    }
  }
`

export const gqlTocJsonFragment = () => graphql`
  fragment TocJsonFragment on Json {
    entries {
      type
      name
      path
    }
  }
`

interface PathNames { readonly [k: string]: string }

const dropdownEntries = (path: string, pathNames: PathNames): ReadonlyArray<TocEntryLink> => {
  const childPaths = Object.keys(pathNames).filter(k => k.startsWith(path))
  return childPaths.map((childPath): TocEntryLink => ({
    type: TocEntryType.Link,
    name: pathNames[childPath],
    path: childPath
  })).sort((a, b) => a.name < b.name ? -1 : 1)
}

export const contentsFromJson = (basePath: string, json: TocJson, pathNames: PathNames): TocContentsData => {
  return {
    entries: json.entries.map(jsonEntry => {
      const fullJsonPath = pathJoin(basePath, jsonEntry.path)
      if (jsonEntry.type === TocJsonEntryType.Folder) {
        const entry: TocEntryDropdown = {
          type: TocEntryType.Dropdown,
          name: jsonEntry.name,
          path: fullJsonPath,
          entries: dropdownEntries(fullJsonPath, pathNames)
        }
        return entry
      } else {
        const entry: TocEntryLink = {
          type: TocEntryType.Link,
          name: jsonEntry.name,
          path: fullJsonPath
        }
        return entry
      }
    })
  }
}

export const redirectsFromJson = (basePath: string, json: TocJson, paths: ReadonlyArray<string>): TocRedirects => {
  const folderRedirects = json.entries.reduce((result, jsonEntry) => {
    const fullJsonPath = pathJoin(basePath, jsonEntry.path)
    if (jsonEntry.type === TocJsonEntryType.Folder) {
      const childPaths = paths.filter(p => p.startsWith(fullJsonPath)).sort()
      return {...result, [fullJsonPath]: childPaths[0] }
    }
    return result
  }, {})

  const firstJsonPath = pathJoin(basePath, json.entries[0].path)
  return {...folderRedirects, [basePath]: firstJsonPath }
}
