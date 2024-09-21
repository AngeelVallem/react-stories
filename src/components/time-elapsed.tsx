import { useEffect, useState } from "react";
import styles from "./video.module.css";

interface TimeElapsedProps {
  getVideo: () => HTMLVideoElement | null;
}

function TimeElapsed({ getVideo }: TimeElapsedProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const video = getVideo();
    if (video) {
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
    <div className={styles.video_time_line}>
      <div
        style={{
          width: `${percent}%`,
          height: "100%",
          backgroundColor: "#ffffffeb",
        }}
      />
    </div>
  );
}

export default TimeElapsed;
