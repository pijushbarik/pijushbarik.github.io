module.exports = {
  siteMetadata: {
    title: `Pijush Barik | Web Developer`,
    description: `Portfolio and blog website project of Pijush (httsps://pijushbarik.ml)`,
    author: `@pijushbarik`,
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
        link: "/about",
      },
      {
        name: "portfolio",
        link: "/portfolio",
      },
      {
        name: "resume",
        link: "/resume",
      },
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
        background_color: `#ffab00`,
        theme_color: `#ffab00`,
        display: `minimal-ui`,
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
  ],
}
