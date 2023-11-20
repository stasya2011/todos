import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import ReduxThunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__())
  )
);
