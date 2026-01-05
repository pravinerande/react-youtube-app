const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="p-2 m-2 w-72 shadow-xl hover:scale-105 duration-300 text-left">
      <img
        className="rounded-lg"
        alt="video-thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <ul className="mt-2">
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>Views: {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
