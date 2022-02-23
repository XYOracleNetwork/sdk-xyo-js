import { Polygon, Position } from 'geojson'

import { MercatorTile } from '../../types'
import { tileToBoundingBox } from './boundingbox'

const tileToGeoJson = (tile: MercatorTile): Polygon => {
  const box = tileToBoundingBox(tile)
  const poly: Polygon = {
    coordinates: [
      [
        box.getNorthWest().toArray() as Position,
        box.getNorthEast().toArray() as Position,
        box.getSouthEast().toArray() as Position,
        box.getSouthWest().toArray() as Position,
        box.getNorthWest().toArray() as Position,
      ],
    ],
    type: 'Polygon',
  }
  return poly
}

export { tileToGeoJson }
