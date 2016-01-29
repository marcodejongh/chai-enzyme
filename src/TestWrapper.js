export default class TestWrapper {
  isPresent () {
    return this.wrapper.length > 0
  }

  isEmpty () {
    return this.wrapper.children().length === 0
  }

  hasId (id) {
    return this.id() === id
  }

  hasValue (value) {
    return this.value() === value
  }

  hasDescendants (selector) {
    return this.wrapper.find(selector).length > 0
  }

  state (key) {
    return this.wrapper.state(key)
  }

  prop (key) {
    return this.wrapper.prop(key)
  }

  text () {
    return this.wrapper.text()
  }

  type () {
    console.log( this.wrapper.type());
    return this.wrapper.type()
  }
}
