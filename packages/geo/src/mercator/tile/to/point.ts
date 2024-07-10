import { MercatorLngLat, MercatorTile } from '../../types.js'
import { tileToBoundingBox } from './boundingbox.js'

const tileToPoint = (tile: MercatorTile): MercatorLngLat => {
  const boundingBox = tileToBoundingBox(tile)
  boundingBox.getCenter()
  return boundingBox.getCenter()
}

export { tileToPoint }
