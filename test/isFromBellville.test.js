var assert = chai.assert

describe('should test for my isFromBellville function',function(){
  it('should test for my isFromBellville function',function(){
    assert.equal(isFromBellville('CY 8347'),true)
  })
  it('should test for my isFromBellville function',function(){
    assert.equal(isFromBellville('CJ anton247'), false)
  })
})
