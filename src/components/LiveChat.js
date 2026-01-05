import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatStore";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  const addLiveMessages = () => {
    const msg = {
      name: "User" + Math.floor(Math.random() * 1000),
      message: "This is a random message " + Math.floor(Math.random() * 1000),
    };
    dispatch(addMessage(msg));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addLiveMessages();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="rounded-lg h-[500px]">
        {/* <h2 className="text-lg font-bold mb-4">Live Chat</h2> */}
        <div className="flex flex-col-reverse text-left overflow-y-scroll h-[500px] bg-gray-200 border border-gray-300 p-2">
          {messages.map((msg, index) => (
            <div key={index + msg} className="p-1 m-1">
              <ChatMessage msgInfo={msg} />
            </div>
          ))}
        </div>
      </div>
      <form
        className="w-full mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const msg = {
            name: "Live User",
            message: liveMessage,
          };
          dispatch(addMessage(msg));
        }}
      >
        <input
          className="w-full border border-gray-400 rounded-full px-4 py-2 focus:outline-none"
          type="text"
          placeholder="Type a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-4 py-2"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
