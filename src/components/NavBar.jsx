import React, { Component } from "react";
import { Container, Icon, Dropdown, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default class NavBar extends Component {
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
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Button.Or />
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </Button.Group>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}
