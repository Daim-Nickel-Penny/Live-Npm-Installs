import "./SkyVideo.css";

import SkyImage from "../../assets/sky.png";
import SkyVideo from "../../assets/sky.mp4";

const SkyVideoComponent: React.FC = () => {
  return (
    <div className="sky-video-container">
      <video className="sky-video" autoPlay muted loop preload="auto">
        <source src={SkyVideo} type="video/mp4" />
        <img
          src={SkyImage}
          alt="Fallback Sky"
          className="sky-fallback"
          loading="eager"
        />
      </video>
    </div>
  );
};

export default SkyVideoComponent;
