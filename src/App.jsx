import { useState } from 'react'

import './App.css'
import { Dice } from './Lesson5/Dice/Dice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Dice/>
    </>
  )
}

export default App
