import { Polygon } from 'geojson'

import { MercatorBoundingBox, MercatorLngLat } from '../../types.ts'
import { boundingBoxToBoundary } from './boundary.ts'

export const boundingBoxToPolygon = (box: MercatorBoundingBox): Polygon => {
  const boundry = boundingBoxToBoundary(box)
  return {
    coordinates: [boundry.map((lnglng: MercatorLngLat) => lnglng.toArray())],
    type: 'Polygon',
  }
}
