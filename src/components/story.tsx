import { memo, ReactNode, useMemo } from "react";
import styles from "./video.module.css";
import { useStoriesState } from "../store/useStoriesState";
import { VideoContextProvider } from "../tools/video/video-context";
import Source from "./source";

interface IHistoryProps {
  children?: ReactNode;
}

function Story({ children }: IHistoryProps) {
  const { stories, currentStep } = useStoriesState();

  return (
    <div className={styles.video_container}>
      {children}

      <VideoContextProvider>
        <Source
          source={stories[currentStep - 1]}
          key={stories[currentStep - 1]}
        />
      </VideoContextProvider>
    </div>
  );
}

export default Story;
