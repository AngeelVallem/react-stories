import { useRef } from "react";
import styles from "./video.module.css";

interface SourceProps {
  source: string;
}

export default function Source({ source }: SourceProps) {
  const ref: React.LegacyRef<HTMLVideoElement> | undefined = useRef(null);

  return (
    <video ref={ref} className={styles.video}>
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
