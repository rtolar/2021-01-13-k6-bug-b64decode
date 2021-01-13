import encoding from "k6/encoding";

// Test simple encode sequence
// This works
function encodeHello() {
    console.log("------encodeHello()--------------");
    const data = 'hello'; 
    let enc = encoding.b64encode(data);
    console.log("after   = " + enc);
    const expected = 'aGVsbG8='; 
    console.log("encodeHello " + (enc == expected ? "PASSED" : "FAILED"));   // PASS
}

// Test simple decode/encode roundtrip 
// This works
function decodeEncodeWorks() {
    console.log("------decodeEncodeWorks()--------------");
    const b64data = 'aGVsbG8=';  // 'hello'
    let dec = encoding.b64decode(b64data);
    let enc = encoding.b64encode(dec);
    console.log("after   = " + enc);
    console.log("encode/decode " + (enc == b64data ? "PASSED" : "FAILED"));   // PASS
}

// Test a decode/encode roundtrip, but with a binary original value
// this fails. 
function decodeEncodeFails() {
    console.log("------decodeEncodeFails()--------------");
    const b64data = 'YAmMzu2PW2vfpUj22Dli4sk8I5muWlietj/gJR46gUIuWnswfaaT6XneRmP7oS34tUokHKAyL3jalq5cw7FFeA==';
    let dec = encoding.b64decode(b64data);
    let enc = encoding.b64encode(dec);
    console.log("after   = " + enc);
    console.log("encode/decode " + (enc == b64data ? "PASSED" : "FAILED"));  // FAIL
}

export default function() {
    encodeHello();
    decodeEncodeWorks();
    decodeEncodeFails();
}
