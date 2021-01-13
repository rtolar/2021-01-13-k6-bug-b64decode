import encoding from "k6/encoding";
import crypto from "k6/crypto";

// Test simple decode/encode sequence
// This works
function decodeEncodeWorks() {
    console.log("------decodeEncodeWorks()--------------");
    const b64data = 'aGVsbG8=';  // 'hello'
    let dec = encoding.b64decode(b64data);
    let enc = encoding.b64encode(dec);
    console.log("after   = " + enc);
    console.log("encode/decode " + (enc == b64data ? "PASSED" : "FAILED"));   // PASS
}

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
    decodeEncodeWorks();
    decodeEncodeFails();
}
