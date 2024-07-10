import { readFile, writeFile } from 'node:fs/promises'
import Path from 'node:path'

import { mergeDocumentHead } from '../mergeDocumentHead'

const writeDebugFile = false

describe('mergeDocumentHead', () => {
  let destination: string
  let source: string
  beforeAll(async () => {
    destination = await readFile(Path.join(__dirname, 'destination.html'), { encoding: 'utf8' })
    source = await readFile(Path.join(__dirname, 'source.html'), { encoding: 'utf8' })
  })
  it('with real documents', async () => {
    const result = mergeDocumentHead(destination, source)
    expect(result).toMatchSnapshot()
    if (writeDebugFile) await writeFile(Path.join(__dirname, 'result.html'), result)
  })
})
