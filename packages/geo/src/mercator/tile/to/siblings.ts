import type { MercatorTile } from '../../types.ts'
import { tileToChildren } from './children.ts'
import { tileToParent } from './parent.ts'

const tileToSiblings = (tile: MercatorTile): MercatorTile[] => {
  return tileToChildren(tileToParent(tile))
}

export { tileToSiblings }
