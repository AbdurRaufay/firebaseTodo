import { useDispatch, useSelector } from "react-redux";
import Input from "./components/Input";
import Item from "./components/Item";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "@firebase/firestore";
import { fs } from "./config.js";
import { FETCH_TASK } from "./redux/actions/ActionTypes";
import { useEffect } from "react";
import { getItems } from "./redux/actions/todoActions";
function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // const getItems = async () => {
  //   const q = query(collection(fs, "firebase-todo"));
  //   const tasks = await getDocs(q);
  //   if (tasks.docs.length > 0) {
  //     const tasksArray = [];
  //     for (var i of tasks.docs) {
  //       const data = i.data();
  //       tasksArray.push(data);
  //     }
  //     dispatch({
  //       type: FETCH_TASK,
  //       payload: tasksArray,
  //     });
  //   }
  // };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h4 className="head">Todo React + Redux + Firebase</h4>
      <div className="container m-auto ">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Input />
            {tasks.length > 0 ? (
              <Item tasks={tasks} />
            ) : (
              <h2>No items found!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
