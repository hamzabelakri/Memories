import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { getPosts } from "../../redux/actions/postsAction";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

function Posts() {
  const classes = useStyles();
  const state = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [state]);

  return !state.data ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {state.data.reverse().map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
      <Toaster position="top-center" reverseOrder={false} />
    </Grid>
  );
}

export default Posts;
