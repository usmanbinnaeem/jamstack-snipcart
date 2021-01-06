import React from "react"

export default function Home() {
  return (
    <div>
    <div>Hello world!</div>
    <button 
    class = "snipcart-add-item"
    data-item-id = "t-shirt"
    data-item-price = "20.00"
    data-item-url = "https://jamstack-snipcart.netlify.app/Products"
    data-item-name = 't-shirt'
    data-item-description = 'this is t-shirt'
    data-item-image = 'https://cdn.balibaris.com/23364-home_alternate/mitch-t-shirt-jersey-white.jpg'
    >Checkout</button>
    </div>
  )
}
