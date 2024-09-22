import { memo, useEffect, useState } from "react";
import styles from "./video.module.css";
import Controls from "./controls";

function TimeElapsed() {
  const [percent, setPercent] = useState(0);
  // const { steps } = useStoriesState();
  // const arr = Array.from(Array(steps), (_, x) => x);

  // useEffect(() => {

  //   if (video) {
  //     const updateTime = () => {
  //       setPercent((video.currentTime / video.duration) * 100);
  //     };

  //     video.addEventListener("timeupdate", updateTime);

  //     return () => {
  //       video.removeEventListener("timeupdate", updateTime);
  //     };
  //   }
  // }, [getVideo]);

  return (
    <div className={styles.video_time_wrapper}>
      <div className={styles.video_time_line}>
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#ffffffeb",
          }}
        />
      </div>

      <Controls />
    </div>
  );
}

export default memo(TimeElapsed);
