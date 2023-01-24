import { createContext, useReducer } from "react";
import { Actions, initialState, reducer } from "./reducer";

export const StateContext = createContext({
  state: initialState,
  dispatch: (action: Actions) => {},
});

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
