import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, TextField, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
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
    })
)

const Login = () => {
    const classes = useStyles();

  return (
      <form className={classes.container} noValidate>
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
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Contraseña"
              margin="normal"
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginBtn}>
            Login
          </Button>
        </CardActions>
          </Card>
      </form>
  );
}

export default Login;
