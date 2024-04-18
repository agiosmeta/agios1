'use client'

import React from 'react'
import { CheckoutProvider } from '@salable/paddle-checkout-react'
import ClientCheckoutButton from '@/components/ClientCheckoutButton'

const ProtectedPage = () => {
  const paddleComponentId = 'paddle-wrapper'

  return (
    <CheckoutProvider
      passthroughData={{ purchaserId: '', granteeId: '' }}
      setPassthroughData={() => {}}
      environmentConfig={{
        vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID, // Replace with your Paddle Vendor ID
        environment: 'sandbox', // or 'production'
        eventCallback: (data) => {
          switch (data.event) {
            case 'Checkout.Complete':
              console.log(data.eventData)
              break
            case 'Checkout.Close':
              console.log(data.eventData)
              break
          }
        },
      }}
      checkoutConfig={{
        frameInitialHeight: 416,
        frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;',
      }}
      targetComponent={paddleComponentId}
    >
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="w-full">
          <div className="py-6 font-bold bg-purple-950 text-center">
            User Logged In View: This is to validate the user has registered and logged in to subscribe.
          </div>
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              {/* Add your other components here */}
              <ClientCheckoutButton />
            </div>
          </nav>
        </div>

        {/* Other content for the ProtectedPage */}
      </div>
    </CheckoutProvider>
  )
}

export default ProtectedPage
