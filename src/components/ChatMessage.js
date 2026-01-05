const ChatMessage = ({ msgInfo }) => {
  return (
    <div className="flex flex-wrap items-center chat-messages">
      <img
        className="w-8 h-8 rounded-full inline-block mr-2"
        alt="user-avatar"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />
      <span className="font-bold mr-2">{msgInfo.name}:</span>
      <p>{msgInfo.message}</p>
    </div>
  );
};

export default ChatMessage;
