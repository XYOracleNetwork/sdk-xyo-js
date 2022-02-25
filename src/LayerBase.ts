// eslint-disable-next-line no-restricted-imports
import { AnyLayer, Map } from 'mapbox-gl'

export abstract class LayerBase<T extends AnyLayer> {
  public id: string
  public source: string

  constructor(id: string, source: string) {
    this.id = id
    this.source = source
  }

  abstract buildLayer(): T

  update(map: Map, show = true) {
    if (map.getLayer(this.id)) {
      map.removeLayer(this.id)
    }
    if (show) {
      map.addLayer(this.buildLayer())
    }
  }
}
