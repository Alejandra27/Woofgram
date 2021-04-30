import "./styles.css";
import React from "react";

interface ChatProps {
  key: string;
  profilePicUrl: string;
  profileName: string;
  preview: string;
  time: string;
  notification?: string;
}

type Component = (props: ChatProps) => React.ReactElement;

const ChatPreviewCell: Component = (props: ChatProps) => {
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
        {/* <span className="time">{props.time}</span> */}
        <div className="notificationGroup">
          <span className="time">{props.time}</span>
          <div className="notificationIcon">
            <span id="numerNotification">{props.notification}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatPreviewCell;

// Chat -> Component
// Chat({props}) -> string
