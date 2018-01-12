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

//Node babel source map support
require('source-map-support').install();
// var views = require('koa-views');

const webpack = require('webpack'),
  convert = require('koa-convert'),
  fs = require('fs'),
  path = require('path'),
  devMiddleware = require('koa-webpack-dev-middleware'),
  hotMiddleware = require('koa-webpack-hot-middleware'),
  config = require('../config/webpack.config.dev.js'),
  clientRoute = require('../server/middlewares/clientRoute.js'),
  views = require('koa-views'),
  compiler = webpack(config);

// Webpack hook event to write html file into `/views/dev` from `/views/tpl` due to server render
compiler.plugin('emit', (compilation, callback) => {
  const assets = compilation.assets;
  let file, data;
  Object.keys(assets).forEach(key => {
    if (key.match(/\.html$/)) {
      file = path.resolve(__dirname, key);
      data = assets[key].source();
      fs.writeFileSync(file, data);
    }
  });
  callback();
});

var app = require('./app.js').default;

app.use(views(path.resolve(__dirname, '../views/dev'), {map: {html: 'ejs'}}))
app.use(convert(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})));



app.use(clientRoute.default);
app.use(convert(hotMiddleware(compiler)));

app.listen(8712);
console.log("Server started and listen on port " + '8712');
