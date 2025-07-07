import BanItem from "./BanItem"
const BanListPanel = ({banList, onRemoveBan}) => {
  return (

    <div className="banList-container">
      <h1>🚫 Banned Attributes</h1>
      {banList.length === 0 ? (
        <div className="null">
          <p>No banned attributes yet.</p>
          <p>Please click on a character attribute to ban them!
          </p>
        </div> ) : (
          <div className="ban-items">
            {banList.map((singleBan, index) => (
              <BanItem 
                key={index}
                ban={singleBan}
                onRemoveBan={onRemoveBan}
              />
            ))}
          </div>
      )}
      <div className="instructions">
        <h4>How it works: </h4>
        <ul>
          <li>Click any blue button to ban the attribute</li>
          <li>A banned attribute will no longer appear in future discoveries</li>
          <li>Click X to remove the ban</li>
        </ul>
      </div>
    </div>
  )
}

export default BanListPanel