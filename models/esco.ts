export type Type = 'occupation' | 'skill' | 'concept'

type Facet = 'type' | 'isInScheme'

interface Result {
  classId: string
  className: string
  title: string
  uri: string
}

export interface SearchResult {
  type: Type[]
  text: string
  total: number
  offset: number
  limit: number
  language: string
  facet: Facet
  _embedded: {
    results: Result[]
  }
}
