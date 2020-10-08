/**
 * Converts string to dash(-) separated string ommitting any other special
 * characters. "Hello world!"" will become "hello-world"
 * @param {string}  title
 */
export default title => {
  if (typeof title !== "string") return ""

  const text = title.replace(/[^a-zA-Z\s]/g, "")
  return text.toLocaleLowerCase().replace(/\s/g, "-")
}
