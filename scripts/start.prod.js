require('babel-core/register')({
  "presets": [
    "es2015",
    "es2016",
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ]
});
var server = require('koa-static');
var app = require('./app.js').default;
var path = require('path');
var views = require('koa-views');
var clientRoute = require('../server/middlewares/clientRoute.js');

app.use(views(path.resolve(__dirname, '../views/prod'), {map: {html: 'ejs'}}))
app.use(clientRoute.default);
app.use(server(path.resolve(__dirname, '../build')));
app.listen(8713);
console.log("Server started and listen on port " + '8713');
