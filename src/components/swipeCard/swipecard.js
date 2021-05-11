import React from 'react';
import './swipeCard.css';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    }
}));

export default function SwipeCard() {

    const classes = useStyles();
    const [value, setValue] = React.useState('1');
    const icon = <FiberManualRecordIcon style={{ color: orange[500] }} />;

    function handleChange(event, newValue, newStyle) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <TabContext value={value}>
                <TabPanel value="1">
                    For us, being “open” encompasses several concepts and summarizes a few core values including Transparency and Honesty. As an organization in the blockchain space, we aim to be open in all aspects. Our products are all open-source (check out our Github) and we have a largely horizontal team structure.
                    We firmly believe that game-changing ideas can come from anywhere, and anyone can schedule a meeting with our leadership with ideas for improving the company, products, or ecosystem.
                </TabPanel>
                <TabPanel value="2">
                    Accessibility is often used as a catch-all for “We care about people!” While we definitely do care about people, we see accessibility in a bigger scope. Yes, we are actively and constantly working to make our products more usable for people of all abilities. But we are also focusing on how Koi can empower equitable access to information around the world. 
                    We also started the Koi Foundation to help people with great ideas build innovative new projects on Koi, regardless of access to other funding.
                    <Button className="button-purple" href="button should go to: https://docs.google.com/forms/d/e/1FAIpQLSeC9Qyc4lQrKSW6_92knIE_Ko7Kd_z5g1thT0FFD0qsD7HwVw/viewform"></Button>
                </TabPanel>
                <TabPanel value="3">
                    One big criticism of popular blockchains is that they are terrible for the environment. Proof of Work  requires an enormous amount of energy. At Koi, we developed a new verification method, Proof of Real Traffic, to engage all the benefits of blockchain without such environmental harm. 
                    he current ad economy is unsustainable, getting more annoying and paywalls more frustrating.
                    We are creating an ecosystem where creators are compensated fairly as a sustainable solution.  
                </TabPanel>
                <AppBar position="static">
                    <TabList onChange={handleChange} className='selector' indicatorColor='#FFFFFF'>
                        <Tab icon={icon} value="1" />
                        <Tab icon={icon} value="2" />
                        <Tab icon={icon} value="3" />
                    </TabList>
                </AppBar>
            </TabContext>
        </div>
    )

}