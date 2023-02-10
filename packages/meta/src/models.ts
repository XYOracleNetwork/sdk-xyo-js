export interface OpenGraphStructured {
  alt?: string
  height?: number
  secure_url?: string
  type?: string
  url?: string
  width?: number
}

export interface TwitterPlayer {
  alt?: string
  height?: number
  stream?: string
  url?: string
  width?: number
}

export interface TwitterApp {
  id?: {
    googleplay?: string
    ipad?: string
    iphone?: string
  }
  name?: {
    googleplay?: string
    ipad?: string
    iphone?: string
  }

  url?: {
    googleplay?: string
    ipad?: string
    iphone?: string
  }
}

export type OpenGraphStructuredProperty = string | OpenGraphStructured | (string | OpenGraphStructured)[]

export interface Meta {
  description?: string

  og?: {
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
  title?: string
  twitter?: {
    app?: TwitterApp
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    creator?: {
      id?: string
      username?: string
    }
    description?: string
    image?: {
      alt?: string
      url?: string
    }
    player?: TwitterPlayer
    site?: {
      id?: string
      username?: string
    }
    title?: string
  }
}
