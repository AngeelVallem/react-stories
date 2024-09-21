import { useCallback, useRef } from "react";
import styles from "./video.module.css";
import TimeElapsed from "./time-elapsed";
import Controls from "./controls";

interface IHistoryProps {
  videoUrl: string;
}

function Story({ videoUrl }: IHistoryProps) {
  const ref: React.LegacyRef<HTMLVideoElement> | undefined = useRef(null);

  const getVideo = useCallback(() => {
    return ref.current;
  }, [ref]);

  return (
    <>
      <div className={styles.video_container}>
        <div className={styles.video_time_wrapper}>
          <TimeElapsed getVideo={getVideo} />
          <Controls getVideo={getVideo} />
        </div>

        <video ref={ref} className={styles.video}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Story;
