import { OpenGraphMeta } from './OpenGraph/index.js'
import { TwitterMeta } from './Twitter/index.js'

export interface Meta {
  description?: string
  og?: OpenGraphMeta
  title?: string
  twitter?: TwitterMeta
}
