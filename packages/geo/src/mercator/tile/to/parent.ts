import type { MercatorTile } from '../../types.ts'

const tileToParent = (tile: MercatorTile): MercatorTile => {
  return [tile[0] >> 1, tile[1] >> 1, tile[2] - 1]
}

export { tileToParent }
