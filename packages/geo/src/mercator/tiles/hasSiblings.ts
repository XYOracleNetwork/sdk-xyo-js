import { tileToSiblings } from '../tile/index.js'
import { MercatorTile } from '../types.js'
import { tilesHasTile } from './hasTile.js'

const hasSiblings = (tiles: MercatorTile[], tile: MercatorTile) => {
  const siblings = tileToSiblings(tile)
  for (const sibling of siblings) {
    if (!tilesHasTile(tiles, sibling)) return false
  }
  return true
}

export { hasSiblings }
