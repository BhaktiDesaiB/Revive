import { SHOW_ALL_POSTS, NOTIFICATION } from "../actions/types";

const initialState = {
  posts: [],
  notification: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };
    default:
      return state;
  }
}
