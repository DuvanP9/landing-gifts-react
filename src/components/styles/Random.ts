import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

  export default useStyles;