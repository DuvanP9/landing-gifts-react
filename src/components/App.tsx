import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/singup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
