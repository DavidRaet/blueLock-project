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
      const response = await fetch('./db.json');

      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();


      const availableCharacters = data.characters.filter(character => {
        return !banList.some(ban =>
         (ban.type === 'name' && ban.value === character.name) ||
         (ban.type === 'position' && ban.value === character.position) || 
         (ban.type === 'team' && ban.value === character.team)||
         (ban.type === 'weapon' && ban.value === character.weapon)
        )
      })
    
        if(availableCharacters.length > 0){
        const randomCharacter = Math.floor(Math.random() * availableCharacters.length);
        setTimeout(() => {
          setCurrentCharacter(availableCharacters[randomCharacter]); 
          setIsLoading(false);
        }, 2000);
      } else {
        throw new Error("No characters available with current bans!");
      }


    } catch(error) {
      setError(error.message);
      setIsLoading(false);
    } 
  }

  const handleBanAttribute = (type, value) => {
    const banExists = banList.some(ban => ban.type === type && ban.value === value);
    const newBan = {
      type: type, 
      value: value
    };
    if (!banExists){
      setBanList([...banList, newBan]);
    }
  }

  const handleRemoveBan = (banToRemove) => {
    const newBan = banList.filter(ban => {
      return !(ban.type === banToRemove.type && ban.value === banToRemove.value)
    })
    setBanList(newBan)
  }

  return (
    
    <div className="app-container">
      <h1>Blue Lock Character Explorer</h1>
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
