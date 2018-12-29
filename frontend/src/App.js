import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { Link, Route, Redirect } from 'react-router-dom';
import Userlist from './Userlist';
import Reviews from './Reviews';
import Submission from './components/Submission';
import Faculty from './components/Faculty';



class App extends Component {
 
  render() {
    return (
      <div>
         <h1 className="text-center">Welcome to Peer To Peer Review</h1>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#9E9FA0"}}>
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ marginLeft: '20px'}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/" style={{ marginLeft: '20px'}}>List of Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reviews/" style={{ marginLeft: '20px'}}>List of Reviews</Link>
                </li>
              </ul>
              <Link className="nav-link btn btn-primary float-right" to="/issues/new">Add new user</Link>
            </div>
          </nav>
          
          <Route exact path="/" render ={() => ( <Redirect to="/home" />)} />
          <Route path="/home" component={Home} />
          <Route path="/users" component={Userlist} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/review/submission" component={Submission} />
          <Route path="/faculty" component={Faculty} />

      </div>
    );
  }
}

export default App;
