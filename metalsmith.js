/* eslint-disable import/no-extraneous-dependencies */

const Metalsmith = require("metalsmith");
const markdown = require("@metalsmith/markdown");
const layouts = require("@metalsmith/layouts");
const collections = require("@metalsmith/collections");
const drafts = require("@metalsmith/drafts");
const permalinks = require("@metalsmith/permalinks");
const when = require("metalsmith-if");
const htmlMinifier = require("metalsmith-html-minifier");
const assets = require("metalsmith-static-files");
const metadata = require("metalsmith-metadata");
const prism = require("metalsmith-prism");

const { dependencies } = require("./package.json");
const isProduction = process.env.NODE_ENV === "production";

// functions to extend Nunjucks environment
const toUpper = string => string.toUpperCase();
const spaceToDash = string => string.replace(/\s+/g, "-");
const condenseTitle = string => string.toLowerCase().replace(/\s+/g, "");
const UTCdate = date => date.toUTCString("M d, yyyy");
const blogDate = date => date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" });
const trimSlashes = string => string.replace(/(^\/)|(\/$)/g, "");

// Define engine options for the inplace and layouts plugins
const templateConfig = {
  directory: "templates",
  engineOptions: {
    smartypants: true,
    smartLists: true,
    filters: {
      toUpper,
      spaceToDash,
      condenseTitle,
      UTCdate,
      blogDate,
      trimSlashes,
    },
  },
};

Metalsmith(__dirname)
  .source("./src/content")
  .destination("./build")
  .clean(true)
  .metadata({
    msVersion: dependencies.metalsmith,
    nodeVersion: process.version,
  })

  .use(when(isProduction, drafts()))

  .use(
    metadata({
      site: "data/site.json",
      nav: "data/navigation.json",
    })
  )

  .use(
    collections({
      blog: {
        pattern: "blog/*.md",
        sortBy: "date",
        reverse: true,
        limit: 10,
      },
    })
  )

  .use(markdown())

  .use(permalinks())

  .use(layouts(templateConfig))

  .use(
    prism({
      lineNumbers: true,
      decode: true,
    })
  )

  .use(
    assets({
      source: "src/assets/",
      destination: "assets/",
    })
  )

  .use(when(isProduction, htmlMinifier()))
  .build(err => {
    if (err) {
      throw err;
    }
  });
