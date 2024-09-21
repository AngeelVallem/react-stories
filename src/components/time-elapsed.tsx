import { memo, useEffect, useState } from "react";
import styles from "./video.module.css";
import { useStoriesState } from "../store/useStoriesState";

interface TimeElapsedProps {
  getVideo: () => HTMLVideoElement | null;
  step: number;
}

function TimeElapsed({ getVideo, step }: TimeElapsedProps) {
  const [percent, setPercent] = useState(0);
  const { steps } = useStoriesState();
  const arr = Array.from(Array(steps), (_, x) => x);

  useEffect(() => {
    const video = getVideo();

    if (video) {
      console.log(video);
      const updateTime = () => {
        setPercent((video.currentTime / video.duration) * 100);
      };

      video.addEventListener("timeupdate", updateTime);

      return () => {
        video.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [getVideo]);

  return (
    <div
      style={{
        width: `${Math.round(100 / steps)}%`,
        display: "flex",
      }}
    >
      {arr.map((_, key) => (
        <div className={styles.video_time_line} key={key}>
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              backgroundColor: "#ffffffeb",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default memo(TimeElapsed);
