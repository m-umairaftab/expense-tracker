import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// initial state...
const initialState = {
  transctions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context...
export const GlobalContext = createContext(initialState);

// provider component...
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action...
  function deleteTransction(id) {
    dispatch({
      type: "DELETE_TRANSCTION",
      payload: id,
    });
  }

  function addTransction(transction) {
    dispatch({
      type: "ADD_TRANSCTION",
      payload: transction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transctions: state?.transctions,
        deleteTransction,
        addTransction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
