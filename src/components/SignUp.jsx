import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { registerUser } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    businessName: "",
    address: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
    passwordConfirm: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);

    this.setState({
      firstName: "",
      lastName: "",
      businessName: "",
      address: "",
      city: "",
      zipCode: "",
      username: "",
      password: "",
      passwordConfirm: ""
    });
    this.props.history.push("/");
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signup-form" style={{ paddingTop: "100px" }}>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" style={{ color: "#D09683" }} textAlign="center">
              <Icon style={{ color: "#D09683" }} size="big" name="react" />{" "}
              Sign-up for an account
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  required
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="dollar"
                  iconPosition="left"
                  placeholder="Business Name"
                  name="businessName"
                  value={this.state.businessName}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="home"
                  iconPosition="left"
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="building"
                  iconPosition="left"
                  placeholder="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="zip"
                  iconPosition="left"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Form.Input
                  required
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Enter Password Again"
                  type="password"
                  name="passwordConfirm"
                  value={this.state.passwordConfirm}
                  onChange={this.handleChange}
                />
                <Form.Button
                  className="buttons"
                  style={{ backgroundColor: "#D09683" }}
                  size="large"
                >
                  Create Account
                </Form.Button>
              </Segment>
            </Form>
            <Link to="/login">
              <Button style={{ backgroundColor: "#D09683" }} fluid size="small">
                Already have an account?
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

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(registerUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
