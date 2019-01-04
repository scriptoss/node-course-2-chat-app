const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('Should reject non-string values', () => {
    expect(isRealString(12312412)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString('kenneth')).toBe(true);

  });
});
