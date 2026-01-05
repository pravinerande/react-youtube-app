import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/store/sidebarSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="col-span-10 p-4">
      <div className="flex gap-4">
        <div className="flex-grow">
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="mt-4 text-left">
        {/* Dummy Video Details */}
        <h2 className="text-2xl font-bold">
          Sample Video Title - Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quidem.
        </h2>
        <h4 className="text-lg font-semibold mt-2">Channel Name</h4>
        <p className="mt-2">
          This is a sample description for the video. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
        </p>
      </div>
      <div className="mt-6">
        {/* Dummy Comments Section */}
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchVideo;
