import { createContext, ReactNode, useState } from "react";
interface IVideoContext {
  refs: Map<any, any>;
  setRefs: React.Dispatch<React.SetStateAction<Map<any, any>>>;
}
export const VideoContext = createContext<IVideoContext>({
  refs: new Map(),
  setRefs: () => null,
});

export const VideoContextProvider = ({ children }: { children: ReactNode }) => {
  const [refs, setRefs] = useState(new Map());

  return (
    <VideoContext.Provider value={{ refs, setRefs }}>
      {children}
    </VideoContext.Provider>
  );
};
