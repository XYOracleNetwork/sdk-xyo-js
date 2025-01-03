import { tileToSiblings } from '../tile/index.ts'
import type { MercatorTile } from '../types.ts'
import { tilesHasTile } from './hasTile.ts'

/** @deprecated use form @xylabs/geo */
export const hasSiblings = (tiles: MercatorTile[], tile: MercatorTile) => {
  const siblings = tileToSiblings(tile)
  for (const sibling of siblings) {
    if (!tilesHasTile(tiles, sibling)) return false
  }
  return true
}
