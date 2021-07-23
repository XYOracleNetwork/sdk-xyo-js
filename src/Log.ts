import Rollbar from 'rollbar'

interface LogConfig {
  commitHash?: string
  devMode?: boolean
  rollbarToken?: string
  payload?: Record<string, unknown>
}

class Log {
  private rollbar?: Rollbar
  private devMode?: boolean

  constructor(config: LogConfig) {
    this.devMode = config.devMode ?? false

    if (config.rollbarToken) {
      this.rollbar = new Rollbar({
        accessToken: config.rollbarToken,
        captureUncaught: true,
        captureUnhandledRejections: true,
        codeVersion: config.commitHash,
        code_version: config.commitHash,
        payload: {
          client: {
            javascript: {
              code_version: config.commitHash,
              guess_uncaught_frames: true,
              source_map_enabled: true,
            },
          },
          codeVersion: config.commitHash,
          code_version: config.commitHash,
          environment: this.devMode ? 'development' : 'production',
          ...config.payload,
        },
        sendConfig: true,
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(...params: any[]) {
    console.error(params)
    if (this.devMode) {
      this.rollbar?.error(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public warn(...params: any[]) {
    console.warn(params)
    if (this.devMode) {
      this.rollbar?.warn(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public info(...params: any[]) {
    if (this.devMode) {
      console.info(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public debug(...params: any[]) {
    if (this.devMode) {
      console.debug(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public log(...params: any[]) {
    if (this.devMode) {
      console.log(params)
    }
  }
}

export default Log
