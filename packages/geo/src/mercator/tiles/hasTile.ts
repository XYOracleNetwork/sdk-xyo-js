import { MercatorTile } from '../types'
import { tilesEqual } from './equal'

const tilesHasTile = (tiles: MercatorTile[], tile: MercatorTile) => {
  for (const tileToCheck of tiles) {
    if (tilesEqual(tileToCheck, tile)) return true
  }
  return false
}

export { tilesHasTile }
