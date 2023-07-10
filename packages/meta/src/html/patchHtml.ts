import { load } from 'cheerio'

export const mergeDocumentHeads = (htmlA: string, htmlB: string) => {
  const $ = load(htmlA)
  const $2 = load(htmlB)

  // This assumes that both HTML strings have a body tag.
  // If that's not the case, you should adjust the code accordingly.

  // For each child node of the second body
  $2('head')
    .children()
    .each((_, element) => {
      const el = $(element)

      // Check if the same element exists in the first HTML string
      const match = $(el[0].tagName)

      // If it exists, replace it, otherwise append it
      if (match.length > 0) {
        match.replaceWith(el)
      } else {
        $('body').append(el)
      }
    })

  // Return the merged HTML
  return $.html()
}
