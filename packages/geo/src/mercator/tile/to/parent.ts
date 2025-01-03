import type { MercatorTile } from '../../types.ts'

/** @deprecated use form @xylabs/geo */
export const tileToParent = (tile: MercatorTile): MercatorTile => {
  return [tile[0] >> 1, tile[1] >> 1, tile[2] - 1]
}
