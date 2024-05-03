import { useEffect, useState } from 'react'
import './App.css'
//import { Dice } from './companents/Lesson5Task/Dice/Dice'
import { fetchClients } from './components/Lesson8/TaskSlide/Fetch'
import ClientCard from './components/Lesson8/TaskSlide/Client'
function App() {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetchClients().then((client) => {
      setState(client);
    });
  }, [])

  return (
    <>
      {
        state ? <ClientCard {...state} /> : "Loading..."
      }

      {/* <Dice/> */}
    </>
  )
}

export default App