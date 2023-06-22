const getMiddle = require('../src/get-middle')

describe('getmiddle', () => {
  it('should return the whole string if 1 or 2 Characters long', () => {
    expect(getMiddle('A')).toBe('A')
    expect(getMiddle('of')).toBe('of')
  })

  it ('should return the middle two characters if length is even', () => {
    expect(getMiddle('test')).toBe('es')
    expect(getMiddle('fantastic!')).toBe('as')
    expect(getMiddle('middle')).toBe('dd')
  })

  it('should return the middle character if length is odd', () => {
    expect(getMiddle('testing')).toBe('t')
    expect(getMiddle('another')).toBe('t')
  })
});
