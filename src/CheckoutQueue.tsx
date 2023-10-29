import { useEffect, useState } from "react"

type Data = Array<Array<number>>

export default function CheckoutQueue ({ initialData }: { initialData: Data }) {
    const [data, setData] = useState(initialData)
    const [newShopper, setNewShopper] = useState<number|string>('')

    function handleCheckout(){
        let shortestQueue:number = 0
        let shortestQueueLength:number = Infinity

        data.forEach((queue, index) => {
            let thisQueueItems = queue.reduce((prev, curr) => prev + curr, 0)
            if(thisQueueItems < shortestQueueLength){
                shortestQueue = index
                shortestQueueLength = thisQueueItems
            }
        })

        let newData = [...data]
        if(typeof shortestQueue == "number" && typeof newShopper == "number") newData[shortestQueue].push(newShopper)
        setData(newData)
        setNewShopper('')
    }
    useEffect(() => {
        // This function will run every 0.5 seconds
        const intervalId = setInterval(() => {
            setData((prevData) => {
              const newData = prevData.map((queue) => {
                if(queue.length > 0){
                    const shopper = queue[0];
                    let newQueue = [...queue]
                    if (shopper <= 1) {
                      // Remove the first shopper
                      return newQueue.slice(1);
                    } else {
                      // Decrement the shopper's item count by 1
                      newQueue[0] = shopper - 1;
                      return newQueue;
                    }
                }
                else return queue
              });
              console.log(newData)
              return newData;
            });
        }, 500); // 500 milliseconds = 0.5 seconds
    
        // Clear the interval when the component unmounts to prevent memory leaks
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    return(
        <>
            <input type="number" value={newShopper} onChange={(e) => setNewShopper(parseInt(e.target.value))}></input>
            <button disabled={!newShopper} onClick={() => handleCheckout()}>Checkout</button>
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