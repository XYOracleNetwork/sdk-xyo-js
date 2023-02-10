import { Feature, FeatureCollection, Geometry, Point, Polygon } from 'geojson'
// eslint-disable-next-line no-restricted-imports
import { GeoJSONSourceRaw, LngLat } from 'mapbox-gl'

import { boundingBoxToCenter, boundingBoxToPolygon, tileFromQuadkey, tileToBoundingBox } from './mercator'

class GeoJson {
  private _lngLat?: LngLat
  private _point?: Point
  private _polygon?: Polygon
  private _zoom?: number

  private quadkey: string

  constructor(quadkey: string) {
    this.quadkey = quadkey
  }

  public static featureCollection(features: Feature[]): FeatureCollection {
    return {
      features,
      type: 'FeatureCollection',
    }
  }

  public static featuresSource(data: FeatureCollection): GeoJSONSourceRaw {
    return {
      data,
      type: 'geojson',
    }
  }

  public static geometryFeature(geometry: Geometry): Feature {
    return {
      geometry,
      properties: {},
      type: 'Feature',
    }
  }

  public center(): LngLat {
    if (!this._lngLat) {
      const tile = tileFromQuadkey(this.quadkey)
      const bb = tileToBoundingBox(tile)
      const point = boundingBoxToCenter(bb)
      this._lngLat = new LngLat(point[0], point[1])
    }
    return this._lngLat
  }

  public point(): Point {
    if (!this._point) {
      this._point = {
        coordinates: this.center().toArray(),
        type: 'Point',
      }
    }
    return this._point
  }

  public pointFeature(): Feature {
    return GeoJson.geometryFeature(this.point())
  }

  public pointFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.pointFeature()])
  }

  public pointSource(): GeoJSONSourceRaw {
    return {
      data: this.pointFeatureCollection(),
      type: 'geojson',
    }
  }

  public polygon(): Polygon {
    if (!this._polygon) {
      this._polygon = boundingBoxToPolygon(tileToBoundingBox(tileFromQuadkey(this.quadkey))) as Polygon
    }
    return this._polygon
  }

  public polygonFeature(): Feature {
    return GeoJson.geometryFeature(this.polygon())
  }

  public polygonFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.polygonFeature()])
  }

  public polygonSource(): GeoJSONSourceRaw {
    return GeoJson.featuresSource(this.polygonFeatureCollection())
  }

  public zoom(): number {
    this._zoom = this._zoom ?? tileFromQuadkey(this.quadkey)[2]
    return this._zoom
  }
}

export { GeoJson }
