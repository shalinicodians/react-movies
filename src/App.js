import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import NotFound from './common/notFound';
import Customer from './common/customers';
import Rental from './common/rental';
import NavBar from './common/navBar';
import MoviesForm from './common/moviesForm';
import LoginForm from './common/loginForm';
import RegisterForm from './common/registerForm';
import New from './components/new';
  

function App() {
  return(
  <div>
    <NavBar/>
    {/* <Movies/> */}
    <Switch>
    <Route path="/movies/new/:id" component={New}></Route>
    <Route path="/register" component={RegisterForm}></Route>
    <Route path="/loginForm" component={LoginForm}></Route>
    <Route path="/movies/new/:id" component={New}></Route>
    <Route path="/movies" component={Movies}></Route>
    <Route path="/customers" component={Customer}></Route>
    <Route path="/rentals" component={Rental}></Route>
    <Route path="/notFound" component={NotFound}></Route>
    <Redirect from ="/" exact to="/movies"/>
    <Redirect to="/notFound"/>

    </Switch>
  </div>
  )
  
}

export default App;
