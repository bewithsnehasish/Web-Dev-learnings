import "./Profile.css";

const Profile = ({ image, name, age, location, followers, likes, photos }) => {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img src={image} alt="Profile" className="profile-image" />
        </div>
      </div>
      <div className="profile-info">
        <h2>
          {name} <span>{age}</span>
        </h2>
        <p>{location}</p>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <strong>{followers}K</strong>
          <span>Followers</span>
        </div>
        <div className="stat">
          <strong>{likes}K</strong>
          <span>Likes</span>
        </div>
        <div className="stat">
          <strong>{photos}K</strong>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
