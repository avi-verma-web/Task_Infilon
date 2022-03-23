import React, { useEffect, useState } from "react";
import axios from "axios";

const OneUser = ({ id }) => {
  const [oneUser, setOneUser] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        setOneUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Detail</h5>
        <p className="card-text">
          <b>TO DO ID</b> - {oneUser.id}
        </p>
        <p className="card-text">
          <b>TO DO NAME</b> - {oneUser.name}
        </p>
        <p className="card-text">
          <b>TO DO EMAIL</b> - {oneUser.email}
        </p>
        <p className="card-text">
          <b>TO DO PHONE</b> - {oneUser.phone}
        </p>
      </div>
    </div>
  );
};

export default OneUser;
