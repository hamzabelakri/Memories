import axios from "axios";
import { GET_ALL, CREATE, DELETE } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:2000/posts");
    dispatch({ type: GET_ALL, payload: res });
   
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:2000/posts", postData);
    dispatch({ type: CREATE, payload: res.data });

    console.log(res.data.message)

  } catch (error) {
    console.log(error);
  }
};

export const deletePost =(id) => async (dispatch)=>{
    try {
        const res= await axios.delete(`http://localhost:2000/posts/${id}`)
        dispatch({ type:DELETE , payload: res})
        console.log(res.data.message)
    } catch (error) {
        console.log(error)
    }
}