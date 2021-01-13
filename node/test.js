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
/*  describe('Text input #1', function() {
    it('should encode correctly', function() {
      var rawStr = "hello world!";
      var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
      var base64 = CryptoJS.enc.Base64.stringify(wordArray);
      console.log('encrypted:', base64);
      assert.strictEqual(base64, "aGVsbG8gd29ybGQh");
    });
  });
  describe('binary input #1', function() {
    it('should encode correctly', function() {
      var rawStr = "\x01\x02";
      var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
      var base64 = CryptoJS.enc.Base64.stringify(wordArray);
      console.log('encrypted:', base64);
      assert.strictEqual(base64, "AQI=");
    });
  });
  describe('binary input #2', function() {
    it('should encode correctly', function() {
      var rawStr = "\x60\x09\x8c\xce\xed\x8f\x5b\x6b\xdf";
      var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
      var base64 = CryptoJS.enc.Base64.stringify(wordArray);
      console.log('encrypted:', base64);
      assert.strictEqual(base64, "YAnCjMOOw63Cj1trw58=");
    });
  });
  describe('base64 input #1', function() {
    it('should encode correctly', function() {
      var secret = 'YAmMzu2PW2vfpUj22Dli4sk8I5muWlietj/gJR46gUIuWnswfaaT6XneRmP7oS34tUokHKAyL3jalq5cw7FFeA==';
      console.log("secret= " + secret);
      var decodedSecret = CryptoJS.enc.Base64.parse(secret);

      console.log("decodedSecret hex   = " + decodedSecret );
      console.log("decodedSecret base64= " + decodedSecret.toString(CryptoJS.enc.Base64) )
    });
  });
  describe('foo13', function() {
    it('should encode correctly', function() {
      var secret = 'YAmMzu2PW2vfpUj22Dli4sk8I5muWlietj/gJR46gUIuWnswfaaT6XneRmP7oS34tUokHKAyL3jalq5cw7FFeA==';
      var decodedSecret = CryptoJS.enc.Base64.parse(secret);
      const data = 'hello';
      var result = CryptoJS.HmacSHA512(decodedSecret, data)
      var b64 = CryptoJS.enc.Base64.stringify(result)
      assert.strictEqual(b64, 'VaUlpSHTwSVN3h69+8iPlbuFP6soPsplibrp9LK3NuvIjPf/BOJqG7tf0lubpPagPhwmp0v9TSpo8p9V2Pe86w==')
      console.log("foo13 = " + b64);
    });
  });*/
  describe('round trip base64 decode/encode', function() {
    it('should decode/encode correctly', function() {
      var b64 = 'YAmMzu2PW2vfpUj22Dli4sk8I5muWlietj/gJR46gUIuWnswfaaT6XneRmP7oS34tUokHKAyL3jalq5cw7FFeA==';
      var wordArray = CryptoJS.enc.Base64.parse(b64);
      var result = CryptoJS.enc.Base64.stringify(wordArray)
      assert.strictEqual(result, b64)
      console.log("round trip decode/encode = " + result);
    });
  });
});

//     const data = '\x60\x09\x8c\xce\xed\x8f\x5b\x6b\xdf\xa5\x48\xf6\xd8\x39\x62\xe2\xc9\x3c\x23\x99\xae\x5a\x58\x9e\xb6\x3f\xe0\x25\x1e\x3a\x81\x42\x2e\x5a\x7b\x30\x7d\xa6\x93\xe9\x79\xde\x46\x63\xfb\xa1\x2d\xf8\xb5\x4a\x24\x1c\xa0\x32\x2f\x78\xda\x96\xae\x5c\xc3\xb1\x45\x78';

// 59416d4d7a7532505732766670556a3232446c6934736b3849356d75576c6965746a2f674a52343667554975576e73776661615436586e65526d50376f53333474556f6b484b41794c336a616c7135637737464665413d3d
