import React, { useReducer, useEffect } from 'react';
import { Card, CardHeader, CardContent, TextField, CardActions, Button } from '@material-ui/core';
import useStyles from './styles/Login'
import { useHistory, Route, Redirect } from "react-router-dom";

type State = {
  username: string
  password:  string
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
| { type: 'setPassword', payload: string }
| { type: 'loginSuccess', payload: string }
| { type: 'loginFailed', payload: string }
| { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
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
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
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

const Login = () => {
  
  const isAuthed = !!localStorage.getItem('user');
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  }, [state.username, state.password]);

  const handleLogin = () => {
    
    if (state.username === 'correo@correo.com' && state.password === 'password') {
      localStorage.setItem("user", state.username)
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
      history.push('/');
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
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
    <form className={classes.container} noValidate>
      <Route exact path="/login">
        {isAuthed ? 
        <Redirect to="/" /> : 
        <Card>
          <CardHeader className={classes.header} title="Login"/>
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Correo Electronico"
                placeholder="email@email.com"
                margin="normal"
                onChange={handleUsernameChange}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Contraseña"
                margin="normal"
                onChange={handlePasswordChange}
              /> 
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.loginBtn}
              onClick={handleLogin}>
              Login
            </Button>
          </CardActions>
        </Card>
        }
      </Route>
      </form>
  );
}

export default Login;
