import Story from "./story";

import styles from "./video.module.css";
import { StoriesPovider } from "../store/context";
import { VideoContextProvider } from "../tools/video/video-context";

interface IHistoriesProps {
  stories: Array<string>;
}

function Stories({ stories }: IHistoriesProps) {
  return (
    <StoriesPovider stories={stories}>
      <div className={styles.story_wrapper}>
        {stories.map((url: string, index: number) => (
          <VideoContextProvider>
            <Story videoUrl={url} step={index} />
          </VideoContextProvider>
        ))}
      </div>
    </StoriesPovider>
  );
}

export default Stories;
