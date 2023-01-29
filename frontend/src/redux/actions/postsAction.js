import axios from "axios";
import toast from "react-hot-toast";
import { GET_ALL, CREATE, UPDATE, LIKE, DELETE, SELECT_POST } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://memories-qinw.onrender.com/posts");
    dispatch({ type: GET_ALL, payload: res });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://memories-qinw.onrender.com/posts",
      postData
    );
    dispatch({ type: CREATE, payload: res.data });
    toast.success(res.data.message);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://memories-qinw.onrender.com/posts",
      postData
    );
    dispatch({ type: UPDATE, payload: res.data });

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateLike = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `https://memories-qinw.onrender.com/posts/${id}/likePost`
    );
    dispatch({ type: LIKE, payload: res.data });

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://memories-qinw.onrender.com/posts/${id}`
    );
    dispatch({ type: DELETE, payload: res });
    toast.success(res.data.message);

    console.log(res.data);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const selectPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: SELECT_POST, payload: id });
    console.log(id);
  } catch (error) {}
};
