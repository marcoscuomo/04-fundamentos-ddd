export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a strung and normalize it as a slig.
   *
   * Example: "An example title" => "an-example-title
   *
   * @param text {string}"
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKC')
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-') // remove all white spaces
      .replace(/[^\w-]+/g, '') // remove all no words
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
