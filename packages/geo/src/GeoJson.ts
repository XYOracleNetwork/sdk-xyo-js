import { Feature, FeatureCollection, Geometry, Point, Polygon } from 'geojson'
// eslint-disable-next-line no-restricted-imports
import { GeoJSONSourceRaw, LngLat } from 'mapbox-gl'

import { boundingBoxToCenter, boundingBoxToPolygon, tileFromQuadkey, tileToBoundingBox } from './mercator'

class GeoJson {
  private quadkey: string

  constructor(quadkey: string) {
    this.quadkey = quadkey
  }

  private _lngLat?: LngLat

  public center(): LngLat {
    if (!this._lngLat) {
      const tile = tileFromQuadkey(this.quadkey)
      const bb = tileToBoundingBox(tile)
      const point = boundingBoxToCenter(bb)
      this._lngLat = new LngLat(point[0], point[1])
    }
    return this._lngLat
  }

  private _point?: Point

  public point(): Point {
    if (!this._point) {
      this._point = {
        coordinates: this.center().toArray(),
        type: 'Point',
      }
    }
    return this._point
  }

  private _zoom?: number

  public zoom(): number {
    this._zoom = this._zoom ?? tileFromQuadkey(this.quadkey)[2]
    return this._zoom
  }

  private _polygon?: Polygon

  public polygon(): Polygon {
    if (!this._polygon) {
      this._polygon = boundingBoxToPolygon(tileToBoundingBox(tileFromQuadkey(this.quadkey))) as Polygon
    }
    return this._polygon
  }

  public static geometryFeature(geometry: Geometry): Feature {
    return {
      geometry,
      properties: {},
      type: 'Feature',
    }
  }

  public polygonFeature(): Feature {
    return GeoJson.geometryFeature(this.polygon())
  }

  public pointFeature(): Feature {
    return GeoJson.geometryFeature(this.point())
  }

  public static featureCollection(features: Feature[]): FeatureCollection {
    return {
      features,
      type: 'FeatureCollection',
    }
  }

  public polygonFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.polygonFeature()])
  }

  public pointFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.pointFeature()])
  }

  public static featuresSource(data: FeatureCollection): GeoJSONSourceRaw {
    return {
      data,
      type: 'geojson',
    }
  }

  public polygonSource(): GeoJSONSourceRaw {
    return GeoJson.featuresSource(this.polygonFeatureCollection())
  }

  public pointSource(): GeoJSONSourceRaw {
    return {
      data: this.pointFeatureCollection(),
      type: 'geojson',
    }
  }
}

export { GeoJson }
