class StubComponent extends React.Component {
  render () {
    return (
        <div>Foo, bar!</div>
    )
  }
}

class Fixture extends React.Component {
  render () {
    return (
      <div id='root'>
      </div>
    )
  }
}

const it = createTest(<Fixture />)

describe.only('#type', () => {
  describe('()', () => {
    it('passes when the actual matches the expected', (wrapper) => {
      expect(wrapper).to.have.type(Fixture)
    })

    it('passes negated when the actual does not match the expected', (wrapper) => {
      console.log('!!!!!')
      console.log(wrapper.type())
      expect(wrapper.type()).to.equal(Fixture)
      expect(wrapper).to.not.have.type(StubComponent)
    })

    it('fails when the actual does not match the expected', (wrapper) => {
      expect(() => {
        expect(wrapper).to.have.type(StubComponent)
      }).to.throw(`to have type`)

      expect(() => {
        expect(wrapper).to.not.have.type(Fixture)
      }).to.throw(`to have a 'disabled' attr`)
    })
  })
})
