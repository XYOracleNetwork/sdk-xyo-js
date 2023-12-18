import { tileToSiblings } from '../tile'
import { MercatorTile } from '../types'
import { tilesHasTile } from './hasTile'

const hasSiblings = (tiles: MercatorTile[], tile: MercatorTile) => {
  const siblings = tileToSiblings(tile)
  for (const sibling of siblings) {
    if (!tilesHasTile(tiles, sibling)) return false
  }
  return true
}

export { hasSiblings }
