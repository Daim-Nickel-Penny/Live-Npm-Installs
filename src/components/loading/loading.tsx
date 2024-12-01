import { useState, useEffect } from "react";
import "./loading.css";

export default function Loading() {
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
  const loadingTextArray = ["📂Loading Assets...", "🌌Preparing Universe..."];

  useEffect(() => {
    const intervalTime = 2000;

    if (loadingTextIndex < loadingTextArray.length - 1) {
      const interval = setInterval(() => {
        setLoadingTextIndex((prevIndex) => {
          if (prevIndex < loadingTextArray.length - 1) {
            return prevIndex + 1;
          }
          return prevIndex;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [loadingTextIndex, loadingTextArray.length]);

  return (
    <div className={"loading"}>
      <div className={"loading-text"}>{loadingTextArray[loadingTextIndex]}</div>
    </div>
  );
}
