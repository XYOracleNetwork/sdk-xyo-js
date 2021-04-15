import ApiStage from './ApiStage'

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
