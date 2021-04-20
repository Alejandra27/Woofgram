import "./styles.css";

interface ChatProps {
  profilePicUrl: string;
  profileName: string;
  preview: string;
  time: string;
  notification?: string;
}

const Chat = (props: ChatProps) => {
  return (
    <div className="chat">
      <div className="picContainer">
        <img
          className="perfilImage"
          alt="Compose Button"
          src={props.profilePicUrl}
        />
      </div>
      <div className="MessagePreview">
        <h2>{props.profileName}</h2>
        <p>{props.preview}</p>
      </div>
      <div className="metaData">
        <span className="time">{props.time}</span>
        <div className="notificationGroup">
          <div className="notificationIcon">
            <span id="numerNotification">{props.notification}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
