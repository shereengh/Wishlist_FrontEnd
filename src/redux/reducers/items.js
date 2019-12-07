import {
  FETCH_ITEMS,
  FETCH_OTHERS_ITEMS,
  DELETE_ITEM,
  ADD_ITEM
} from "../actions/actionTypes";

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
    case DELETE_ITEM:
      let newItems = state.items.filter(item => item !== action.payload);
      return {
        ...state,
        items: [...newItems]
      };
    case ADD_ITEM:
      const newItem = action.payload;
      return {
        ...state,
        items: [newItem, ...state.items],
        loading: false
      };
    default:
      return state;
  }
};
