import { useState } from 'react'
import './App.css'
import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
    <LikeButton/>
    </>
  )
}

export default App
