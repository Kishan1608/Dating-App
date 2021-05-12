import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

const Router = () => {
  return <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
      </Switch>
    <Footer />
  </BrowserRouter>
}

export default Router
