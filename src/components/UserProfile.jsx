import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

const UserProfilePage = () => (
  <div className="user-profile" style={{ paddingTop: "100px" }}>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Card>
        <Image src="https://pickaface.net/assets/images/slides/slide4.png" />
        <Card.Content>
          <Card.Header>Welcome Small Business Owner</Card.Header>
          <Card.Meta>
            <span className="date" />
          </Card.Meta>
          <Card.Description>...</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          XYZ Company
        </Card.Content>
      </Card>
    </Grid>
  </div>
);

export default UserProfilePage;
