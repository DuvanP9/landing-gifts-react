import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Login from '../pages/Login';
import SignUp from '../pages/register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/singup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
