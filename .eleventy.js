const pluginWebc = require('@11ty/eleventy-plugin-webc');

module.exports = (config) => {
  // Add support for .webc files
  config.addPlugin(pluginWebc, {
    components: 'src/_includes/components/**/*.webc',
  });

  // Copy static assets
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/globals.css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
