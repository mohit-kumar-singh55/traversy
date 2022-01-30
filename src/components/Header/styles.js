import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    heading: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontFamily: 'Ethnocentric Rg',
    },
    search: {
        position: 'relative',
        borderRadius: "20px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
    },
    searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        paddingLeft: "50px",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        background: "rgba(0,0,0,0.78)",
    },
}));