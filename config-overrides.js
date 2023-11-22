const {
  override, 
  addDecoratorsLegacy, 
  addLessLoader,
  addWebpackAlias,
  addWebpackResolve,
  adjustStyleLoaders
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addDecoratorsLegacy(),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      relativeUrls: false,
      modifyVars: { '@primary-color': '#A80000' }
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addWebpackResolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }),
  adjustStyleLoaders(({ use: [,, postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions }
  })
)