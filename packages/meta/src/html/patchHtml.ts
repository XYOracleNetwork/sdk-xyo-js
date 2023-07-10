import { load } from 'cheerio'

export const mergeDocumentHeads = (destination: string, source: string) => {
  const destinationDocument = load(destination)
  const sourceDocument = load(source)

  const destinationHead = destinationDocument('head')
  const sourceHead = sourceDocument('head')

  // For each child node of the second body
  sourceHead.children().each((_, element) => {
    const el = destinationDocument(element)

    // Check if the same element exists in the first HTML string
    const match = destinationDocument(el[0].tagName)

    // If it exists, replace it, otherwise append it
    if (match.length > 0) {
      match.replaceWith(el)
    } else {
      destinationDocument('head').append(el)
    }
  })

  // Return the merged HTML
  return destinationDocument.html()
}
