import { useCallback, useContext } from "react";
import { VideoContext } from "./video-context"; // Ajusta la ruta

const useVideoContext = () => {
  const { setRefs, refs } = useContext(VideoContext);

  const storeRef = useCallback(
    (id: number, ref: HTMLVideoElement | null) => {
      if (ref) {
        setRefs((prevRefs) => {
          const newRefs = new Map(prevRefs);
          newRefs.set(id, ref);
          return newRefs;
        });
      } else {
        setRefs((prevRefs) => {
          const newRefs = new Map(prevRefs);
          newRefs.delete(id);
          return newRefs;
        });
      }
    },
    [setRefs]
  );

  return { storeRef, refs };
};

export default useVideoContext;
