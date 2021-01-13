var assert = require('assert');
var CryptoJS = require('crypto-js')

function stringToHex(data) {
  var dataAsHex = ""
  for (var i=0; i<data.length; i++) {
      if (i!=0) dataAsHex += " ";
      dataAsHex += data.charCodeAt(i).toString(16).padStart(4,"0");
  }
  return dataAsHex;
}

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
});
