import { FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isLoading: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        characters: action.payload
      };

    default:
      return state;
  }
};
