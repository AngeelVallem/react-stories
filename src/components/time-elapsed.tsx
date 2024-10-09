import { memo, useEffect, useState } from "react";
import styles from "./video.module.css";
import { useStoriesState } from "../store/useStoriesState";
import useVideoContext from "../tools/video/use-video-context";
import Controls from "./controls";

function TimeElapsed() {
  const [percent, setPercent] = useState(0);
  const { steps, currentStep, stories } = useStoriesState();
  const arr = Array.from(Array(steps), (_, x) => x);
  const sizeLen = stories[currentStep - 1].id > currentStep - 1;
  const { refs } = useVideoContext();
  const currentVideo: HTMLVideoElement = refs.get(currentStep);

  useEffect(() => {
    if (currentVideo) {
      setPercent(0);

      const handleTimeUpdate = () => {
        const currentTime = currentVideo.currentTime;
        const duration = currentVideo.duration || 1; // Evitar división por cero
        const newPercent = (currentTime / duration) * 100;
        setPercent(newPercent);
      };

      currentVideo.addEventListener("timeupdate", handleTimeUpdate);

      // Limpieza del event listener
      return () => {
        currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentVideo]);

  const takePercent = (key: number, percent: number) => {
    const currentIndex = currentStep - 1;

    // ACTIVE
    if (key === currentIndex) {
      // console.log(key, percent);
      return `${percent}%`;
    }

    // DONE
    if (key < currentIndex) {
      return "100%";
    }

    // WAITING
    if (key > currentIndex) {
      return "0%";
    }

    return "0%";
  };

  return (
    <div className={styles.video_time_wrapper}>
      {arr.map((_, key) => (
        <div
          className={styles.video_time_line}
          key={key}
          style={{ width: 100 / steps + "%" }}
        >
          <div
            style={{
              width: takePercent(key, percent),
              height: "100%",
              backgroundColor: "#ffffffeb",
            }}
          />
        </div>
      ))}

      <Controls />
    </div>
  );
}

export default memo(TimeElapsed);
