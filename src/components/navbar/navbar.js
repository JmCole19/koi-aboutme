import React from 'react';
import '../../css/content.css';
import useStyles from '../../css/stylesjs/navbarCss';
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
        <Toolbar id='nav-color'>
          <Typography variant="h6" className={classes.title}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Button id='fish'>Fish</Button>
            </IconButton>
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