import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TASK,
} from "../actions/ActionTypes";
const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case FETCH_TASK:
      return action.payload;
    case DELETE_TODO:
      return state.filter((task) => task.ID !== action.payload);
    case UPDATE_TODO:
      const updatedBooks = [];
      const data = action.payload;
      state.map((book) => {
        if (book.ID === data.ID) {
          book.ID = data.ID;
          book.title = data.title;
          book.description = data.description;
        }
        updatedBooks.push(book);
      });
      return updatedBooks;
    default:
      return state;
  }
};

export default taskReducer;
