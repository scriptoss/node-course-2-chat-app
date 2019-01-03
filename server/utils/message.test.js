const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'admin';
    var text = 'test message';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () =>{
  it('should generate correct location object', () => {
    var from = 'admin';
    var latitude = 36.8484;
    var longitude = 174.7622;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message).toInclude({from, url});
    expect(typeof message.createdAt).toBe('number');
  })
})
