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
    `gatsby-transformer-sharp`, // gatsby images loader with nice loading speed and effects
    `gatsby-plugin-sharp`,
    { //this plugin allows users to add your site to their home screen on most mobile browsers
      resolve: `gatsby-plugin-manifest`, 
      options: {
        name: `MLV Web`,
        short_name: `MLV`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFA8B0`,
        display: `standalone`,
        icon: `src/images/favicon.ico` // This path is relative to the root of the site.
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
