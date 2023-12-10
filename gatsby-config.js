/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    author: "Freddy",
    description: "Simple and clean",
    person: [
      { name: "john", age: 23 },
      { name: "smith", age: 24 },
    ],
    simpleData: ["item 1", "item 2"],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assect/image-single`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f43xmrp7wsuk`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
