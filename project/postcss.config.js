module.exports = {
  plugins: [
    // These plugins give you majority of css functionality
    // The order is important here
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('postcss-mixins'),
    require('postcss-at-rules-variables'),
    require('postcss-each'),
    require('postcss-for'),
    require('postcss-conditionals'),
    require('lost'),
    require('postcss-cssnext'),
    require('postcss-math'),
    require('postcss-hexrgba'),

    // These are always nice to have
    require('postcss-plugin-px2rem')({
      rootValue: 16,
      unitPrecision: 4,
      minPixelValue: 1
    })
  ]
};
