import "./ProfileSide.css";
import { RxAvatar } from "react-icons/rx";

const ProfileSide = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <RxAvatar
          src="https://yt3.googleusercontent.com/70AAs4G19wnArE_Z99J_9kg678xihVgx72ti9ybFUeWomeM45lvr0j5ecR_4qSLWCcC98Rup=s160-c-k-c0x00ffffff-no-rj"
          className="avatar"
          size={60}
        />
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
        <button>MyProfile</button>
      </div>
    </div>
  );
};

export default ProfileSide;
