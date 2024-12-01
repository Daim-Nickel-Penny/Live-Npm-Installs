import "./InstallCount.css";
import verified from "../../assets/Twitter_Verified_Badge_Gold.svg.png";
import { useEffect, useState } from "react";

interface InstallCountProps {
  installCount?: number;
}

export default function InstallCount({ installCount }: InstallCountProps) {
  const [currentCount, setCurrentCount] = useState(10000);

  useEffect(() => {
    if (installCount) {
      //subtract and get any value less than 500
      let start = Math.max(installCount - 156, 956, 157, 956);
      const end = installCount;
      const duration = 2000;
      const increment = (end - start) / (duration / 10);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setCurrentCount(end);
        } else {
          setCurrentCount(Math.round(start));
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [installCount]);

  return (
    <div
      className="install-count"
      title="Verified Installed Count by NPM's Official API"
    >
      <h1
        className="install-count-text"
        onClick={() =>
          window.open(
            "https://github.com/Daim-Nickel-Penny/Live-Npm-Installs?tab=readme-ov-file#accuracy-of-data",
            "_blank"
          )
        }
      >
        {currentCount.toLocaleString()}
        <img
          src={verified}
          alt="verified"
          className="verified-icon"
          title="Verified Installed Count by NPM's Official API"
        />
      </h1>
      <h6 className="install-count-sub-text">
        Live Installs for{" "}
        <span
          className="author-name"
          onClick={() =>
            window.open("https://www.npmjs.com/~daimkhan", "_blank")
          }
        >
          Daim's
        </span>{" "}
        Packages
      </h6>
    </div>
  );
}
