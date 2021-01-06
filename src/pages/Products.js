import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, useStaticQuery } from "gatsby"

const stripePromise = loadStripe(
  "pk_test_51HX6r9G4j2RvvMmeXhOJl7TmDbx1dQxs3f0x0SkOfG6fE0KIxuWnt5dEEdWYFg3K85wVttUN1y41aqwYrBoRfi7e00IRdb4Qrv"
)

export default function Products({ location }) {
  const data = useStaticQuery(
    graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
              }
            }
          }
        }
      }
    `
  )

  console.log("stripe data = ", data)

  return (
    <div>
      <div>Products List!</div>
      {data.prices.edges.map(node => (
        <div key={node.node.id}>
          <div>{node.node.product.name}</div>
          <div>{node.node.unit_amount}</div>
          <div>
            <img
              width="250px"
              src={node.node.product.images[0]}
              alt={node.node.product.name}
            />
          </div>
          <button
          class = "snipcart-add-item"
          data-item-id = {node.node.id}
          data-item-price ={node.node.unit_amount}
          data-item-url = "https://jamstack-snipcart.netlify.app/Products"
          data-item-name = {node.node.product.name}
          data-item-description = {node.node.product.description }
          data-item-image = {node.node.product.images[0]}
          >
          checkout</button>
        </div>
      ))}
    </div>
  )
}
