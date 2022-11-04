import {GET_ALL, CREATE} from '../types'


const initState = { posts: [] };
const postsReducer = (posts = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload
      

    case   CREATE:
      return [...posts, action.payload ];

    default:
      return posts;
  }
};

export default postsReducer;

