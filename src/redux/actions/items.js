import {
  FETCH_ITEMS,
  FETCH_OTHERS_ITEMS,
  DELETE_ITEM,
  ADD_ITEM
} from "./actionTypes";

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

export const deleteItem = id => {
  return async dispatch => {
    try {
      const response = await instance.delete(`app/items/${id}/delete/`);
      const item = response.data;
      dispatch({
        type: DELETE_ITEM,
        payload: item
      });
    } catch (error) {
      console.log("delete item error");
      console.error(error);
    }
  };
};

export const addItem = (item, history) => {
  return async dispatch => {
    try {
      console.log(item);
      const res = await instance.post("app/add/", item);
      const newItem = res.data;
      history.replace("/items");
      dispatch({
        type: ADD_ITEM,
        payload: newItem
      });
    } catch (error) {
      console.log("add item error");
      console.error(error);
    }
  };
};
