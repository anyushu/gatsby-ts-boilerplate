/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Gatsby x TypeScript Boilerplate`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
  ],
}
