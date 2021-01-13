var assert = require('assert');
var CryptoJS = require('crypto-js');

describe('Base64 Encoding', function() {
  describe('round trip base64 decode/encode', function() {
    it('should decode/encode correctly', function() {
      var b64 = 'YAmMzu2PW2vfpUj22Dli4sk8I5muWlietj/gJR46gUIuWnswfaaT6XneRmP7oS34tUokHKAyL3jalq5cw7FFeA==';
      var wordArray = CryptoJS.enc.Base64.parse(b64);
      var result = CryptoJS.enc.Base64.stringify(wordArray)
      console.log("round trip decode/encode = " + result);
      assert.strictEqual(result, b64)
    });
  });
   describe('hex to base64', function() {
    it('should convert hex to base64 correctly', function() {
      var inputAsHex = '60098cceed8f5b6bdfa548f6d83962e2c93c2399ae5a589eb63fe0251e3a81422e5a7b307da693e979de4663fba12df8b54a241ca0322f78da96ae5cc3b14578'
      var wordArray = CryptoJS.enc.Hex.parse(inputAsHex);
      let result = CryptoJS.enc.Base64.stringify(wordArray);
      console.log(result);
      var expected = 'YAmMzu2PW2vfpUj22Dli4sk8I5muWlietj/gJR46gUIuWnswfaaT6XneRmP7oS34tUokHKAyL3jalq5cw7FFeA==';
      assert.strictEqual(result, expected)
    });
  });
});
