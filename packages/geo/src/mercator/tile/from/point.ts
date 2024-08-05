import { d2r } from '../../constants.ts'
import { MercatorLngLat } from '../../types.ts'

const pointToTileFraction = (point: MercatorLngLat, z: number) => {
  const sin = Math.sin(point.lat * d2r)
  const z2 = Math.pow(2, z)
  let x = z2 * (point.lng / 360 + 0.5)
  const y = z2 * (0.5 - (0.25 * Math.log((1 + sin) / (1 - sin))) / Math.PI)

  // Wrap Tile X
  x = x % z2
  if (x < 0) x = x + z2
  return [x, y, z]
}

const tileFromPoint = (point: MercatorLngLat, z: number) => {
  const tile = pointToTileFraction(point, z)
  tile[0] = Math.floor(tile[0])
  tile[1] = Math.floor(tile[1])
  if (tile[0] < 0) {
    tile[0] = 0
  }
  if (tile[1] < 0) {
    tile[1] = 0
  }
  return tile
}

export { tileFromPoint }
