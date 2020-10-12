import React, { useReducer, useEffect }  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles/Singup'
import { useHistory, Route, Redirect } from "react-router-dom";
import { IUser, ActionR } from './models/user.model'

const initialState:IUser = {
  username: '',
  password: '',
  helperText: '',
  isError: false
};

const reducer = (state: IUser, action: ActionR): IUser => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'singupSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'singupFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const SignUp = () => {
  const isAuthed = !!localStorage.getItem('auth');
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  }, [state.username, state.password]);

  const handleLogin = () => {
    localStorage.setItem("user", state.username)
    localStorage.setItem("password", state.password)
    history.push('/login');
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  return (
    <Route exact path="/singup">
      {isAuthed ? 
      <Redirect to="/" /> : 
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Registrarse
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Ya tienes una cuenta, Inicia sesion.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      }
    </Route>
  );
}

export default SignUp;