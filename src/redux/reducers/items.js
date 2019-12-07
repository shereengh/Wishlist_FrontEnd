import { FETCH_ITEMS, FETCH_OTHERS_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case FETCH_OTHERS_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
