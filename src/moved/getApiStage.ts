/* eslint-disable @delagen/deprecation/deprecation */
import ApiStage from './ApiStage'

/** @deprecated use @xylabs/sdk-js instead */
const getApiStage = (hostname: string) => {
  if (hostname.startsWith('localhost')) {
    return ApiStage.Local
  } else if (hostname.startsWith('beta.')) {
    return ApiStage.Beta
  } else {
    return ApiStage.Prod
  }
}

export default getApiStage
