require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `al-portfolio-v2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        // a token with read permissions is required
        // if you have a private dataset
        //sk2JyuXYARcGq2PG3Fp8VNWnIJD0pFTaQ4GNqodCQSCQbMA4NixYuob4O0OdnnRM8HqHfJJnaX1QgwEJBbVPvslbawFm3l607hZtVRI4qpqprSxLKcyKwtzBq7aAW3LTQa3HjoHea8lqEVNx3Sgk66uJceVyPgSgRTdp1HBeeD1IdeUE4bYz
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};
