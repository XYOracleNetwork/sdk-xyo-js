import { Feature, FeatureCollection, Geometry, Point, Polygon } from 'geojson'
import { GeoJSONSourceSpecification, LngLat } from 'mapbox-gl'

import { boundingBoxToCenter, boundingBoxToPolygon, tileFromQuadkey, tileToBoundingBox } from './mercator/index.ts'

class GeoJson {
  private _lngLat?: LngLat
  private _point?: Point
  private _polygon?: Polygon
  private _zoom?: number

  private quadkey: string

  constructor(quadkey: string) {
    this.quadkey = quadkey
  }

  static featureCollection(features: Feature[]): FeatureCollection {
    return {
      features,
      type: 'FeatureCollection',
    }
  }

  static featuresSource(data: FeatureCollection): GeoJSONSourceSpecification {
    return {
      data,
      type: 'geojson',
    }
  }

  static geometryFeature(geometry: Geometry): Feature {
    return {
      geometry,
      properties: {},
      type: 'Feature',
    }
  }

  center(): LngLat {
    if (!this._lngLat) {
      const tile = tileFromQuadkey(this.quadkey)
      const bb = tileToBoundingBox(tile)
      const point = boundingBoxToCenter(bb)
      this._lngLat = new LngLat(point[0], point[1])
    }
    return this._lngLat
  }

  point(): Point {
    if (!this._point) {
      this._point = {
        coordinates: this.center().toArray(),
        type: 'Point',
      }
    }
    return this._point
  }

  pointFeature(): Feature {
    return GeoJson.geometryFeature(this.point())
  }

  pointFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.pointFeature()])
  }

  pointSource(): GeoJSONSourceSpecification {
    return {
      data: this.pointFeatureCollection(),
      type: 'geojson',
    }
  }

  polygon(): Polygon {
    if (!this._polygon) {
      this._polygon = boundingBoxToPolygon(tileToBoundingBox(tileFromQuadkey(this.quadkey))) as Polygon
    }
    return this._polygon
  }

  polygonFeature(): Feature {
    return GeoJson.geometryFeature(this.polygon())
  }

  polygonFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.polygonFeature()])
  }

  polygonSource(): GeoJSONSourceSpecification {
    return GeoJson.featuresSource(this.polygonFeatureCollection())
  }

  zoom(): number {
    this._zoom = this._zoom ?? tileFromQuadkey(this.quadkey)[2]
    return this._zoom
  }
}

export { GeoJson }
