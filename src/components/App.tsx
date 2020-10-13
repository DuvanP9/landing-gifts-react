import React, { ComponentType } from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/register';
import Trending from '../components/Trending';
import Categories from '../components/Categories';
import Random from '../components/Random';

interface IRouteProps extends RouteProps {
  path: string;
  component: any;
}

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/singup" component={SignUp} />
          <Route exact path="/" render={() => <Redirect to="/trending" />} />
          <PrivateRoute exact path="/trending" component={Trending} />
          <PrivateRoute exact path="/categories" component={Categories} />
          <PrivateRoute exact path="/random" component={Random} />
        </Switch>
    </BrowserRouter>
  );
}

const PrivateRoute: ComponentType<IRouteProps> = ({ component, ...rest }) => {

  const isAuthed = !!localStorage.getItem('auth');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

const PublicRoute: ComponentType<IRouteProps> = ({ component, ...rest }) => {

  const isAuthed = !!localStorage.getItem('auth');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ? (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}

export default App;
