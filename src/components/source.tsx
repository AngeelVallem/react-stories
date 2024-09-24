import { useEffect, useRef } from "react";
import styles from "./video.module.css";
import useVideoContext from "../tools/video/use-video-context";

interface SourceProps {
  source: string;
}

export default function Source({ source }: SourceProps) {
  // const ref: React.LegacyRef<HTMLVideoElement> | undefined = useRef(null);

  const ref = useVideoContext();

  return (
    <>
      <video ref={ref} className={styles.video} autoPlay>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        style={{
          zIndex: 1000,
          position: "absolute",
          top: "0px",
        }}
        onClick={() => {
          console.log(ref?.current);

          ref?.current?.play();
        }}
      >
        ref
      </button>
    </>
  );
}
