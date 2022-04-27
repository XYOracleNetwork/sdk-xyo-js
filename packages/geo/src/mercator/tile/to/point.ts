import { MercatorLngLat, MercatorTile } from '../../types'
import { tileToBoundingBox } from './boundingbox'

const tileToPoint = (tile: MercatorTile): MercatorLngLat => {
  const boundingBox = tileToBoundingBox(tile)
  boundingBox.getCenter()
  return boundingBox.getCenter()
}

export { tileToPoint }
