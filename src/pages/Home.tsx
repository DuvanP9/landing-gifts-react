import React from 'react';
import { useHistory, Route, Redirect } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles/Home'

function Home() {

  const history = useHistory();
  const classes = useStyles();
  const isAuthed = !!localStorage.getItem('auth');

  
const handleLogout = () => {
  localStorage.clear();
  history.push('/login');
};

  return (
    <Route exact path="/">
      {isAuthed ? 
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <div className={classes.logout}>

            <Button variant="contained" color="default" onClick={handleLogout}>
              Cerrar Sesion
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment> 
      : <Redirect to="/login" /> }
    </Route>
  );
}

export default Home;
