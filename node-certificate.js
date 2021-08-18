const pem = require("pem");
const fs = require("fs");
const {X509Certificate} = require('crypto')

const pfx = fs.readFileSync(__dirname + "/test-cert.pfx");

pem.readPkcs12(pfx, { p12Password: "rocket-skates" }, (err, cert) => {

    const x509 = new X509Certificate(cert.cert);
    console.log(x509)
});