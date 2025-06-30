import { useState } from 'react'
import './App.css'
import CharacterPanel from './components/CharacterPanel';
import BanListPanel from './components/BanListPanel';

function App() {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [banList, setBanList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null) 

  const handleDiscover = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch()
    } catch(error) {
      setError(error)
    }
  }

  const handleBanAttribute = () => {

  }

  const handleRemoveBan = () => {

  }

  return (
    <div className="app-container">
      <CharacterPanel 
        character={currentCharacter}
        banList={banList}
        error={error}
        loading={isLoading}
        onDiscover={handleDiscover}
        onBanAttribute={handleBanAttribute}
      />
      <BanListPanel 
        banList={banList}
        // on Remove Ban implementation
        onRemoveBan={handleRemoveBan}
      />
    </div>
  )
}

export default App
