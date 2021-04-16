const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/biblioTech-front'));
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
ngApp.get('/ngsw-worker.js', function (request, response) {
    response.sendFile(path.join(__dirname, './dist/biblioTech-front/ngsw-worker.js'));
});
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, './dist/biblioTech-front/index.html'));
});



ngApp.listen(process.env.PORT || 8080);

