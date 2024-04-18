import * as React from 'react'
import { useEffect } from 'react'
import { useCheckout } from '@salable/paddle-checkout-react'

const ClientCheckoutButton = () => {
  const { paddle, selectedProductId, setSelectedProductId } = useCheckout()

  useEffect(() => {
    // You can add any additional logic or side effects here
  }, [paddle, selectedProductId])

const handleBuy = (id: string) => () => {
if (setSelectedProductId) {
setSelectedProductId(id);
}
}

const handleCancel = () => {
if (setSelectedProductId) {
setSelectedProductId(null);
}
}

  return (
    <>
      <h2>Products</h2>
      <p>
        Pro <button onClick={handleBuy('YOUR_PRO_PLAN_ID')}>Buy</button>
      </p>
      <p>
        Lite <button onClick={handleBuy('YOUR_LITE_PLAN_ID')}>Buy</button>
      </p>
      {selectedProductId ? <StoreDemo handleCancel={handleCancel} /> : null}
    </>
  )
}

const StoreDemo: React.FC<{ handleCancel: () => void }> = ({ handleCancel }) => {
  const paddleComponentId = 'paddle-wrapper'

  return (
    <div>
      <div id={paddleComponentId} />
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default ClientCheckoutButton
