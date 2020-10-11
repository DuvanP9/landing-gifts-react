import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 400,
        margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
        marginTop: theme.spacing(2),
        flexGrow: 1
    },
    header: {
      textAlign: 'center',
      color: '#000'
    },
}))