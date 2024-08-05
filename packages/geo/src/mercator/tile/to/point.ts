import { MercatorLngLat, MercatorTile } from '../../types.ts'
import { tileToBoundingBox } from './boundingbox.ts'

const tileToPoint = (tile: MercatorTile): MercatorLngLat => {
  const boundingBox = tileToBoundingBox(tile)
  boundingBox.getCenter()
  return boundingBox.getCenter()
}

export { tileToPoint }
