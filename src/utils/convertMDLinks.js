/**
 * A function that transforms markdown links to a'tags
 *
 * @param mdStr a string of valid markdown
 * @param element a JSX tag to wrap around the markdown
 *
 * @returns A JSX object contaning a the orignial markdown with actual links wrapped in the chosen JSX tag
 *
 */
const convertMDLinks = mdStr =>
  mdStr
    .replace(/\((\S*)\)\[(\S*)\]/g, '<a href="$2">$1</a>')
    .replace(/\n/g, '<br/>')

export default convertMDLinks
