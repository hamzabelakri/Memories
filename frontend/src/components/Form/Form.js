import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../redux/actions/postsAction";

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsReducer);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const onChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };
  const handleTag = (event) => {
    setPostData({ ...postData, tags: event.target.value.split(",") });
  };
  /*   useEffect(() => {
    if (posts) setPostData(posts);
  }, [posts]); */

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
    onClear();
  };

  const onDone = ({ base64 }) => {
    setPostData({ ...postData, selectedFile: base64 });
  };
  const onClear = (event) => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={onSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={onChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={onChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={onChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={handleTag}
        />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={onDone} />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={onClear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
