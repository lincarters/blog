const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const moment = require('moment');
moment.locale('en');
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/_assets");
  eleventyConfig.addFilter('dateIso', date => { /* from https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/ */
    return moment(date).toISOString();
  });
  eleventyConfig.addFilter('dateReadable', date => { /* from https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/ */
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};