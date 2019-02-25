import React from "react";
import { connect } from "react-redux";
import { Container, Header, Icon, Label } from "semantic-ui-react";
// import { fetchUsers } from "../actions";
import { Link } from "react-router-dom";

class Main extends React.Component {
  componentDidMount() {
    // this.props.fetchUsers();
  }

  render() {
    return (
      <Container style={{ paddingTop: "100px" }}>
        <Header as="h3">Wecome Texas Small Business Owner</Header>
        <p>
          What if I told you, you could track and manage all your Small Business
          taxes from one platform? This platform could track and manage when all
          monthly, quarterly, and annual State and Federal taxes were due and
          allow you as the Business Owner to manage all your business expenses,
          sales, and payroll that would feed into what you owed for the
          determined timelines.
        </p>
        <p>
          In my experience, having another company or CPA manage this for you
          can leave you somewhat in the dark as this communication channel is
          somewhat limited. They don't have a vested interest in your Business
          and you are the only one who know all the ins and outs of your
          business.
        </p>
        <Link to="/test">
          <Label size="big">
            Test it out!
            <Icon size="big" name="clipboard check" />
          </Label>
        </Link>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users1 };
};

export default connect(
  mapStateToProps
  // { fetchUsers }
)(Main);
