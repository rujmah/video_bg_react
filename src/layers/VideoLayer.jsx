import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';

import { MdRefresh, MdTitle } from 'react-icons/md';
import {
  SiYoutube,
  SiYoutubestudio,
  SiGithub,
  SiGooglemaps,
} from 'react-icons/si';

import { videoData, shuffleVideos } from '../data';

const VideoLayer = () => {
  const videoArray = videoData;
  shuffleVideos(videoArray);
  const [videoDataArray, setVideoDataArray] = useState(videoArray);
  const [currentVideo, setCurrentVideo] = useState(videoDataArray.shift());

  const handleRandom = () => {
    setCurrentVideo(videoDataArray.shift());
    if (videoDataArray.length === 0) {
      shuffleVideos(videoArray);
      setVideoDataArray(videoArray);
    }
    console.log(currentVideo);
    console.log(videoDataArray);
  };

  console.log(currentVideo);
  console.log(videoDataArray);
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Video Outandabout - {currentVideo.location}</title>
      </Helmet>
      <ReactPlayer
        id="video-layer"
        playing
        config={{
          youtube: {
            playerVars: { mute: 1, autoplay: 1, start: 30 },
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
        <div className="video-info video-title">
          <MdTitle className="icon-info" /> {currentVideo.title}
        </div>
        <div className="video-info video-location">
          <SiGooglemaps className="icon-info" /> {currentVideo.location}
        </div>

        <hr />
        <h3>Video Meta</h3>
        <div className="video-meta video-origin">
          <SiYoutube className="icon-meta" />{' '}
          <a href={currentVideo.url}>Original Video</a>
        </div>
        <div className="video-meta video-creator">
          <SiYoutubestudio className="icon-meta" /> {currentVideo.creator}
        </div>

        <div className="video-meta video-random">
          <MdRefresh className="icons refresh-icon" />{' '}
          <button
            onClick={() => handleRandom()}
            type="button"
            className="select-random"
          >
            Select Random Walkabout
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLayer;
