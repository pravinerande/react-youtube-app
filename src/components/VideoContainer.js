import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    // API Call to get Videos

    const apiResponse = await fetch(YOUTUBE_VIDEOS_API);

    const jsonResponse = await apiResponse.json();

    console.log(jsonResponse);
    setVideos(jsonResponse.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
