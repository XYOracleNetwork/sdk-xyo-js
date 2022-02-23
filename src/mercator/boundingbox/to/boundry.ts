import { MercatorBoundingBox, MercatorBoundry } from '../../types'

export const boundingBoxToBoundry = (box: MercatorBoundingBox): MercatorBoundry => {
  return [box.getNorthWest(), box.getNorthEast(), box.getSouthEast(), box.getSouthWest(), box.getNorthWest()]
}
