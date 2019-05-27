import { useReducer } from "react";

const initialState = {
  dictionary: null
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_DICTIONARY":
      return { ...state, dictionary: action.payload };
    default:
      return state;
  }
}

const dictionaryReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default dictionaryReducer;
