'use client'

import { usePaddle } from '@paddle/paddle-js'

const ClientCheckoutButton = () => {
  const paddle = usePaddle()

  const openCheckout = async () => {
    if (paddle) {
      try {
        // Replace with your product ID
        const productId = 'YOUR_PRODUCT_ID'
        // Replace with your Paddle Sandbox API Key
        const apiKey = 'YOUR_SANDBOX_API_KEY'
        const checkoutLink = await paddle.Checkout.open({
          product: productId,
          auth: apiKey,
        })
        if (checkoutLink) {
          // Open the checkout link
          window.location.href = checkoutLink
        }
      } catch (error) {
        console.error('Error opening checkout:', error)
      }
    }
  }

  return (
    <button
      onClick={openCheckout}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
        Subscribe
      </span>
    </button>
  )
}

export default ClientCheckoutButton
