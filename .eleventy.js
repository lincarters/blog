module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/_assets");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
};
}