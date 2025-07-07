import CharacterCard from "./CharacterCard" 
const CharacterPanel = ({character, banList, error, loading, onDiscover, onBanAttribute}) => {

  return (
    <div className="character-panel">
      <h2>Character Discovery</h2>
      <button 
      onClick={onDiscover}
      disabled={loading}
      className="discover-btn"
      >{loading ? "Loading..." : "Discover new Player"}</button>

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {character ? (
        <CharacterCard 
         character={character}
         banList={banList}
         onBanAttribute={onBanAttribute} 
         />
      ) : (
          <div className="first-display">
        <img src="./images/isagi-chibi.jpg" alt="cute isagi"/>
        <p>Click Discover new Player to start!</p>
          </div>
      )}
    </div>
  )
}

export default CharacterPanel