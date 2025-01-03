import type { Polygon } from 'geojson'

import type { MercatorBoundingBox, MercatorLngLat } from '../../types.ts'
import { boundingBoxToBoundary } from './boundary.ts'

/** @deprecated use form @xylabs/geo */
export const boundingBoxToPolygon = (box: MercatorBoundingBox): Polygon => {
  const boundry = boundingBoxToBoundary(box)
  return {
    coordinates: [boundry.map((lnglng: MercatorLngLat) => lnglng.toArray())],
    type: 'Polygon',
  }
}
