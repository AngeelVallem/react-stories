import { useContext } from "react";
import { VideoContext } from "./video-context";

const useVideoContext = () => useContext(VideoContext);

export default useVideoContext;
