import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Giphy from '../components/Giphy';

function Landing() {
  
  const isAuthed = !!localStorage.getItem('user');

  return (
    <Route exact path="/landing">
      {!isAuthed ? <Redirect to="/login" /> : 
      <Giphy/>
      }
    </Route>
  );
}

export default Landing;
