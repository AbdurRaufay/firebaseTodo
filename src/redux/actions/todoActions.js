import { ADD_TODO, DELETE_TODO, FETCH_TASK, UPDATE_TODO } from "./ActionTypes";
import { fs } from "../../config";
import { addDoc, collection } from "@firebase/firestore";
import { query, getDocs, deleteDoc, doc, updateDoc } from "@firebase/firestore";

export const getItems = () => async (dispatch) => {
  const q = query(collection(fs, "firebase-todo"));
  const tasks = await getDocs(q);
  if (tasks.docs.length > 0) {
    const tasksArray = [];
    for (var i of tasks.docs) {
      const data = i.data();
      tasksArray.push(data);
    }
    dispatch({
      type: FETCH_TASK,
      payload: tasksArray,
    });
  }
};

export const postTask = (data) => async (dispatch) => {
  await addDoc(collection(fs, "firebase-todo"), {
    ID: data.ID,
    title: data.title,
    description: data.description,
  });
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

export const deleteTask = (ID) => async (dispatch) => {
  const q = query(collection(fs, "firebase-todo"));
  const tasks = await getDocs(q);
  for (var i of tasks.docs) {
    const data = i.data();
    if (data.ID === ID) {
      await deleteDoc(doc(fs, "firebase-todo", i.id));
    }
  }
  dispatch({
    type: DELETE_TODO,
    payload: ID,
  });
};

export const updateTodo = (editedBook) => async (dispatch) => {
  const q = query(collection(fs, "firebase-todo"));
  const books = await getDocs(q);
  for (var snap of books.docs) {
    const data = snap.data();
    if (data.ID === editedBook.previousIsbn) {
      const bookRef = doc(fs, "firebase-todo", snap.id);
      await updateDoc(bookRef, {
        ID: editedBook.ID,
        title: editedBook.title,
        description: editedBook.description,
      });
    }
  }
  dispatch({
    type: UPDATE_TODO,
    payload: editedBook,
  });
};
