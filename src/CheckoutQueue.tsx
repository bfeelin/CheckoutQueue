import { useState } from "react"

type Data = Array<Array<number>>

export default function CheckoutQueue ({ data }: { data: Data }) {
    const [newShopper, setNewShopper] = useState<string>('')

    function handleCheckout(){

    }

    return(
        <>
            <input value={newShopper} onChange={(e) => setNewShopper(e.target.value)}></input>
            <button onClick={() => handleCheckout()}>Checkout</button>
            <div className="queues">
            {data?.map((queue, index) => (
                <div className='queue' key={`queue-wrapper-${index}`}>
                    <div className='cashier'></div>
                    {queue?.map((shopper, index) => (
                        <div className='shopper' key={`shopper-${index}`}>{shopper}</div>
                    ))}
                </div>
            ))}
            </div>
        </>
    )
}