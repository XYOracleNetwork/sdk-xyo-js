// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StringIndexable = { [key: string]: any }

export const getMetaAsDict = (obj: StringIndexable, parentKey = ''): StringIndexable => {
  let flatRecord: StringIndexable = {}
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is another object, we want to iterate through its keys as well.
      const childRecord = getMetaAsDict(obj[key] as StringIndexable, `${parentKey}${key}:`)
      flatRecord = { ...flatRecord, ...childRecord }
    } else {
      // Concatenate the key with its parent key.
      const newKey = parentKey ? `${parentKey}${key}` : key
      flatRecord[newKey] = obj[key]
    }
  }
  return flatRecord
}
