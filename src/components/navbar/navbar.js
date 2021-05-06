import React from 'react';
import useStyles from './navbarCss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

function Navbar() {
const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.fish} color="inherit" aria-label="menu">
            <Button>Fish</Button>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            OpenKoi
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="option">
            <Button className={classes.smallButton}>Run a node</Button>
          </IconButton>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="option">
            <Button className={classes.smallButton}>Framework</Button>
          </IconButton>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="option">
            <Button className={classes.smallButton}>NFT's</Button>
          </IconButton >
          <div className={classes.rectangle}>
          <Button className={classes.download}>Download</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;