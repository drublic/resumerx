type History = {
  option: string;
  timestamp: string;
  text: string;
};

export type Section = {
  id: string;
  title: string;
  history: History[];
  children?: Section[];
};

type SectionUpdateAction = {
  type: "section_update";
  payload: Section[];
};

type CurrentSectionUpdateAction = {
  type: "current_section_update";
  payload: {
    section: Section;
    child?: Section;
  };
};

type HistoryUpdateAction = {
  type: "history_update";
  payload: History & {
    sectionId: Section["id"];
    childId?: Section["id"];
  };
};

type MoodUpdateAction = {
  type: "mood_update";
  payload: string;
};

type InitAction = {
  type: "init";
  payload: State;
};

export type Actions =
  | CurrentSectionUpdateAction
  | SectionUpdateAction
  | HistoryUpdateAction
  | MoodUpdateAction
  | InitAction;

export type State = {
  sections: Section[];
  currentSection: {
    section?: Section;
    child?: Section;
  };
  mood?: string;
};

export const reducer = (state: typeof initialState, action: Actions) => {
  let futureState = { ...state };

  switch (action.type) {
    case "init": {
      futureState = action.payload;
      break;
    }

    case "section_update": {
      futureState.sections = action.payload;
      break;
    }

    case "current_section_update": {
      futureState.currentSection = action.payload;
      break;
    }

    case "history_update": {
      futureState.sections = futureState.sections.map((section) => {
        if (section.id === action.payload.sectionId) {
          if (action.payload.childId) {
            section.children = section.children.map((child) => {
              if (child.id === action.payload.childId) {
                child.history.push({
                  option: action.payload.option,
                  timestamp: action.payload.timestamp,
                  text: action.payload.text,
                });
              }

              return child;
            });
          } else {
            section.history.push({
              option: action.payload.option,
              timestamp: action.payload.timestamp,
              text: action.payload.text,
            });
          }
        }

        return section;
      });
      break;
    }

    case "mood_update": {
      futureState.mood = action.payload;
      break;
    }

    default:
      break;
  }

  try {
    localStorage.setItem("state", JSON.stringify(futureState));
  } catch (error) {
    console.error(`Couldn't store data in localStorage`, error);
  }

  return futureState;
};

export const initialState: State = {
  sections: [
    {
      id: "summary",
      title: "Summary",
      history: [],
      children: [],
    },
    {
      id: "work_experience",
      title: "Work Experience",
      history: [],
      children: [],
    },
  ],
  currentSection: {},
  mood: undefined,
};
