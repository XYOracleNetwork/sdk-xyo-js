import Rollbar from 'rollbar'

class Log {
  private rollbar?: Rollbar
  private devMode?: boolean

  constructor(commitHash: string, devMode: boolean, rollbarToken?: string) {
    this.devMode = devMode

    if (rollbarToken) {
      this.rollbar = new Rollbar({
        accessToken: rollbarToken,
        captureUncaught: true,
        captureUnhandledRejections: true,
        codeVersion: commitHash,
        code_version: commitHash,
        payload: {
          codeVersion: commitHash,
          code_version: commitHash,
          environment: this.devMode ? 'development' : 'production',
        },
        sendConfig: true,
      })
    }
  }

  public error(message: string, data?: any) {
    console.error(message, data ?? '')
    if (this.devMode) {
      this.rollbar?.error(`${message}:${JSON.stringify(data)}`)
    }
  }

  public warn(message: string, data?: any) {
    if (this.devMode) {
      console.warn(message, data ?? '')
    } else {
      this.rollbar?.warn(`${message}:${JSON.stringify(data)}`)
    }
  }

  public info(message: string, data?: any) {
    if (this.devMode) {
      console.info(message, data ?? '')
    }
  }

  public debug(message: string, data?: any) {
    if (this.devMode) {
      console.debug(message, data ?? '')
    }
  }

  public log(message: string, data?: any) {
    if (this.devMode) {
      console.log(message, data ?? '')
    }
  }
}

export default Log
