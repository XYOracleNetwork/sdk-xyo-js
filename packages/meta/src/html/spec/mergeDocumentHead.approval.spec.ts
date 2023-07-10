import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

import { mergeDocumentHead } from '../mergeDocumentHead'

const writeDebugFile = false

describe('mergeDocumentHead', () => {
  let destination: string
  let source: string
  beforeAll(async () => {
    destination = await readFile(join(__dirname, 'destination.html'), { encoding: 'utf-8' })
    source = await readFile(join(__dirname, 'source.html'), { encoding: 'utf-8' })
  })
  it('with real documents', async () => {
    const result = mergeDocumentHead(destination, source)
    expect(result).toMatchSnapshot()
    if (writeDebugFile) await writeFile(join(__dirname, 'result.html'), result)
  })
})
