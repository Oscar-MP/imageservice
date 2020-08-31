'use strict'



var app   = require('./app.js');
var port  = process.env.PORT || 3004;

console.log(`[-] Starting uploader service on port: ${port}`);


app.listen(port, () => {
  console.log('[*] Image service is up and running');
});
