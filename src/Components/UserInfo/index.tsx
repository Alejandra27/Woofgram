import "./styles.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="profileUser">
        <img
          className="picProfileUser"
          alt="Compose Button"
          src="https://thepetridish.my/wp-content/uploads/2020/03/doggo.jpg"
        />
      </div>
      <div className="userName">
        <span>Maximus</span>
      </div>
      <div className="phoneNumber">
        <span>+57 311 5554343</span>
      </div>
    </div>
  );
};
export default UserInfo;
