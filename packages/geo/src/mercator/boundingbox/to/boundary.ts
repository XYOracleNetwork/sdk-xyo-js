import type { MercatorBoundary, MercatorBoundingBox } from '../../types.ts'

/** @deprecated use form @xylabs/geo */
export const boundingBoxToBoundary = (box: MercatorBoundingBox): MercatorBoundary => {
  return [box.getNorthWest(), box.getNorthEast(), box.getSouthEast(), box.getSouthWest(), box.getNorthWest()]
}
