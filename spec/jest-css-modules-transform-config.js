const path = require('path');
const autoprefixer = require('autoprefixer');

const additionalResolvePath = path.resolve(__dirname, 'src', 'additional_modules');

module.exports = {
  sassConfig: {
    includePaths: [additionalResolvePath],
    precision: 5,
  },
  lessConfig: {
    paths: [additionalResolvePath],
  },
  stylusConfig: {
    paths: [additionalResolvePath],
  },
  postcssConfig: {
    plugins: [autoprefixer],
  },
};
