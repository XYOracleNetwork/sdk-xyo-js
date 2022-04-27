import { tileToSiblings } from '../tile'
import { MercatorTile } from '../types'
import { tilesHasTile } from './hasTile'

const hasSiblings = (tiles: MercatorTile[], tile: MercatorTile) => {
  const siblings = tileToSiblings(tile)
  for (let i = 0; i < siblings.length; i++) {
    if (!tilesHasTile(tiles, siblings[i])) return false
  }
  return true
}

export { hasSiblings }
