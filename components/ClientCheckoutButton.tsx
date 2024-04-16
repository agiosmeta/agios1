'use client' // This line marks the component as a Client Component

import { usePaddle } from '@/utils/supabase/paddle'

const ClientCheckoutButton = () => {
  const paddle = usePaddle()

  const openCheckout = () => {
    paddle?.Checkout.open({
      items: [{ priceId: 'pro_01hvcx3fcwmw146qzvfy438yzx', quantity: 1 }],
      // Additional checkout options can be added here
    })
  }

  return <button onClick={openCheckout}>Buy Now</button>
}

export default ClientCheckoutButton
