import "./styles.css";

interface contactsProps {
  id: string;
  type: string;
  profilePicUrl: string;
  profileName: string;
  status: string;
  day: string;
  info: string;
}

const RecentActivityCell = (props: contactsProps) => {
  return (
    <div className="display">
      <div className="type">
        <img className="typeIcon" alt="Compose Button" src={props.type} />
      </div>
      <div className="picContaine">
        <img
          className="perfilImage2"
          alt="Compose Button"
          src={props.profilePicUrl}
        />
      </div>
      <div className="MessagePreview2">
        <h2>{props.profileName}</h2>
        <p>{props.status}</p>
      </div>
      <div className="recordDay">{props.day}</div>
      <img className="infoIcon" alt="Compose Button" src={props.info} />
    </div>
  );
};
export default RecentActivityCell;
