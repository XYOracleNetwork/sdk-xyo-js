import type { OpenGraphStructuredProperty } from './OpenGraphStructuredProperty.ts'

// TODO: There is slightly different fields for video/image/audio and we should create
// separate interfaces for each

export interface OpenGraphMeta {
  audio?: OpenGraphStructuredProperty
  description?: string
  determiner?: string
  image?: OpenGraphStructuredProperty
  locale?: string | string[]
  site_name?: string
  title?: string
  type?: string
  url?: string
  video?: OpenGraphStructuredProperty
}
