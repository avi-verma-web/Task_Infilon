import {
  FETCH_USERS,
  FETCH_ERROR,
  DELETE_TODO,
  UPDATE_TODO,
} from "./actionTypes";
import axios from "axios";

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const data = res.data;
        dispatch({
          type: FETCH_USERS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};

export const deleteToDo = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };
};

export const updateToDo = (updateToDoPayload) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: updateToDoPayload,
    });
  };
};
