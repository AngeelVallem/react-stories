import Story from "./story";

import styles from "./video.module.css";
import { StoriesPovider } from "../store/context";
import TimeElapsed from "./time-elapsed";
import { useMemo, useState } from "react";
import Source from "./source";

interface IHistoriesProps {
  stories: Array<string>;
}

function Stories({ stories }: IHistoriesProps) {
  const [step, setStep] = useState(0);

  const Sources = useMemo(() => {
    return stories.map((url, key) => <Source source={url} key={key} />);
  }, []);

  const onNextStep = () => {
    setStep((old) => old + 1);
  };
  const onPrevStep = () => {
    setStep((old) => old - 1);
  };

  const C = Sources[step];

  return (
    <StoriesPovider stories={stories}>
      <div className={styles.story_wrapper}>
        <button
          className={styles.video_control_action_btn}
          onClick={onPrevStep}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <Story>
          <TimeElapsed />4
        </Story>
        <button
          className={styles.video_control_action_btn}
          onClick={onNextStep}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </StoriesPovider>
  );
}

export default Stories;
