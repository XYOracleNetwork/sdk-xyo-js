/* eslint-disable @delagen/deprecation/deprecation */
/** @deprecated use @xylabs/sdk-js instead */
type Override<T1, T2> = Omit<T1, keyof T2> & T2

export default Override
