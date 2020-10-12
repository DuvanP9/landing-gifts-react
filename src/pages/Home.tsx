import React from 'react';
import { Route, Redirect } from "react-router-dom";

function Home() {
  
  const isAuthed = !!localStorage.getItem('user');

  return (
    <Route exact path="/">
      {isAuthed ? <Redirect to="/landing" /> : <Redirect to="/login" /> }
    </Route>
  );
}

export default Home;
