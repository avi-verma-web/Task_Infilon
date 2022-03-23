import {
  FETCH_USERS,
  FETCH_ERROR,
  DELETE_TODO,
  UPDATE_TODO,
} from "./actionTypes";

const initialState = {
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload, error: "" };

    case FETCH_ERROR:
      return { ...state, users: [], error: action.payload };

    case DELETE_TODO:
      return {
        ...state,
        users: state.users.filter((toDo) => toDo.id !== action.payload),
        error: "",
      };

    case UPDATE_TODO:
      return {
        ...state,
        users: state.users.map((toDo) => {
          if (toDo.id === action.payload.id) {
            toDo.title = action.payload.title;
          }
          return toDo;
        }),
        error: "",
      };

    default:
      return state;
  }
};
