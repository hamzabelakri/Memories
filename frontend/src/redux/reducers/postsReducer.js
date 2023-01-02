import { GET_ALL, CREATE, UPDATE, LIKE } from "../types";

const initState = { posts: [] };
const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;

    case CREATE:
      return {...state, posts: action.payload};
      case UPDATE:
        return {...state, posts: action.payload};
        case LIKE:
          return {...state, posts: action.payload};
    default:
      return state;
  }
};

export default postsReducer;
