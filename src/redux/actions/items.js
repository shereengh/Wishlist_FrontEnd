import { FETCH_ITEMS, FETCH_OTHERS_ITEMS } from "./actionTypes";

import instance from "./instance";

export const fetchItems = () => {
  return async dispatch => {
    try {
      const response = await instance.get("app/items/");
      const items = response.data;
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      });
    } catch (error) {
      console.log("fetch items error");
      console.error(error);
    }
  };
};

export const fetchOthersItems = uuid => {
  return async dispatch => {
    try {
      const response = await instance.get(`app/items/${uuid}/`);
      const items = response.data;
      dispatch({
        type: FETCH_OTHERS_ITEMS,
        payload: items
      });
    } catch (error) {
      console.log("fetch items error");
      console.error(error);
    }
  };
};
