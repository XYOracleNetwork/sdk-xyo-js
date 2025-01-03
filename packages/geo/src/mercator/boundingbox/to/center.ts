import type { MercatorBoundingBox } from '../../types.ts'

/** @deprecated use form @xylabs/geo */
export const boundingBoxToCenter = (boundingBox: MercatorBoundingBox, decimal = 6) => {
  const west = boundingBox.getWest()
  const south = boundingBox.getSouth()
  const east = boundingBox.getEast()
  const north = boundingBox.getNorth()
  let lng = (west - east) / 2 + east
  let lat = (south - north) / 2 + north
  if (decimal !== undefined && decimal !== null) {
    lng = Number(lng.toFixed(decimal))
    lat = Number(lat.toFixed(decimal))
  }
  return [lng, lat]
}
