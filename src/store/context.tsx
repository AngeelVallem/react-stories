import { createContext, Dispatch, useReducer } from "react";
import type { StoryType } from "../types";

enum Actions {
  TOGGLE_MUTE = "TOGGLE_MUTE",
}

interface ToggleMuteAction {
  type: Actions.TOGGLE_MUTE;
  payload: { mute: boolean };
}

interface IStoriesState {
  stories: Array<string>;
  steps: number;
  muted: boolean;
}

type StoriesActions = ToggleMuteAction;

interface IStoriesContext {
  state: IStoriesState;
  dispatch: Dispatch<StoriesActions>;
}

export const StoriesContext = createContext<IStoriesContext>({
  state: {
    stories: [],
    steps: 0,
    muted: false,
  },
  dispatch: () => null,
});

function reducer(state: IStoriesState, action: StoriesActions): IStoriesState {
  switch (action.type) {
    case Actions.TOGGLE_MUTE:
      return {
        ...state,
        muted: !state.muted,
      };
    default:
      return state;
  }
}

interface StoriesProviderProps {
  children: React.ReactNode;
  stories: StoryType;
}

export function StoriesPovider({ children, stories }: StoriesProviderProps) {
  const [storiesState, dispatch] = useReducer(reducer, {
    stories: stories,
    steps: stories.length,
    muted: true,
  });

  return (
    <StoriesContext.Provider
      value={{
        state: storiesState,
        dispatch,
      }}
    >
      {children}
    </StoriesContext.Provider>
  );
}
