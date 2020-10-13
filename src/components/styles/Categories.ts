import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({
  search: {
    width: '100%',
    padding: '2%',
  },
  gifs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
}));

  export default useStyles;