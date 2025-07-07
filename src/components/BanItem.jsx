const BanItem = ({ban, onRemoveBan}) => {
  return (
    <div className="ban-container">
    <p>{ban.type} : {ban.value}</p>
    <button className="removeBan-btn" onClick={() => onRemoveBan(ban)}>X</button>
  </div>
  )
}

export default BanItem