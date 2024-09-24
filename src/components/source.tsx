import styles from "./video.module.css";

interface SourceProps {
  source: string;
  id: number;
}

export default function Source({ source, id }: SourceProps) {
  return (
    <>
      <video className={styles.video} autoPlay muted id={String(id)}>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
