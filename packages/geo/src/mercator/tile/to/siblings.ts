import { MercatorTile } from '../../types.js'
import { tileToChildren } from './children.js'
import { tileToParent } from './parent.js'

const tileToSiblings = (tile: MercatorTile): MercatorTile[] => {
  return tileToChildren(tileToParent(tile))
}

export { tileToSiblings }
