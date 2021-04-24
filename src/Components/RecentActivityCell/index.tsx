import "./styles.css";

interface contactsProps {
  id: string;
  profilePicUrl: string;
  profileName: string;
  lastConnection: string;
}

const RecentActivityCell = (props: contactsProps) => {
  return (
    <div className="display">
      <div className="picContainer2">
        <img
          className="perfilImage2"
          alt="Compose Button"
          src={props.profilePicUrl}
        />
      </div>
      <div className="MessagePreview2">
        <h2>{props.profileName}</h2>
        <p>{props.lastConnection}</p>
      </div>
    </div>
  );
};
export default RecentActivityCell;
