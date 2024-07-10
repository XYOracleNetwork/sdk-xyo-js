import { MercatorBoundary, MercatorBoundingBox } from '../../types.js'

export const boundingBoxToBoundary = (box: MercatorBoundingBox): MercatorBoundary => {
  return [box.getNorthWest(), box.getNorthEast(), box.getSouthEast(), box.getSouthWest(), box.getNorthWest()]
}
