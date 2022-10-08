import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteTask, updateTodo } from "../redux/actions/todoActions.js";

function Item({ tasks }) {
  const [visibility, setVisibility] = useState(false);
  const [editTodo, setNewEditTodo] = useState({
    ID: "",
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTodo(editTodo));
    setVisibility(false);
  };

  return tasks.map((task) => (
    <div className="my-3" key={task.ID}>
      <table className="table table-bordered text-white tables-main">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Description</th>
            <th colspan="2" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{task.ID}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            {/* <td>Delete</td>
            <td>Edit</td> */}

            <td>
              {/* start */}
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  setNewEditTodo(task);
                  setVisibility(true);
                }}
              >
                {" "}
                Edit
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-dark " id="exampleModalLabel">
                        Edit Todo
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div>
                      <form onSubmit={handleUpdate}>
                        <div class="modal-body text-dark">
                          <input
                            className="inp p-2 mt-2"
                            type="text"
                            value={editTodo.title}
                            onChange={(e) =>
                              setNewEditTodo({
                                ...editTodo,
                                title: e.target.value,
                              })
                            }
                          />

                          <input
                            type="text"
                            className="inp p-2 mt-2"
                            value={editTodo.description}
                            onChange={(e) =>
                              setNewEditTodo({
                                ...editTodo,
                                description: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={handleUpdate}
                          >
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* End */}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteTask(task.ID))}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
}

export default Item;
