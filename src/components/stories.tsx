import Story from "./story";

import styles from "./video.module.css";
import { StoriesPovider } from "../store/context";

interface IHistoriesProps {
  stories: Array<string>;
}

function Stories({ stories }: IHistoriesProps) {
  return (
    <StoriesPovider>
      <div className={styles.story_wrapper}>
        {stories.map((url: string) => (
          <Story videoUrl={url} />
        ))}
      </div>
    </StoriesPovider>
  );
}

export default Stories;
