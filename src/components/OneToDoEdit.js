import React, { useState } from "react";
import { updateToDo } from "../redux/actions";
import { useDispatch } from "react-redux";


const OneToEdit = ({ id }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onUpdateToDo = (e, id) => {
    e.preventDefault();
    const toDoDetails = {};
    const updateToDoPayload = Object.assign(toDoDetails, {
      id: id,
      title: title,
    });
    dispatch(updateToDo(updateToDoPayload));
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ToDo Detail {id}</h5>
        <form onSubmit={(e) => onUpdateToDo(e, id)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-warning" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default OneToEdit;
