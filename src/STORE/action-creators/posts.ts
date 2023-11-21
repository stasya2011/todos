import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export const fetchData = () => async (dispatch: Dispatch<AnyAction>) => {
  const data = await fetch("url");
  const res = await data.json();

  dispatch({
    type: "FETCH_DATA",
    payload: res,
  });
};
