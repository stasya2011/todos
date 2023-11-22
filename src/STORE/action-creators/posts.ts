import { Dispatch } from "@reduxjs/toolkit";

interface IFetchDataAction {
  type: string;
  payload: any;
}

export const fetchData = () => async (dispatch: Dispatch<IFetchDataAction>) => {
  const data = await fetch("url");
  const res = await data.json();

  dispatch({
    type: "FETCH_DATA",
    payload: res,
  });
};
