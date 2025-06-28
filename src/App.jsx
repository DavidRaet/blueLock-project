import { useState } from 'react'
import './App.css'

function App() {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [banList, setBanList] = useState([]);


  return (
    <button>Discover</button>
  )
}

export default App
