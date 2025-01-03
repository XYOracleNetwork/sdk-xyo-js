import MapBox from 'mapbox-gl'

/** @deprecated use form @xylabs/geo */
export type MercatorTile = number[]
/** @deprecated use form @xylabs/geo */
export type MercatorBoundary = MercatorLngLat[]
/** @deprecated use form @xylabs/geo */
export class MercatorBoundingBox extends MapBox.LngLatBounds {}
/** @deprecated use form @xylabs/geo */
export class MercatorLngLat extends MapBox.LngLat {}
