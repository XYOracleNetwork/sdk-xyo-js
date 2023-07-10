import { load } from 'cheerio'

export const mergeDocumentHeads = (html1: string, html2: string) => {
  const $ = load(html1)
  const $2 = load(html2)

  // For each child node of the second head
  $2('head')
    .children()
    .each((_, element) => {
      const el = $(element)

      // Special case for meta tags: We want to match them by the name attribute
      if (el[0].tagName === 'meta') {
        const name = el.attr('name')
        if (name) {
          const match = $(`head > meta[name="${name}"]`)

          // If it exists, replace it, otherwise append it
          if (match.length > 0) {
            match.replaceWith(el)
            return
          } else {
            $('head').append(el)
          }
        }
      } else {
        // For all other elements, just check if the same element exists in the first HTML string
        const match = $(el[0].tagName)

        // If it exists, replace it, otherwise append it
        if (match.length > 0) {
          match.replaceWith(el)
        } else {
          $('head').append(el)
        }
      }
    })

  // Return the merged HTML
  return $.html()
}
