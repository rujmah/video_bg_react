import { MdRefresh, MdTitle } from "react-icons/md";
import {
  SiYoutube,
  SiYoutubestudio,
  SiGithub,
  SiGooglemaps
} from "react-icons/si";

const VideoSelector = ({ currentVideo, setCounter, counter }) => {
  return (
    <div id="video-selector">
      <h1>
        Virtual Outandabout{" "}
        <a href="https://github.com/rujmah/video_bg_react">
          <SiGithub className="icons" />
        </a>
      </h1>

      <div className="video-info video-title">
        <div className="video-icon-container">
          <MdTitle className="icon-info" />
        </div>
        <div className="video-text">{currentVideo.title}</div>
      </div>
      <div className="video-info video-location">
        <div className="video-icon-container">
          <SiGooglemaps className="icon-info" />
        </div>
        {currentVideo.location}
      </div>
      <div className="video-meta video-origin">
        <div className="video-icon-container">
          <SiYoutube className="icon-meta" />{" "}
        </div>
        <div className="video-text">
          <a href={currentVideo.url}>Original Video</a>
        </div>
      </div>
      <div className="video-meta video-creator">
        <div className="video-icon-container">
          <SiYoutubestudio className="icon-meta" />
        </div>
        <div className="video-text">{currentVideo.creator}</div>
      </div>

      <div className="video-meta video-random">
        <div className="video-icon-container">
          <MdRefresh className="icons refresh-icon" />{" "}
        </div>

        <button
          onClick={() => setCounter(counter + 1)}
          type="button"
          className="select-random"
        >
          Select Random Walkabout
        </button>
      </div>
    </div>
  );
};

export default VideoSelector;
