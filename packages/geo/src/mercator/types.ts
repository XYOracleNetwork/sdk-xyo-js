import { LngLat, LngLatBounds } from 'mapbox-gl'

type MercatorTile = number[]
type MercatorBoundary = MercatorLngLat[]
class MercatorBoundingBox extends LngLatBounds {}
class MercatorLngLat extends LngLat {}

export { MercatorBoundingBox, MercatorLngLat }
export type { MercatorBoundary, MercatorTile }
