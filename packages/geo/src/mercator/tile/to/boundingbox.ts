import { LngLat } from 'mapbox-gl'

import { r2d } from '../../constants.ts'
import { MercatorBoundingBox, MercatorTile } from '../../types.ts'

const toLongitude = (x: number, z: number): number => {
  return (x / Math.pow(2, z)) * 360 - 180
}

const toLatitude = (y: number, z: number): number => {
  const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z)
  return r2d * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
}

const tileToBoundingBox = (tile: MercatorTile): MercatorBoundingBox => {
  const e = toLongitude(tile[0] + 1, tile[2])
  const w = toLongitude(tile[0], tile[2])
  const s = toLatitude(tile[1] + 1, tile[2])
  const n = toLatitude(tile[1], tile[2])
  return new MercatorBoundingBox(new LngLat(w, s), new LngLat(e, n))
}

export { tileToBoundingBox }
