import { memo, useState } from "react";
import styles from "./video.module.css";
import Controls from "./controls";
import { useStoriesState } from "../store/useStoriesState";

function TimeElapsed() {
  const [percent, setPercent] = useState(0);
  const { steps } = useStoriesState();

  const arr = Array.from(Array(steps), (_, x) => x);

  return (
    <div className={styles.video_time_wrapper}>
      {arr.map((_, key) => (
        <div
          className={styles.video_time_line}
          key={key}
          style={{ width: 100 / steps + "%" }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              backgroundColor: "#ffffffeb",
            }}
          />
        </div>
      ))}

      <Controls />
    </div>
  );
}

export default memo(TimeElapsed);
