import { ReactNode } from "react";
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
          source={stories[currentStep - 1].source}
          key={currentStep - 1}
          id={currentStep}
        />
      </VideoContextProvider>
    </div>
  );
}

export default Story;
