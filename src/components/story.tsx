import { memo, useCallback, useEffect, useRef } from "react";
import styles from "./video.module.css";
import TimeElapsed from "./time-elapsed";
import Controls from "./controls";
import useVideoContext from "../tools/video/use-video-context";

interface IHistoryProps {
  videoUrl: string;
  step: number;
}

function Story({ videoUrl, step }: IHistoryProps) {
  const ref = useVideoContext();

  console.log(step);

  return (
    <>
      <div className={styles.video_container}>
        <div className={styles.video_time_wrapper}>
          <Controls />
        </div>

        <video ref={ref} className={styles.video}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default memo(Story);
