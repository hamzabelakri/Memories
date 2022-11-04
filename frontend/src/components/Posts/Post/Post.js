import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



function Post() {
    const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} />
      <div className={classes.overlay}>
        <Typography variant="h6"></Typography>
        <Typography variant="body2"></Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" ><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2"></Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"></Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"></Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like </Button>
        <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );

}

export default Post