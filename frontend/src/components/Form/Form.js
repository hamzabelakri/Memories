import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import {createPost} from '../../redux/actions/postsAction'

function Form() {
    const classes= useStyles();
    const dispatch=useDispatch();
    const [postData, setPostData]= useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });


    const onChange =(event)=>{
      setPostData({...postData, [event.target.name]: event.target.value})
  
    }

    const onSubmit=(event)=>{
      event.preventDefault();
      dispatch(createPost(postData));
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
      console.log(postData)
    }

  return (
  <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={onSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={onChange}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={onChange}/>
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={onChange} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={onChange}/>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small"  fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};


export default Form