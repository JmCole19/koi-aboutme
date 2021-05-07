import { makeStyles } from '@material-ui/core/styles';

// Material UI uses different forms of styling,  
// and I found a way to incorporate that in a seperate file, like so

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    smallButton: {
      fontFamily: 'Catamaran, sans-serif',
      color: 'White',
      fontSize: '12px',
      alignContent: 'Center',
    },
    download: {
      fontFamily: 'Catamaran, sans-serif',
      color: 'white',
      height: '30px',
      width: '120px',
      alignContent: 'Center',
    },
    rectangle: {
      background: '#171753',
      border: '1.5px solid #FFFFFF',
      boxSizing: 'border-box',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16)',
      borderRadius: '4px',
    },
  }));

  export default useStyles;