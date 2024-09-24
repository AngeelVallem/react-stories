import { memo, useEffect, useState } from "react";
import styles from "./video.module.css";
import { useStoriesState } from "../store/useStoriesState";

function TimeElapsed() {
  const [percent, setPercent] = useState(0);
  const { steps, currentStep, stories } = useStoriesState();
  const arr = Array.from(Array(steps), (_, x) => x);

  // useEffect(() => {
  //   console.log(videoPlaying);
  //   if (videoPlaying instanceof HTMLVideoElement) {
  //     const handleTimeUpdate = () => {
  //       console.log("hello");
  //       const currentTime = videoPlaying.currentTime;
  //       const duration = videoPlaying.duration;
  //       const percentPlayed = (currentTime / duration) * 100;
  //       setPercent(percentPlayed);
  //     };

  //     videoPlaying.addEventListener("timeupdate", handleTimeUpdate);

  //     return () => {
  //       videoPlaying.removeEventListener("timeupdate", handleTimeUpdate);
  //     };
  //   }
  // }, [videoPlaying]);

  const sizeLen = stories[currentStep - 1].id > currentStep - 1;

  console.log(sizeLen);
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
              width: `${key < currentStep - 1 ? 100 : percent}%`,
              height: "100%",
              backgroundColor: "#ffffffeb",
            }}
          />
        </div>
      ))}

      {/* <Controls /> */}
    </div>
  );
}

export default memo(TimeElapsed);
