'use client'

import { usePaddle } from '@/utils/supabase/paddle'
import React, { ReactNode } from 'react'

interface ClientCheckoutButtonProps {
  children: ReactNode
}

const ClientCheckoutButton = ({ children }: ClientCheckoutButtonProps) => {
  const paddle = usePaddle()

  const openCheckout = () => {
    paddle?.Checkout.open({
      items: [{ priceId: 'pro_01hvcx3fcwmw146qzvfy438yzx', quantity: 1 }],
      // Additional checkout options can be added here
    })
  }

  return <button onClick={openCheckout}>{children}</button>
}

export default ClientCheckoutButton
