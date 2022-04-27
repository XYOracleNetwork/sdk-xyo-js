// eslint-disable-next-line no-restricted-imports
import { LngLat, LngLatBounds } from 'mapbox-gl'

type MercatorTile = number[]
type MercatorBoundry = MercatorLngLat[]
class MercatorBoundingBox extends LngLatBounds {}
class MercatorLngLat extends LngLat {}

export { MercatorBoundingBox, MercatorLngLat }
export type { MercatorBoundry, MercatorTile }
