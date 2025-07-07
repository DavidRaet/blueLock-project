
const CharacterCard = ({character, banList, onBanAttribute}) => {
  const isAttributeBanned = (type, value) => {
    return banList.some(ban => ban.type === type && ban.value === value);
  }


  return (
  <div className="card-container">
        <div className="image-container">
          <img 
          className="character-image" 
          src={character.image} 
          alt={character.name} 
          onError={(e) => {
            e.target.src = './images/barou-barou-kyun.jpg'
          }}/>
        </div>
        <div className="ban-container">
            <button className={isAttributeBanned('name', character.name) ? "banned" : "not-banned"} onClick={() => onBanAttribute('name', character.name)}>{character.name}</button>
            <button className={isAttributeBanned('position', character.position)? "banned" : "not-banned"} onClick={() => onBanAttribute('position', character.position)}>{character.position}</button>
            <button className={isAttributeBanned('team', character.team)? "banned" : "not-banned"} onClick={() => onBanAttribute('team', character.team)}>{character.team}</button>
            <button className={isAttributeBanned('weapon', character.weapon)? "banned" : "not-banned"} onClick={() => onBanAttribute('weapon', character.weapon)}>{character.weapon}</button>
        </div>
        <div className="stats-container">
          <div className="num-goals">
            <h3>Goals: {character.goals}</h3>
          </div>
          <div className="ranking">
            <h3>Ranking : #{character.ranking}</h3>
          </div>
        </div>
  </div>
  )
}

export default CharacterCard