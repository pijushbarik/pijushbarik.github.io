module.exports = {
  siteMetadata: {
    title: `Pijush Barik | Web Developer`,
    description: `Portfolio and blog website project of Pijush (httsps://pijushbarik.ml)`,
    author: `@pijushbarik`,
    siteUrl: `https://pijushbarik.ml`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      // turn off blog for now
      // {
      //   name: "blog",
      //   link: "/blog",
      // },
      {
        name: "about",
        link: "/about/",
      },
      {
        name: "projects",
        link: "/projects/",
      },
      {
        name: "contact",
        link: "/contact/",
      },
      // {
      //   name: "resume",
      //   link: "/resume/",
      // },
    ],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pijush Barik`,
        short_name: `Pijush Barik`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `fullscreen`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.s(a|c)ss$/,
        sassRuleModulesTest: /\.(mod|module)\.s(a|c)ss$/,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
