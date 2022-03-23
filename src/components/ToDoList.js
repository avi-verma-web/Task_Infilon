import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions";
import DisplayResult from "./DisplayResult";
const ToDoList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [u, setu] = useState("");
  const [sResult, setsResult] = useState([]);
  const [isS, setisS] = useState(false);
  const [desc, setdesc] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
    setisS(false);
    setdesc(false);
  }, [dispatch]);

  const handleSearch = () => {
    setsResult(
      users.filter((e) => {
        return e.title.toLowerCase() === u.toLowerCase() || e.id === Number(u);
      })
    );
    setisS(true);
  };

  const handleDesc = () => {
    setdesc(true);
  };

  const handleAsc = () => {
    setdesc(false);
  };
  return (
    <div className="toDOListMainDIv">
      <form className="form-inline">
        <div className="form-group m-3">
          <input
            type="text"
            className="form-control-plaintext"
            id="staticEmail2"
            placeholder="Search User"
            onChange={(e) => setu(e.target.value)}
            required
          ></input>
        </div>

        <button
          type="button"
          className="btn btn-primary mb-2 m-2"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          type="button"
          className="btn btn-primary mb-2 m-2"
          onClick={handleAsc}
        >
          ASC
        </button>
        <button
          type="button"
          className="btn btn-primary mb-2 m-2"
          onClick={handleDesc}
        >
          DESC
        </button>
      </form>
      {isS ? (
        <DisplayResult users={sResult}></DisplayResult>
      ) : desc ? (
        <DisplayResult
          users={users.sort((a, b) => (a.id > b.id ? -1 : 1))}
        ></DisplayResult>
      ) : (
        <DisplayResult
          users={users.sort((a, b) => (a.id > b.id ? 1 : -1))}
        ></DisplayResult>
      )}
    </div>
  );
};

export default ToDoList;
