import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '5%',
      paddingLeft: '20%',
      paddingRight: '20%',
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  export default useStyles;