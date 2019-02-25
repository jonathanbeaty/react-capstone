import React, { Component } from "react";
import { Container, Header, List, Form, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { setSales, setPeriod } from "../actions";
import "./BusinessUserTest.css";

const options = [
  { key: "1Q", value: "1Q", text: "1st Quarter: Jan 1 - Mar 31" },
  { key: "2Q", value: "2Q", text: "2nd Quarter: Apr 1 - Jun 30" },
  { key: "3Q", value: "3Q", text: "3rd Quarter: Jul 1 - Sep 31" },
  { key: "4Q", value: "4Q", text: "4th Quarter: Oct 1 - Dec 31" }
];

const timeframe = [
  { text: "Due April 20th, 2019:" },
  { text: "Due July 20th, 2019:" },
  { text: "Due October 22nd, 2019:" },
  { text: "Due January 22nd, 2019:" }
];

export class BusinessUserTest extends Component {
  getQuarter = (e, { value }) => {
    if (value === "1Q") {
      return this.props.dispatch(setPeriod(timeframe[0].text));
    } else if (value === "2Q") {
      return this.props.dispatch(setPeriod(timeframe[1].text));
    } else if (value === "3Q") {
      return this.props.dispatch(setPeriod(timeframe[2].text));
    } else if (value === "4Q") {
      return this.props.dispatch(setPeriod(timeframe[3].text));
    } else return;
  };

  render() {
    return (
      <div className="business-test-page">
        <Container position="middle" style={{ paddingTop: "100px" }}>
          <Header as="h3">S Corporations</Header>
          <p>
            S corporations are corporations that elect to pass corporate income,
            losses, deductions, and credits through to their shareholders for
            federal tax purposes. Shareholders of S corporations report the
            flow-through of income and losses on their personal tax returns and
            are assessed tax at their individual income tax rates. This allows S
            corporations to avoid double taxation on the corporate income. S
            corporations are responsible for tax on certain built-in gains and
            passive income at the entity level.
          </p>
          <Header as="h3">
            To qualify for S corporation status, the corporation must meet the
            following requirements:
          </Header>
          <List bulleted>
            <List.Item>Be a domestic corporation</List.Item>
            <List.Item>Have only allowable shareholders</List.Item>
            <List.Item>Have no more than 100 shareholders</List.Item>
            <List.Item>Have only one class of stock</List.Item>
            <List.Item>
              Not be an ineligible corporation (i.e. certain financial
              institutions, insurance companies, and domestic international
              sales corporations).
            </List.Item>
          </List>
          <Header as="h3">
            If you are an S corporation then you may be liable for...
          </Header>
          <List as="ul" bulleted>
            <List.Item>Income Tax</List.Item>
            <List.Item>Estimated Tax</List.Item>
            <List.Item>Employment Taxes</List.Item>
            <List.List as="ul">
              <List.Item as="li">Social Security Taxes</List.Item>
              <List.Item as="li">Medicare Taxes</List.Item>
              <List.Item as="li">Income Tax Witholding</List.Item>
              <List.Item as="li">Federal Unemployment Tax</List.Item>
              <List.Item as="li">Depositing Employment Taxes</List.Item>
              <List.Item as="li">Excise Tax</List.Item>
            </List.List>
            <List.Item>State Taxes</List.Item>
          </List>
          <Header as="h3">State Sales Tax (Due Quarterly)</Header>
          <Form className="form" onSubmit={e => e.preventDefault()}>
            <Form.Field>
              <Form.Select
                className="dropdown"
                width={10}
                placeholder="Select The Period"
                options={options}
                onChange={this.getQuarter}
              />
              <Form.Input
                width={10}
                type="number"
                id="sales"
                min="0"
                max="100000000"
                placeholder="Enter Total State Sales"
                onChange={e => this.props.dispatch(setSales(e.target.value))}
              />
              <Label className="quarter" as="a" color="teal">
                {this.props.period}
              </Label>
              <Label color="orange" className="output">
                ${this.props.total.toLocaleString(2)}
              </Label>
            </Form.Field>
          </Form>
        </Container>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  sales: state.sales,
  total: state.sales.sales * 0.0825,
  period: state.period.text
});

export default connect(mapStateToProps)(BusinessUserTest);
