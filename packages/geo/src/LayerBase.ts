import { AnyLayer, Map } from 'mapbox-gl'

export abstract class LayerBase<T extends AnyLayer> {
  id: string
  source: string

  constructor(id: string, source: string) {
    this.id = id
    this.source = source
  }

  update(map: Map, show = true) {
    if (map.getLayer(this.id)) {
      map.removeLayer(this.id)
    }
    if (show) {
      map.addLayer(this.buildLayer())
    }
  }

  abstract buildLayer(): T
}
