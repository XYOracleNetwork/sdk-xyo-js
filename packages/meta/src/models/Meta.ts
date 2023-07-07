import { OpenGraphMeta } from './OpenGraph'
import { TwitterMeta } from './Twitter'

export interface Meta {
  description?: string
  og?: OpenGraphMeta
  title?: string
  twitter?: TwitterMeta
}
