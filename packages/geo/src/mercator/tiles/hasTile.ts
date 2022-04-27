import { MercatorTile } from '../types'
import { tilesEqual } from './equal'

const tilesHasTile = (tiles: MercatorTile[], tile: MercatorTile) => {
  for (let i = 0; i < tiles.length; i++) {
    if (tilesEqual(tiles[i], tile)) return true
  }
  return false
}

export { tilesHasTile }
