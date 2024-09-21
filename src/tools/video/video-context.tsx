import { createContext, createRef, ReactNode } from "react";

export const VideoContext =
  createContext<React.RefObject<HTMLVideoElement> | null>(null);

const videoRef = createRef<HTMLVideoElement>();

export const VideoContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <VideoContext.Provider value={videoRef}>{children}</VideoContext.Provider>
  );
};
