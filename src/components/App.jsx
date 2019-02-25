import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import Login from "./Login";
import SignUpForm from "./SignUp";
import BusinessUser from "./BusinessUser";
import BusinessUserTest from "./BusinessUserTest";
import UserProfile from "./UserProfile";
import NavBarUser from "./NavBarUser";
import { connect } from "react-redux";

class App extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <Router>
          <div className="route-pages">
            <NavBarUser />
            <Route exact path="/" component={Main} />
            <Route exact path="/userprofile" component={UserProfile} />
            <Route exact path="/test" component={BusinessUser} />
            <Route exact path="/testdata" component={BusinessUserTest} />
          </div>
        </Router>
      );
    } else if (!this.props.loggedIn) {
      return (
        <Router>
          <div className="route-pages">
            <NavBar />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/test" component={BusinessUser} />
            <Route exact path="/testdata" component={BusinessUserTest} />
          </div>
        </Router>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});

export default connect(mapStateToProps)(App);
