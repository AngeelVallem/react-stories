import Story from "./story";

import styles from "./video.module.css";
import { StoriesPovider } from "../store/context";
import TimeElapsed from "./time-elapsed";
import { useMemo, useState } from "react";
import Source from "./source";
import { useStoriesState } from "../store/useStoriesState";
import useDispatch from "../store/useDispatch";

interface IHistoriesProps {
  stories: Array<string>;
}

function ButtonPrev() {
  const { updateStep } = useDispatch();

  const onNextStep = () => {
    updateStep("next");
  };
  const onPrevStep = () => {
    updateStep("prev");
  };

  return (
    <button className={styles.video_control_action_btn} onClick={onPrevStep}>
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
  );
}

function ButtonNext() {
  const { updateStep } = useDispatch();

  const onNextStep = () => {
    updateStep("next");
  };
  const onPrevStep = () => {
    updateStep("prev");
  };

  return (
    <button className={styles.video_control_action_btn} onClick={onNextStep}>
      {">"}
    </button>
  );
}

function Stories({ stories }: IHistoriesProps) {
  const [step, setStep] = useState(0);

  return (
    <StoriesPovider stories={stories}>
      <div className={styles.story_wrapper}>
        <ButtonPrev />
        <Story>
          <TimeElapsed />
          {/* {C} */}
        </Story>
        <ButtonNext />
        {/* <button
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
        </button> */}
      </div>
    </StoriesPovider>
  );
}

export default Stories;
