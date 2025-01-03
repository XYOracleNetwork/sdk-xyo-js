import type { MercatorLngLat, MercatorTile } from '../../types.ts'
import { tileToBoundingBox } from './boundingbox.ts'

/** @deprecated use form @xylabs/geo */
export const tileToPoint = (tile: MercatorTile): MercatorLngLat => {
  const boundingBox = tileToBoundingBox(tile)
  boundingBox.getCenter()
  return boundingBox.getCenter()
}
