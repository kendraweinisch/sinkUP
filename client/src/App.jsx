import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Quiz from './components/Quiz';
import Navbar from './components/CustomNavbar';
import LoginPage from './components/LoginPage/LoginPage';
import MatchPage from './components/MatchPage/MatchPage';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.saveUser = this.saveUser.bind(this)
    this.renderLogInPage = this.renderLogInPage.bind(this)
    this.renderMatchPage = this.renderMatchPage.bind(this)

  }
  
  saveUser(user) {
    let state = Object.assign({}, this.state)
    state.user = user
    this.setState(state)
  }
renderLogInPage() {
  return <LoginPage userfn = {this.saveUser} />
}
renderMatchPage() {
  return <MatchPage user = {this.state.user}/>

}

  render() {
    let logInProps = {user: this.state.user, saveUserfn: this.saveUser}
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/authentication' render={this.renderLogInPage}/>
          <Route path='/MatchPage' render={this.renderMatchPage}/>
          {/* <Route path="/authentication" component={LoginPage} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
