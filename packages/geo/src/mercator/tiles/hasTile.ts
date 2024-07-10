import { MercatorTile } from '../types.js'
import { tilesEqual } from './equal.js'

const tilesHasTile = (tiles: MercatorTile[], tile: MercatorTile) => {
  for (const tileToCheck of tiles) {
    if (tilesEqual(tileToCheck, tile)) return true
  }
  return false
}

export { tilesHasTile }
