import { readFile } from 'fs/promises'
import { join } from 'path'

import { mergeDocumentHead } from '../mergeDocumentHead'

describe('mergeDocumentHead', () => {
  let destination: string
  let source: string
  beforeAll(async () => {
    destination = await readFile(join(__dirname, 'destination.html'), { encoding: 'utf-8' })
    source = await readFile(join(__dirname, 'source.html'), { encoding: 'utf-8' })
  })
  it('with real documents', () => {
    expect(mergeDocumentHead(destination, source)).toMatchSnapshot()
  })
})
