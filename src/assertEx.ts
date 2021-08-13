/**
 * Error object thrown by assertEx
 */
class AssertExError extends Error {}

/**
 *
 * Intended for simple null/undefiend checks for variables
 *
 * @param expr - Expression to be evaluated for truthiness
 * @param message - Message in Error if expression is false
 * @throws AssertExError
 * @returns Value of expression
 */
const assertEx = <T>(expr?: T | null, message?: string): T => {
  if (expr) return expr
  throw new AssertExError(message)
}

export default assertEx
