import { FETCH_ITEMS, FILTER_ITEMS } from "./actionTypes";

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

export const filterItems = query => {
  return {
    type: FILTER_ITEMS,
    payload: query
  };
};
