import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { videoData } from '../data';

const VideoLayer = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <div className="container">
      <div id="videoLayer">
        <ReactPlayer url={currentVideo.url} />
      </div>

      <div id="videoSelector">
        <div className="video-meta video-title">{currentVideo.title}</div>
        <div className="video-meta video-location">{currentVideo.location}</div>
        <div className="video-meta video-transport">
          {currentVideo.transport}
        </div>
      </div>
    </div>
  );
};

export default VideoLayer;
