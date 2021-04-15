const assertEx = <T>(expr?: T | null, message?: string): T => {
  if (expr) return expr
  throw Error(message)
}

export default assertEx
