import './App.css'
import CheckoutQueue from './CheckoutQueue'

function App() {
  const initialData = [
    [3, 2 ,6],
    [4, 6],
    [2, 9],
    [8, 5, 9],
    [3, 5],
  ]

  return (
    <>
      <CheckoutQueue initialData={initialData} />
    </>
  )
}

export default App
