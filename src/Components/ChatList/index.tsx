import NavigationBar from "../NavigationBar";
import dogConversations, {
  DogConversation
} from "../../../data/dogConversations";
import ChatPreviewCell from "../../Components/ChatPreviewCell";

const ChatList = (props) => {
  const shortDogConversationToChat = (c: DogConversation) => (
    <ChatPreviewCell key={c.id} {...c} />
  );

  const chats = dogConversations.map(shortDogConversationToChat);

  return (
    <>
      <NavigationBar
        leftButton={<span id="editButton">Edit</span>}
        title="Chats"
        rightButton={
          <img
            className="iconButton"
            alt="Compose Button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE2UlEQVR4nO2bT4wURRTGf697l6BgFI3CjJowgzHRjXsxHlRATwqJgJKQeDDqCWEhhIOJXHZoZogHE8EDLoSLXkzQgwl/jBdNjMSoCWtU3MQo20tEdgATVxMUYXfqeWC6p2l2t6ehm55h5rtM1as3r7/6prqq600XdNFFR0PChurg4qeMZQ9YylJFFwJ2Brw8TIqwO7fDfSPcEOJ5tyB/gDmqFkN5Z+zLZi/gC6DrH+2t5v7cg8r6pNgnhPP5snubV2mKp7AvV12wRfYPT0YF7/EKLdr5Swh7goameCobqrkJgI1RFxC4PJxUrC8CEQ6iVmXCnnu8zxm5dA3EU8FMPK0L53828+c9JIaSwqpGsy7PV8aOzhazB0DF3gQKgMDhXHns+TQ6cL2I4HkMWD1eKn4MvAAglgwAswpg1YM96V9EZUfCvBNDUzwt3mz4sCwqpgVQn+0BmLDnHr8ulimiGZ4T3PJjoLooKqYAjJeK6hnyZfeqpbFV0CzPoB8wiuhXltGhRZWT34Z9rYQ5tiKWoPKyEevr8e3F3bruyueaThDAg6BsrT5c2BU03vQCWJZ5XJUjvkFly2lnyRN+eyasbiAWOSe/ydvuGoHDnk2MbvbKN70AAOJgQsvmcq/QEQLAVcumvzx2jAChR3p/JegYAWZCV4CsCWSNrgBZE8gaPdEuDZwuFd4SZCvQmwKXGfN/aSLWCBBkI+l0HqBXlYGUYs+ImALwLpBWiuyq/N+NQKxbIFd2twHbUuKSCTp+EuwKkDWBrBFrDvjdKT5oG1lj0MSFsxBTs/TgfY77S9KxG1AXpAiMepZYAlhGP1UoppE1VRTL8BrwQArhAagZWWFbPFczjQxRLAHaHffvdH8FdgdtsQSoGVnRY8mLoPMSZQaA/DNl9EDycWdHLAHqClZS4pIJOn4V6AqQNYGsEWsOqA4WXleRCjA3xtemQD/Il8deDTeEttetvx1WkfXE6zxAD8gr55y++eGG0Pa69bfDKPuACzGvMSXw3j3OyPlwQ2h73frb4XzF3QXsinRsEq2wve74SbArQNYEska7CeBPwONO/tbpHEKrzb9RAdtNgL+8whT2HdM5XJycvD1Q/TsqYLsJcNYr2MxZPJ2D3TtVCFTPRQVsLwGEn/xiTfundanRH/AfiQrZVgKI0R8aFZZO56NW42VKDJHvPLaVAAb780B1pTpPX/Egp+uwUX3WN9h8FhWzrQTIV058D5yuV+88w2/PBNvP9hVXgtxVr57J4X4XFbOtBBBQhA+9uho2B9tNTTc1nPUjcTBRMdtKAAC7Zg2B37EVp5xCP8App9CPiDf8Ta0mTW2sPAFqnmHE6ZuTFNk0sHDniVFR8dLaYhspAdQ/BUBUjtTzl5Govy4v/vq6oPbfI8lSTh4KZbyDA7B2fLDwErDWa1Zbm07c1keA8Q8VCJSSoZke8pXRYcH/c0MQeZ/6r6/KJ3nHPdZsrMvnBSyGPIOKrq6Wioeqg8XHWvl2qL/56Y0C770/FZtYBz78f7nGtxf3omxIiF9SmDVPWC0VDwXPCKly5N6Ku2o635ngrwK56oItwN5rppoOZs0ThkZB7F8fAgLI/uHJfNkdwGKZCAe4/MBRm/mrNwSz5gnzldFhFXkbuAi8E+fev6mgTvs9z3TRKvgfipyc5RgUMoAAAAAASUVORK5CYII="
          />
        }
      />
      {chats}
    </>
  );
};

export default ChatList;
