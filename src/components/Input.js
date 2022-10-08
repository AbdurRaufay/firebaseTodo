import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTask } from "../redux/actions/todoActions.js";
function Input() {
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ID,
      title,
      description,
    };

    dispatch(postTask(data));
    setID("");
    setDesc("");
    setTitle("");
  };
  return (
    <div className="container main">
      <div className="row">
        <form className="form-group container my-3" onSubmit={handleSubmit}>
          <div className="col-md-8 col-sm-6 col-sx-3">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setID(e.target.value)}
              value={ID}
            />
          </div>

          <div className="col-md-8 col-sm-6 ">
            <label>Task Title</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="col-md-8 col-sm-6 col-sx-3">
            <label>Task Description</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setDesc(e.target.value)}
              value={description}
            />
          </div>

          <div className="col-md-6  col-sm-4 mt-4">
            <button type="submit" className="btn btn-success   submit-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
