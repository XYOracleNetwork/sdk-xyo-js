import { metaBuilder } from './builder'
import { Meta } from './models'

test('builder', () => {
  const html = '<html/>'
  const meta: Meta = {
    og: {
      image: 'https://example.com/image.jpg',
      title: 'Example Open Graph Meta',
      type: 'website',
      url: 'https://example.com',
    },
  }
  const output = metaBuilder(html, meta)
  expect(output).toBeDefined()
})
