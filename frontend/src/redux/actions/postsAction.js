import axios from "axios";
import { GET_ALL, CREATE, UPDATE, LIKE, DELETE } from "../types";

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

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:2000/posts", postData);
    dispatch({ type: UPDATE, payload: res.data });

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateLike = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(`http://localhost:2000/posts/${id}/likePost`);
    dispatch({ type: LIKE, payload: res.data });

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:2000/posts/${id}`);
    dispatch({ type: DELETE, payload: res });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
