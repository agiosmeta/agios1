'use client'

import { usePaddle } from '@/utils/supabase/paddle'

const ClientCheckoutButton = () => {
  const paddle = usePaddle()

  const openCheckout = () => {
    if (paddle) {
      // Replace with the generated payment link from Paddle's sandbox
      const paymentLink = 'https://agios1-7hmruamxo-agios.vercel.app/'
      paddle.Checkout.open({ product: paymentLink })
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
