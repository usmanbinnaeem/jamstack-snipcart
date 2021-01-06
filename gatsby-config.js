require("dotenv").config({ path: ".env" })
module.exports = {
  
  plugins: [
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.SNIPCART_KEY,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
  ],
}
