/* eslint-disable @delagen/deprecation/deprecation */
import ApiStage from './ApiStage'

/** @deprecated use @xylabs/sdk-js instead */
abstract class ApiClient {
  public constructor(token?: string | null, stage?: ApiStage) {
    this.stage = stage ?? ApiStage.Prod
    this.token = token
  }

  protected stage: string

  protected token?: string | null

  abstract endPoint(): string
}

export default ApiClient
