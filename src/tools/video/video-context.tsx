import { createContext, createRef, ReactNode, useState } from "react";

export const VideoContext =
  createContext<React.RefObject<HTMLVideoElement> | null>(null);

const videoRef = createRef<HTMLVideoElement>();

export const VideoContextProvider = ({ children }: { children: ReactNode }) => {
  const [refs, setRefs] = useState([]);

  return (
    <VideoContext.Provider value={videoRef}>{children}</VideoContext.Provider>
  );
};
0;
