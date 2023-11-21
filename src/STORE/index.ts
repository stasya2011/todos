import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { todosReducer } from "./reducers/todos";
import ReduxThunk from "redux-thunk";
import { postsReducer } from "./reducers/posts";

const rootReducer = combineReducers({ todosReducer, posts: postsReducer });
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__())
  )
);
