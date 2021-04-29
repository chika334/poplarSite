import React, { Component } from "react";
import { Card, Container } from "@material-ui/core";
import moment from "moment";
import { Prompt } from "react-router";

export default class index extends Component {
  state = {
    isBlocking: false,
  };

  componentDidMount() {
    this.block();
  }

  block = () => {
    window.onbeforeunload = function () {
      this.setState({ isBlocking: true });
      return "";
    }.bind(this);

    if (this.props.location.state.detail.productResult.statusCode === 1) {
      window.location.href = `${process.env.REACT_APP_URL}/reportTranx`;
    }
  };

  render() {
    console.log();
    return (
      <Container className="d-flex align-content-center justify-content-center">
        <Prompt
          when={this.state.blocking}
          message={() => `On reload all transaction history will b lost`}
        />
        <Card className="mt-5 p-5">
          <h3 className="text-center">Query Details</h3>
          <div className="allnew">
            <p>Full Name: </p>
            <p style={{ paddingLeft: "63px" }}>
              {this.props.location.state.detail.request.fullname}
            </p>
          </div>
          <div className="allnew">
            <p>Meter Number: </p>
            <p style={{ paddingLeft: "33px" }}>
              {this.props.location.state.detail.request.accountNumber}
            </p>
          </div>
          <div className="allnew">
            <p>Amount: </p>
            <p style={{ paddingLeft: "63px" }}>
              {this.props.location.state.detail.request.amount}
            </p>
          </div>
          <div className="allnew">
            <p>FastrId: </p>
            <p style={{ paddingLeft: "73px" }}>
              {this.props.location.state.detail.response.fastrId}
            </p>
          </div>
          <div className="allnew">
            <p>Token: </p>
            <p style={{ paddingLeft: "63px" }}>
              {this.props.location.state.detail.productResult.object.recieptNumber}
            </p>
          </div>
          <div className="allnew">
            <p>Date: </p>
            <p style={{ paddingLeft: "83px" }}>
              {moment(
                this.props.location.state.detail.request.timestamp
              ).format("MMMM Do YYYY")}
            </p>
          </div>
        </Card>
      </Container>
    );
  }
}
