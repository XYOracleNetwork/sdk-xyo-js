import type { OpenGraphStructured } from './OpenGraphStructured.ts'

export type OpenGraphStructuredProperty = string | OpenGraphStructured | (string | OpenGraphStructured)[]
