
const Follower = ({ name, age, likes }) => {
  return (
    <div className="profile">
      <div className="profile-header">
        <h3>{name} <span>{age}</span></h3>
      </div>
      <div className="stat">
        <strong>{likes}</strong>
      </div>
    </div>
  )
}


export default Follower;
