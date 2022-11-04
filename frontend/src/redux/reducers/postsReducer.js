import { GET_ALL, CREATE, DELETE} from "../types";

const initState = { posts: [] };
const postsReducer = (posts = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;

    case CREATE:
      return [{...posts, posts: action.payload}];

     case DELETE:
      return [ ...posts, action.payload];

    default:
      return posts;
  }
};

export default postsReducer;
