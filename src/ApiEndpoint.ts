import axios from 'axios'

import XyoWorldApiConfig from './ApiConfig'

class ApiEndpoint<T> {
  private config: XyoWorldApiConfig
  private path: string

  constructor(config: XyoWorldApiConfig, path: string) {
    this.config = config
    this.path = path
  }

  private get headers() {
    return this.config.token ? { Authorization: this.config.token } : undefined
  }

  private get url() {
    return `${this.config.apiDomain}/${this.path}`
  }

  private _value?: T

  public get value() {
    return this._value
  }

  public async get() {
    return this._value ?? (await this.fetch())
  }

  public async fetch() {
    const response = await axios.get<T>(this.url, { headers: this.headers })
    if (response.status === 200) {
      this._value = response.data
    } else {
      throw Error('Unexpected Status Code')
    }
    return this._value
  }

  public async insert(value: T) {
    const response = await axios.post<T>(this.url, value, { headers: this.headers })
    if (response.status === 200) {
      this._value = response.data
    } else {
      throw Error('Unexpected Status Code')
    }
    return this._value
  }
}

export default ApiEndpoint
