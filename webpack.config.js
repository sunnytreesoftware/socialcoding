// const mix = require('node-modules/reveal.js');
// const path = require("path");
// const mix = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = ({mode}) => {
  return {
      mode,
      plugins: [
          new HtmlWebPackPlugin({
              // template: '/src/publc_html/somepage.html'
          })
      ],
      devtool: mode === 'development' ? 'source-map' : 'source-map'
  };
};