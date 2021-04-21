import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
// import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tokenConfig } from "../../_actions/userAction";
import { showLoader, hideLoader } from "../../_actions/loading";
import {
  Table,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
  Container,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  title: {
    margin: "auto",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
});

export class TranxReport extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 1000,
      currentPage: 0,
      data: null,
      msg: "",
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    setTimeout(() => {
      this.props.transactions === null
        ? this.props.showLoader()
        : this.setState({
            pageCount: Math.ceil(
              this.props.transactions.length / this.state.perPage
            ),
            orgtableData: this.props.transactions,
            tableData: this.props.transactions.slice(
              this.state.offset,
              this.state.offset + this.state.perPage
            ),
          });
    }, 20);
  };

  sendDetails = () => {
    if (this.state.data === null) {
      return "";
    } else {
      this.props.history.push({
        pathname: `${process.env.REACT_APP_URL}/query/tranx`,
        state: { detail: this.state.data },
      });
    }
  };

  handleQuery = (transId) => {
    const { token, isAuthenticated } = this.props.authUser;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // if token, add to header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    axios
      .post(`${process.env.REACT_APP_API_QUERY}`, transId, config)
      .then((res) => {
        this.setState({ data: res.data });
        this.sendDetails();
      })
      .catch((err) => {
        this.setState({ msg: err.response.data.message });
      });
  };

  render() {
    var formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return (
      <div>
        <Container>
          {this.state.msg ? (
            <Alert severity="error">{this.state.msg}</Alert>
          ) : (
            ""
          )}
          <Card className="card-box mb-spacing-6-x2">
            <div className="card-header pr-2">
              <div className="card-header--title">All Transactions</div>
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
                <Table className="table table-borderless table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">id</th>
                      <th className="text-center">Receipt #</th>
                      <th className="text-center">Description</th>
                      <th className="text-center">Product status</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">Payment status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData.map((tdata, index) =>
                      tdata.response === null ? (
                        null
                      ) : (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="text-center">
                            {tdata.request.fastrId}
                          </td>
                          <td className="text-center">
                            {tdata.request.productCode.title} Token
                          </td>
                          <td className="text-center">
                            <div>
                              {tdata.response === null ? (
                                <p>Please query Transaction</p>
                              ) : (
                                tdata.response.productMessage
                              )}
                            </div>
                          </td>
                          <td className="text-center">
                            <div>
                              {formatter.format(
                                tdata.request.paymentDetails.amount
                              )}
                            </div>
                          </td>
                          <td>
                            {tdata.response === null ? (
                              <p>Verification Unsuccess</p>
                            ) : (
                              <p>Verification Success</p>
                            )}
                          </td>
                          <td className="table-text text-center">
                            <Button
                              onClick={(e) => {
                                // const fastrId = tdata.request.fastrId,
                                e.preventDefault();
                                this.handleQuery({
                                  transId: tdata.request.fastrId,
                                });
                              }}
                              style={{
                                backgroundColor: "#048cfc",
                              }}
                            >
                              Query Transaction
                            </Button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   transactions: state.transactions.transaction,
//   authUser: state.authUser.isAuthenticated,
// });

const mapStateToProps = (state) => ({
  error: state.error,
  transactions: state.transactions.transaction,
  authUser: state.authUser,
});

export default withRouter(
  connect(mapStateToProps, { showLoader, hideLoader })(
    withStyles(styles)(TranxReport)
  )
);
