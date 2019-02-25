import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = async event => {
    event.preventDefault();

    this.props.login(this.state);
    this.setState({ username: "", password: "" });
    this.props.history.push("/");
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form" style={{ paddingTop: "100px" }}>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" style={{ color: "#D09683" }} textAlign="center">
              <Icon style={{ color: "#D09683" }} size="big" name="react" />{" "}
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button
                  className="buttons"
                  style={{ backgroundColor: "#D09683" }}
                  size="large"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Link to="/signup">
              <Button style={{ backgroundColor: "#D09683" }} fluid size="small">
                Don't have an account yet?
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.username !== null
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
