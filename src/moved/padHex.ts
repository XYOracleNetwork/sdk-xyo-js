/* eslint-disable @delagen/deprecation/deprecation */
/** @deprecated use @xylabs/sdk-js instead */
const padHex = (hex: string, byteCount?: number) => {
  let result = hex
  if (hex.length % 2 !== 0) {
    result = `0${hex}`
  }
  if (byteCount) {
    while (result.length / 2 < byteCount) {
      result = `00${result}`
    }
  }
  return result
}

export default padHex
