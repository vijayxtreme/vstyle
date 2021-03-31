module.exports = {
  siteMetadata: {
    title: `Vijay Menon | Full Stack Developer`,
    description: `Portfolio site for Vijay Menon, Full Stack Developer from Southern California.  Specializing in PHP and JavaScript, with expertise in Wordpress, Drupal, JavaScript, JQuery, React, Angular, Node.js, MongoDB, Python, Django.  Head Organizer for JavaScriptLA - A Meetup Group in Southern California for JavaScript developers with over 4000 members.`,
    author: `@vijayxtreme`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      }
    },{
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal:`carbon`,
              lineNumbers:true,
              theme:`synthwave`
            }
          }
        ]
      }
    },    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
