import type { MercatorTile } from '../../types.ts'

/** @deprecated use form @xylabs/geo */
export const tileToChildren = (tile: MercatorTile) => {
  return [
    [tile[0] * 2, tile[1] * 2, tile[2] + 1],
    [tile[0] * 2 + 1, tile[1] * 2, tile[2] + 1],
    [tile[0] * 2 + 1, tile[1] * 2 + 1, tile[2] + 1],
    [tile[0] * 2, tile[1] * 2 + 1, tile[2] + 1],
  ]
}
