const express = require('express');
const path = require('path');
const cdr = require('child_process');
// const proxy = require('http-proxy-middleware');
// const conf = require('./dev-config');
// const debug = require('./utils').debug;
const port = 8080;
const staticPath = './src';

const app = express();

console.log(process.env.PORT);

app.set('port', process.env.PORT || port);

app.use(express.static(path.join(__dirname, staticPath)));

// conf.dev.proxy.forEach(item => {
//   app.use(proxy(item.pathRules, {
//     target: item.target,
//     changeOrigin: true,
//     logLevel: 'debug',
//     logProvider: debug
//   }));
// });

app.listen(app.get('port'));

console.log(`server is running at ${port}`);

cdr.exec(`start http://localhost:${port}`);
