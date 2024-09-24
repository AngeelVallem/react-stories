import { createContext, Dispatch, useReducer } from "react";
import type { StoryType } from "../types";

export enum Actions {
  TOGGLE_MUTE = "TOGGLE_MUTE",

  NEXT_STEP = "NEXT_STEP",
  PREV_STEP = "PREV_STEP",
}

interface ToggleMuteAction {
  type: Actions.TOGGLE_MUTE;
}

interface NextStepAction {
  type: Actions.NEXT_STEP;
}

interface PrevStepAction {
  type: Actions.PREV_STEP;
}

interface IStoriesState {
  stories: Array<string>;
  steps: number;
  currentStep: number;
  muted: boolean;
}

type StoriesActions = ToggleMuteAction | NextStepAction | PrevStepAction;

interface IStoriesContext {
  state: IStoriesState;
  dispatch: Dispatch<StoriesActions>;
}

export const StoriesContext = createContext<IStoriesContext>({
  state: {
    stories: [],
    steps: 0,
    currentStep: 0,
    muted: false,
  },
  dispatch: () => null,
});

const onNextStep = (steps: number, currentStep: number) => {
  if (currentStep < steps) {
    return currentStep + 1;
  }

  return currentStep;
};

const onPrevStep = (currentStep: number) => {
  if (currentStep > 1) {
    return currentStep - 1;
  }

  return currentStep;
};

function reducer(state: IStoriesState, action: StoriesActions): IStoriesState {
  switch (action.type) {
    case Actions.TOGGLE_MUTE:
      return {
        ...state,
        muted: !state.muted,
      };
    case Actions.NEXT_STEP:
      return {
        ...state,
        currentStep: onNextStep(state.steps, state.currentStep),
      };
    case Actions.PREV_STEP:
      return {
        ...state,
        currentStep: onPrevStep(state.currentStep),
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
    currentStep: 1,
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
