import { MercatorTile } from '../../types'

const tileToChildren = (tile: MercatorTile) => {
  return [
    [tile[0] * 2, tile[1] * 2, tile[2] + 1],
    [tile[0] * 2 + 1, tile[1] * 2, tile[2] + 1],
    [tile[0] * 2 + 1, tile[1] * 2 + 1, tile[2] + 1],
    [tile[0] * 2, tile[1] * 2 + 1, tile[2] + 1],
  ]
}

export { tileToChildren }
