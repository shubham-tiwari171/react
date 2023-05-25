import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FETCH_TODO,
} from "../actions/Constants";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    // Add other cases for different action types if needed
    default:
      return state;
  }
};

export default todoReducer;
