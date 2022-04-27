import { Polygon } from 'geojson'

import { MercatorBoundingBox, MercatorLngLat } from '../../types'
import { boundingBoxToBoundry } from './boundry'

export const boundingBoxToPolygon = (box: MercatorBoundingBox): Polygon => {
  const boundry = boundingBoxToBoundry(box)
  return {
    coordinates: [boundry.map((lnglng: MercatorLngLat) => lnglng.toArray())],
    type: 'Polygon',
  }
}
