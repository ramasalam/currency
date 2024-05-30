import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyTable from './components/curency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyTable/>
    </>
  )
}

export default App
