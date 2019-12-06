import { FETCH_ITEMS, FILTER_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
  filteredItems: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
        loading: false
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filteredItems: state.items.filter(item => {
          return `${item.name}`
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        })
      };
    default:
      return state;
  }
};
