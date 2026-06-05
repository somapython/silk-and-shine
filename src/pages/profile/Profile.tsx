import "./Profile.scss";

const Profile = () => {

  const user =
  JSON.parse(
    localStorage.getItem(
      "user"
    ) || "null"
  );

  return (
    <div className="profile-page">

      <h1>
        My Profile
      </h1>

      <div className="profile-card">

        <h3>
          {user?.fullName}
        </h3>

        <p>
          {user?.mobile}
        </p>

        <p>
          {user?.email}
        </p>

      </div>

    </div>
  );
};

export default Profile;