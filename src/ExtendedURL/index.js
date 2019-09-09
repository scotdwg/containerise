export default class ExtendedURL extends URL {
  constructor(url) {
    super(url);
    const split = this.hostname.split('.');
    this.tld = split[split.length - 1];
    if (split.length > 1) {
      this.domain = split[split.length - 2];
    } else {
      this.domain = this.tld;
    }
  }
}
