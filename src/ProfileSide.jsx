import "./ProfileSide.css";
import { useNavigate } from "react-router-dom";

import foto from './assets/pp.jpg';

const ProfileSide = () => {

  const navigate = useNavigate()

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={foto} className="foto"/>
        <p className="username">Orang Ganteng</p>
        <p className="handle">@Cogan</p>
      </div>
      <p className="bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="stats">
        <div className="follow">
          <p className="follow-value">908</p>
          <p className="follow-label">Following</p>
        </div>
        <div className="garis-tengah"></div>
        <div className="follow">
          <p className="follow-value">2,091</p>
          <p className="follow-label">Followers</p>
        </div>
      </div>
      <div className="profile-btn">
        <button onClick={() => navigate('/EditProfile')} >MyProfile</button>
      </div>
    </div>
  );
};

export default ProfileSide;
