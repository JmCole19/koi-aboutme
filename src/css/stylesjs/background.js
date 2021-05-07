import { makeStyles } from '@material-ui/core/styles';

    const backStyle = makeStyles((theme) => ({
        root: {
            background: 'linear-gradient(#BCF3EF 30%, #FFFFFF 90%)',
            border: 0,
            borderRadius: 3,
            zIndex: -1,
            position: 'relative',
            height: '160px',
        },
    }));

export default backStyle;