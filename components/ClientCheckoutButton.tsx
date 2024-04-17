'use client'

import { usePaddle } from '@paddle/paddle-js'

const ClientCheckoutButton = () => {
  const paddle = usePaddle()

  const openCheckout = async () => {
    if (paddle) {
      try {
        // Replace with your product ID
        const productId = 'pro_01hvcx3fcwmw146qzvfy438yzx'
        // Replace with your Paddle Sandbox API Key
        const apiKey = '11095391802005acb28091770d0e1af559d20f322b68e181cc'
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
