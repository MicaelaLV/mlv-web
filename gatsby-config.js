/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `MLV Web Portfolio`,
    description: `Gatsby powered MLV personal portfolio`,
    place: 'Rome',
    author: `@MicaelaLV`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, // gets Images loading with nice loading speed and effects
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark', // gets Markdown reading capabilities to GraphQl
    { 
      resolve: `gatsby-plugin-manifest`, // gets users to add your site to their home screen on most mobile browsers
      options: {
        name: `MLV Web`,
        short_name: `MLV`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFA8B0`,
        display: `standalone`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // store images here
      }
    }
  ]
}
