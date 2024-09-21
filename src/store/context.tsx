import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";

enum Actions {
  SAVE_STORIES = "SAVE_STORIES",
  SAVE_STEPS = "SAVE_STEPS",
  TOGGLE_MUTE = "TOGGLE_MUTE",
}

interface SaveVideosAction {
  type: Actions.SAVE_STORIES;
  payload: { videoUrl: string }; // ejemplo de un payload
}

interface ToggleMuteAction {
  type: Actions.TOGGLE_MUTE;
  payload: { mute: boolean };
}

interface SaveStepsAction {
  type: Actions.SAVE_STEPS;
  payload: { steps: number };
}

interface IStoriesState {
  stories: Array<string>;
  steps: number;
  muted: boolean;
}

type StoriesActions = SaveVideosAction | ToggleMuteAction | SaveStepsAction;

const initState: IStoriesState = {
  stories: [],
  steps: 0,
  muted: false,
};

interface IStoriesContext {
  state: IStoriesState;
  dispatch: Dispatch<StoriesActions>;
}

export const StoriesContext = createContext<IStoriesContext | undefined>(
  undefined
);

function reducer(state: IStoriesState, action: StoriesActions): IStoriesState {
  switch (action.type) {
    case Actions.SAVE_STORIES:
      return {
        ...state,
        stories: [...state.stories, action.payload.videoUrl],
      };
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
    children: React.ReactNode
    stories: StoriesType
}

export function StoriesPovider({ children, }: { children: React.ReactNode,}) {
  const [storiesState, dispatch] = useReducer(reducer, initState);

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

export function useStore() {
  



}


export function useStoriesState(){
    const context = useContext(StoriesContext);



    useEffect(() => {

    },[])


    return context?.state
}
