import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

import VideoSelector from "./VideoSelector";
import { videoData, shuffleVideos } from "../data";

const VideoLayer = () => {
  const videoArray = videoData;
  shuffleVideos(videoArray);
  const [currentVideo, setCurrentVideo] = useState(videoArray[0]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCurrentVideo(videoArray[counter]);
    if (counter >= 4) setCounter(0);
  }, [counter, videoArray]);

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>🎥🚶‍♂️🌴 Outandabout - {currentVideo.location}</title>
      </Helmet>
      <ReactPlayer
        id="video-layer"
        playing
        config={{
          youtube: {
            playerVars: { mute: 1, autoplay: 1, start: 30 }
          }
        }}
        url={currentVideo.url}
      />

      <div className="no-interact-layer" />

      <VideoSelector
        currentVideo={currentVideo}
        setCounter={setCounter}
        counter={counter}
      />
    </div>
  );
};

export default VideoLayer;
