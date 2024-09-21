import { useContext } from "react";
import { StoriesContext } from "./context";

export function useStoriesState() {
  const context = useContext(StoriesContext);

  return context.state;
}
