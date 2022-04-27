export interface OpenGraphStructured {
  url?: string
  secure_url?: string
  type?: string
  width?: number
  height?: number
  alt?: string
}

export interface TwitterPlayer {
  url?: string
  stream?: string
  width?: number
  height?: number
  alt?: string
}

export interface TwitterApp {
  name?: {
    iphone?: string
    ipad?: string
    googleplay?: string
  }
  id?: {
    iphone?: string
    ipad?: string
    googleplay?: string
  }
  url?: {
    iphone?: string
    ipad?: string
    googleplay?: string
  }
}

export type OpenGraphStructuredProperty = string | OpenGraphStructured | (string | OpenGraphStructured)[]

export interface Meta {
  title?: string
  description?: string
  og?: {
    title?: string
    type?: string
    image?: OpenGraphStructuredProperty
    url?: string
    audio?: OpenGraphStructuredProperty
    description?: string
    determiner?: string
    locale?: string | string[]
    site_name?: string
    video?: OpenGraphStructuredProperty
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    desription?: string
    title?: string
    image?: {
      url?: string
      alt?: string
    }
    player?: TwitterPlayer
    site?: {
      username?: string
      id?: string
    }
    creator?: {
      username?: string
      id?: string
    }
    app?: TwitterApp
  }
}
