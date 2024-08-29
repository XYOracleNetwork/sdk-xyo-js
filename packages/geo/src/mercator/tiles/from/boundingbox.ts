import { tileFromPoint } from '../../tile/index.ts'
import type { MercatorBoundingBox, MercatorTile } from '../../types.ts'

const tilesFromBoundingBox = (box: MercatorBoundingBox, zoom: number): MercatorTile[] => {
  const nw = tileFromPoint(box.getNorthWest(), zoom)
  const se = tileFromPoint(box.getSouthEast(), zoom)
  const size = Math.pow(2, zoom)

  let minX = nw[0]
  let maxX = se[0]
  let minY = nw[1]
  let maxY = se[1]

  // in case of horizontal wrapping
  if (minX >= maxX) {
    maxX = maxX + size
  }

  if (zoom < 4) {
    minX = 0
    maxX = size - 1
    minY = 0
    maxY = size - 1
  }

  const result: MercatorTile[] = []

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      result.push([x % size, y, zoom])
    }
  }

  return result
}

export { tilesFromBoundingBox }
