const Token = artifacts.require('./Token')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Token', (accounts) => {
  const name = 'Agrawal Token'
  const symbol = 'AGRL'
  const decimals = '18'
  const totalSupply = '1000000000000000000000000'
  // let token

  // before hooks that mocha allows us to do
  // async because we using await keyword inside the function
  // beforeEach(async () => {
  //   token = await Token.new() 
  // })
  describe('deployment', () => {
    it('tracks the name', async () => {
      let token = await Token.new()
      const result = await token.name()
      result.should.equal(name)
    })
    it('tracks the symbol' , async () => {
      let token = await Token.new()
      const result = await token.symbol()
      result.should.equal(symbol)
    })
    it('tracks the decimals', async () => {
      let token = await Token.new()
      const result = await token.decimals()
      result.toString().should.equal(decimals)
    })
    it('tracks the total supply', async () => {
      let token = await Token.new()
      const result = await token.totalSupply()
      result.toString().should.equal(totalSupply)
    })

  })


})