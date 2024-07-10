import { Polygon } from 'geojson'

import { MercatorBoundingBox, MercatorLngLat } from '../../types.js'
import { boundingBoxToBoundary } from './boundary.js'

export const boundingBoxToPolygon = (box: MercatorBoundingBox): Polygon => {
  const boundry = boundingBoxToBoundary(box)
  return {
    coordinates: [boundry.map((lnglng: MercatorLngLat) => lnglng.toArray())],
    type: 'Polygon',
  }
}
