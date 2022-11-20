module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('static');

  eleventyConfig.addGlobalData('isProd', false);

  return {
    templateFormats: ['njk'],
    dir: {
      input: 'njk',
    },
  };
}
