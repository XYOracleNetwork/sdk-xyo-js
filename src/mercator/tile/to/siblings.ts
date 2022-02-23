import { MercatorTile } from '../../types'
import { tileToChildren } from './children'
import { tileToParent } from './parent'

const tileToSiblings = (tile: MercatorTile): MercatorTile[] => {
  return tileToChildren(tileToParent(tile))
}

export { tileToSiblings }
