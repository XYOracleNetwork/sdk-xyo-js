/** @deprecated use @xylabs/sdk-js instead */
const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// eslint-disable-next-line @delagen/deprecation/deprecation
export default delay
