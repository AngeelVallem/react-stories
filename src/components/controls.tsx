import { useEffect, useState } from "react";

import styles from "./video.module.css";
import useVideoContext from "../tools/video/use-video-context";
import { useStoriesState } from "../store/useStoriesState";

function Controls() {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentStep } = useStoriesState();
  const { refs } = useVideoContext();
  const [isVideoReady, setIsVideoReady] = useState(false);
  const video = refs.get(currentStep);

  useEffect(() => {
    if (video) {
      video.addEventListener("loadedmetadata", () => {
        if (video) {
          setIsVideoReady(true);
        }
      });

      video.addEventListener("play", () => setIsPlaying(true));
      video.addEventListener("pause", () => setIsPlaying(false));
    }
  }, [video]);

  if (!isVideoReady || !video) {
    return null;
  }

  const onPlay = () => {
    video.play();
  };

  const onPause = () => {
    video.pause();
  };

  const togglePlaying = () => {
    if (isPlaying) {
      onPause();
      return;
    }

    onPlay();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        gap: 5,
        marginTop: 5,
      }}
    >
      <button
        type="button"
        className={styles.video_control_action_btn}
        onClick={togglePlaying}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={styles.icon}
          >
            <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={styles.icon}
          >
            <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Controls;
