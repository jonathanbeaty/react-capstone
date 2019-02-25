import React, { Component } from "react";
import { Container, Icon, Dropdown, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuthToken } from "../local-storage";
import { clearAuth } from "../actions";

import "./NavBar.css";

class NavBar extends Component {
  state = {
    loggedin: "True"
  };

  logMeOut = async event => {
    event.preventDefault();
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.setState({ loggedIn: "False" });
  };

  render() {
    return (
      <div>
        <Menu className="ui color menu" fixed="top" inverted>
          <Container>
            <Menu.Item>
              <Link to="/">
                <Icon size="big" name="react" />
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Dropdown>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/">
                      <p className="link">Home</p>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/testdata">
                      <p className="link">Test It Out</p>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item position="right">
              <Button.Group color="black">
                <Link to="/userprofile">
                  <Button>My Account</Button>
                </Link>
                <Button onClick={this.logMeOut}>Logout</Button>
              </Button.Group>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});

export default connect(mapStateToProps)(NavBar);
