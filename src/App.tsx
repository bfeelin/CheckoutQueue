import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckoutQueue from './CheckoutQueue'

function App() {
  const data = [
    [3, 2 ,6],
    [4, 6],
    [2, 9],
    [8, 5, 9],
    [3, 5],
  ]

  return (
    <>
      <CheckoutQueue data={data} />
    </>
  )
}

export default App
