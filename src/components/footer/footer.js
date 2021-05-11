import React from 'react';
import '../../css/footer.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { twitter, linkedin, discord, circles, youtube } from '../../images';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://openkoi.com">
                https://openkoi.com
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '70vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(0)
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
    search: {
        width: '25ch',
        height: '32px',
        textAlign: 'center',
        background: 'white',
        borderRadius: '5%',
    },
    searchButton: {
        width: '72px',
        height: '32px',
        color: 'black',
        background: '#FFC78F',
        '&:hover': {
            backgroundColor: '#d99400',
            borderColor: '#cca000',
            boxShadow: 'none',
        }
    }
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div id='footer' className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom>
                    Run a node.
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Join the network, and help us preserve the best of human knowledge.
                </Typography>
                <Typography variant="body1">
                    Stay up to date
                    <div>
                        <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.search} /><Button className={classes.searchButton}>Search</Button>
                    </div>
                </Typography>
                <div id='columns'>
                    <div className='col'>
                        <h3>Company</h3>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Help Us</li>
                                <li>Services</li>
                            </ul>
                            <ul>
                                <li>Developers</li>
                                <li>Desktop App</li>
                                <li>Support</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Get Involved</h3>
                        <ul style={{ marginBottom: '50px' }}>
                            <li>Run a Node</li>
                            <li>Koi Protocol</li>
                            <li>Lightpaper</li>
                            <li>Investor Whitelist</li>
                            <li>Build with Koi</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Get in Touch</h3>
                        <ul style={{ marginBottom: '50px' }}>
                            <li>hello@openkoi.com</li>
                            <li>sales@openkoi.com</li>
                            <li>developer@openkoi.com</li>
                            <li>jobs@openkoi.com</li>
                            <li>press@openkoi.com</li>
                        </ul>
                    </div>
                </div>
                <Container maxWidth="sm" id='icons'>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" height="28" width="28"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0" /><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20" /></g></g></svg>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25" fill="white"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="30"><path fill="white" d="M40 12s-4.586-3.59-10-4l-.488.977C34.406 10.176 36.652 11.89 39 14c-4.047-2.066-8.04-4-15-4-6.96 0-10.953 1.934-15 4 2.348-2.11 5.02-4.016 9.488-5.023L18 8c-5.68.535-10 4-10 4s-5.121 7.426-6 22c5.16 5.953 13 6 13 6l1.64-2.184C13.856 36.848 10.716 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.855 4.848-8.64 5.816L33 40s7.84-.047 13-6c-.879-14.574-6-22-6-22zM17.5 30c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4zm13 0c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4z"/></svg>
                    <svg className="icon" width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="24" fill="white" />
                    </svg>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" fill="white" width="30" height="30"><path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"/></svg>
                </Container>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm" style={{ textAlign: 'center' }}>
                    <Typography variant="body1">©KOI Co. 2021</Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}