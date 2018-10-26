module.exports = {
  siteMetadata: {
    title: '四個情境題，看看你的『發票觀』跟不跟得上時代',
    description: '統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！不過，時代在進步，你的發票觀跟得上時代嗎？',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '測測你的發票觀',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-77055530-21',
      }
    },
    'gatsby-plugin-offline',
  ],
}
