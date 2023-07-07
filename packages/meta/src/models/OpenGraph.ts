export interface OpenGraphStructured {
  ''?: string
  alt?: string
  height?: number
  secure_url?: string
  type?: string
  url?: string
  width?: number
}

export type OpenGraphStructuredProperty = string | OpenGraphStructured | (string | OpenGraphStructured)[]

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
