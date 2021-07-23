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

  public error(message: string, data?: unknown) {
    console.error(message, data ?? '')
    if (this.devMode) {
      this.rollbar?.error(`${message}:${JSON.stringify(data)}`)
    }
  }

  public warn(message: string, data?: unknown) {
    if (this.devMode) {
      console.warn(message, data ?? '')
    } else {
      this.rollbar?.warn(`${message}:${JSON.stringify(data)}`)
    }
  }

  public info(message: string, data?: unknown) {
    if (this.devMode) {
      console.info(message, data ?? '')
    }
  }

  public debug(message: string, data?: unknown) {
    if (this.devMode) {
      console.debug(message, data ?? '')
    }
  }

  public log(message: string, data?: unknown) {
    if (this.devMode) {
      console.log(message, data ?? '')
    }
  }
}

export default Log
