import { OpenGraphMeta } from './OpenGraph/index.ts'
import { TwitterMeta } from './Twitter/index.ts'

export interface Meta {
  description?: string
  og?: OpenGraphMeta
  title?: string
  twitter?: TwitterMeta
}
