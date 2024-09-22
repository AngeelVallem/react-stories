import { memo, ReactNode, useCallback, useRef } from "react";
import styles from "./video.module.css";
import TimeElapsed from "./time-elapsed";
import Controls from "./controls";
import useVideoContext from "../tools/video/use-video-context";

interface IHistoryProps {
  children?: ReactNode;
}

function Story({ children }: IHistoryProps) {
  return <div className={styles.video_container}>{children}</div>;
}

export default memo(Story);
