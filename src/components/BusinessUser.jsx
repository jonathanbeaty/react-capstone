import React from "react";
import { Container, Header, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BusinessUser = () => {
  return (
    <Container position="middle" style={{ paddingTop: "100px" }}>
      <Header as="h2">What kind of Business are you?</Header>

      <Card>
        <Image src="https://i.imgur.com/Mtb8loF.png" />
        <Card.Content>
          <Link to="/testdata">
            <Card.Header>S Corp</Card.Header>
            <Card.Meta>
              <span className="date">Limited Liability Corporation</span>
            </Card.Meta>
          </Link>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default BusinessUser;
