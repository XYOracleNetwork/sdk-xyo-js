import { MercatorTile } from '../types.ts'
import { tilesEqual } from './equal.ts'

const tilesHasTile = (tiles: MercatorTile[], tile: MercatorTile) => {
  for (const tileToCheck of tiles) {
    if (tilesEqual(tileToCheck, tile)) return true
  }
  return false
}

export { tilesHasTile }
