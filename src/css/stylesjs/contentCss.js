import { makeStyles } from '@material-ui/core/styles';

const contentStyle = makeStyles((theme) => ({
    title: {
        position: 'absolute',
        width: '458px',
        height: '56px',
        right: '257px',
        top: '261px',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '40px',
        lineHeight: '56px',
        letterSpacing: '0.03em',
    },
    titleDescrip: {
        position: 'absolute',
        width: '601px',
        height: '72px',
        right: '114px',
        top: '321px',

        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '36px',

        letterSpacing: '0.03em',

        color: '#171753',


    },
    textSmall: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '28px',

        textAlign: 'center',
        letterSpacing: '0.03em',

        color: '#171753',
    },
    circles: {
        width: '82px',
        height: '82px',
        background: '#C4C4C4',
        borderRadius: '50%',
    },
}))

export default contentStyle;