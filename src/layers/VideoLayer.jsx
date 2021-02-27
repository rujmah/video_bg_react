import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { SiYoutube, SiYoutubestudio, SiGooglemaps } from 'react-icons/si';
import { MdDirectionsBike } from 'react-icons/md';
import { videoData } from '../data';

const VideoLayer = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <div className="container">
      <ReactPlayer id="video-layer" url={currentVideo.url} />

      <div id="video-selector">
        <div className="video-meta video-title">{currentVideo.title}</div>
        <div className="video-meta video-location">
          <SiGooglemaps className="icons" /> {currentVideo.location}
        </div>
        <div className="video-meta video-transport">
          <MdDirectionsBike className="icons" /> {currentVideo.transport}
        </div>
        <div className="video-meta video-origin">
          <SiYoutube className="icons" />{' '}
          <a href={currentVideo.url}>Original Video</a>
        </div>
        <div className="video-meta video-creator">
          <SiYoutubestudio className="icons" /> {currentVideo.creator}
        </div>
      </div>
    </div>
  );
};

export default VideoLayer;
