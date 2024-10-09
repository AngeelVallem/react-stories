import { useCallback, useEffect } from "react";
import useVideoContext from "../tools/video/use-video-context";
import styles from "./video.module.css";
import useDispatch from "../store/useDispatch";

interface SourceProps {
  source: string;
  id: number;
}

export default function Source({ source, id }: SourceProps) {
  const { storeRef, refs } = useVideoContext();
  const refCallback = useCallback(
    (ref: HTMLVideoElement | null) => storeRef(id, ref),
    [storeRef, id]
  );
  const { updateStep } = useDispatch();

  const video: HTMLVideoElement = refs.get(id);

  // useEffect(() => {
  //   if (video) {
  //     video.add;
  //   }
  // }, [video]);

  return (
    <>
      <video
        className={styles.video}
        autoPlay
        muted
        id={String(id)}
        ref={refCallback}
        onEnded={() => updateStep("next")}
      >
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
