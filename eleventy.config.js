module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('static');
  eleventyConfig.addPassthroughCopy('postcss');

  eleventyConfig.addGlobalData('isProd', false);

  return {
    templateFormats: ['njk'],
    dir: {
      input: '11ty',
    },
  };
}
