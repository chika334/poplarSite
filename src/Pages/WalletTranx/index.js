import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "./report.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
} from "@material-ui/core";
import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  title: {
    margin: "auto",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
});

class WalletReport extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { classes } = this.props;
    return (
      <div className="hero-wrapper bg-light pb-5">
        <div className="header-top-section">
          <MessengerHeader />
        </div>
      {/* // <div> */}
        {/* <div className="responsive-container">
          <h2 className={classes.title}>Wallet Report</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Amount</th>
                <th>Refernce Number</th>
                <th>Date</th>
                <th>Source Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.wallet.wallet === null
                ? ""
                : this.props.wallet.wallet.map((result, index) => {
                    return (
                      <tr key={index}>
                        <td data-title="id">{result.id}</td>
                        <td data-title="Amount">{result.amount}</td>
                        <td data-title="Reference Number">
                          {result.reference}
                        </td>
                        <td data-title="Date">
                          {moment(
                            new Date(result.fundSourceid.timestamp).getTime()
                          ).format("YYYY-MM-DD hh:mm:ss")}
                        </td>
                        <td data-title="Source Name">
                          {result.fundSourceid.sourceName}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div> */}
        <Card className="card-box mb-spacing-6-x2 mt-5">
          <div className="card-header pr-2">
            <div className="card-header--title">All Wallet Transactions</div>
            <div className="card-header--actions">
              <Tooltip title="Refresh">
                <Button size="small" className="btn-neutral-primary">
                  <FontAwesomeIcon icon={["fas", "cog"]} spin />
                </Button>
              </Tooltip>
            </div>
          </div>
          <CardContent>
            <div className="table-responsive-md">
              <Table className="table table-borderless table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">id</th>
                    <th className="text-center">System Id</th>
                    <th className="text-center">full name</th>
                    <th className="text-center">account number</th>
                    <th className="text-center">Payment type name</th>
                    <th className="text-center">Phone number</th>
                    <th className="text-center">title</th>
                    <th className="text-center">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="d-flex align-items-center">0jw912983</div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Ikenye daniel
                      </div>
                    </td>
                    <td className="text-center">
                      <div>01232344323</div>
                    </td>
                    <td className="text-center">
                      <div>Poplar</div>
                    </td>
                    <td className="table-text text-center">09052673281</td>
                    <td className="table-text text-center">
                      Electricity payment
                    </td>
                    <td className="table-text text-center">₦5000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="d-flex align-items-center">0jw912983</div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Divine saviour
                      </div>
                    </td>
                    <td className="text-center">
                      <div>01232344323</div>
                    </td>
                    <td className="text-center">
                      <div>Poplar</div>
                    </td>
                    <td className="table-text text-center">09052673281</td>
                    <td className="table-text text-center">
                      Electricity payment
                    </td>
                    <td className="table-text text-center">₦5000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div className="d-flex align-items-center">0jw912983</div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Abule samuel
                      </div>
                    </td>
                    <td className="text-center">
                      <div>87291212</div>
                    </td>
                    <td className="text-center">
                      <div>Poplar</div>
                    </td>
                    <td className="table-text text-center">09052673281</td>
                    <td className="table-text text-center">
                      Electricity payment
                    </td>
                    <td className="table-text text-center">₦5000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(withStyles(styles)(WalletReport));
