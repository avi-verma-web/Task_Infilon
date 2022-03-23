import React, { useState } from "react";
import "./DisplayResult.css";
import OneUser from "./OneUser";
import OneToEdit from "./OneToDoEdit";
import { deleteToDo } from "../redux/actions";
import { useDispatch } from "react-redux";

const DisplayResult = ({ users }) => {
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const [eid, setEid] = useState("");

  return (
    <div className="displayResultDiv">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">TODO ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e) => (
            <tr key={e.id}>
              <th scope="row">{e.id}</th>
              <td>{e.title}</td>
              <td>{e.completed ? "COMPLETED" : "INCOMPLETE"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-success mb-2 m-2"
                  onClick={() => setid(e.id)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary mb-2 m-2"
                  onClick={() => setEid(e.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger mb-2 m-2"
                  onClick={() => dispatch(deleteToDo(e.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {id ? <OneUser id={id}></OneUser> : null}
      {eid ? <OneToEdit id={eid}></OneToEdit> : null}
    </div>
  );
};

export default DisplayResult;
