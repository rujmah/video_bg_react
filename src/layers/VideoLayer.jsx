import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { MdRefresh, MdTitle } from 'react-icons/md';
import {
  SiYoutube,
  SiYoutubestudio,
  SiGithub,
  SiGooglemaps,
} from 'react-icons/si';
import { videoData } from '../data';

const VideoLayer = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(videoData[currentIdx]);
  const [playedIdx, setPlayedIdx] = useState([currentIdx]);

  const handleRandom = () => {
    let rand = currentIdx;
    if (playedIdx.length >= videoData.length) setPlayedIdx([rand]);
    let c = 0;
    while (playedIdx.includes(rand)) {
      rand = Math.floor(Math.random() * videoData.length);
      c += 1;
      console.log(`count ${c}`);
      if (c === playedIdx.length) {
        setPlayedIdx([]);
        break;
      }
    }
    console.log(rand);
    setCurrentVideo(videoData[rand]);
    setCurrentIdx(rand);
    setPlayedIdx([...playedIdx, rand]);
  };

  return (
    <div className="container">
      <ReactPlayer
        id="video-layer"
        playing
        config={{
          youtube: {
            playerVars: { mute: 1, autoplay: 1 },
          },
        }}
        url={currentVideo.url}
      />

      <div className="no-interact-layer" />

      <div id="video-selector">
        <h1>
          Virtual Outandabout{' '}
          <a href="https://github.com/rujmah/video_bg_react">
            <SiGithub className="icons" />
          </a>
        </h1>
        <div className="video-meta video-title">
          <MdTitle className="icons" /> {currentVideo.title}
        </div>
        <div className="video-meta video-location">
          <SiGooglemaps className="icons" /> {currentVideo.location}
        </div>

        <hr />
        <h3>Video Meta</h3>
        <div className="video-meta video-origin">
          <SiYoutube className="icons" />{' '}
          <a href={currentVideo.url}>Original Video</a>
        </div>
        <div className="video-meta video-creator">
          <SiYoutubestudio className="icons" /> {currentVideo.creator}
        </div>

        <div className="video-meta video-random">
          <button
            onClick={() => handleRandom()}
            type="button"
            className="select-random"
          >
            <MdRefresh className="icons refresh-icon" /> Select Random Walkabout
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLayer;
