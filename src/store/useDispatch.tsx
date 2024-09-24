import { useContext } from "react";
import { Actions, StoriesContext } from "./context";

export default function useDispatch() {
  const context = useContext(StoriesContext);

  const updateStep = (to: "next" | "prev") => {
    if (to === "next") {
      return context.dispatch({
        type: Actions.NEXT_STEP,
      });
    }

    return context.dispatch({
      type: Actions.PREV_STEP,
    });
  };

  const toggleMute = () => {
    return context.dispatch({
      type: Actions.TOGGLE_MUTE,
    });
  };

  return { updateStep, toggleMute };
}
