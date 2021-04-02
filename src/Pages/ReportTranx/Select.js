import React, { useState, useEffect, Component } from "react";
import Transactions from "./Transactions";
import Filter from "./Filter";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Card, Container, Button } from "@material-ui/core";
import { filterByDate } from "../../_actions/transactions";
import { connect, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, CardContent, Tooltip } from "@material-ui/core";
import { hideLoader, showLoader } from "../../_actions/loading";
import { ClimbingBoxLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
}));

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      data: "",
      start: null,
      end: null,
      currentPage: 0,
      submitted: false,
      update: false,
      loading: false,
      length: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({ start: e.target.value });
    // console.log(e.target.value);
  };

  handleChanges = (e) => {
    this.setState({ end: e.target.value });
    console.log(e.target.value);
  };

  handleSelectChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "allTransactionPagination") {
      // console.log("no going back");
      this.refreshPage();
    }
    else {
      this.setState({ data: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
    const { start, end } = this.state;

    const dates = {
      start,
      end,
    };

    this.setState({ loading: true });
    // console.log(dates);
    this.props.filterByDate(dates);
  };

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

  componentDidUpdate() {
    this.getData();
  }

  getData() {
    if (!this.state.submitted) {
      console.log("false", this.state.submitted);
    } else {
      setTimeout(() => {
        const data =
          this.props.transactions.transaction === null
            ? ""
            : this.props.transactions.transaction;
        // console.log(data);
        var slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: this.props.transactions.transaction,
          tableData: slice,
          length: slice.length,
          loading: false,
        });
      }, 2000);
    }
  }

  refreshPage = () => {
    console.log("good");
    window.location.reload(false);
  };

  render() {
    const classes = this.props;
    return (
      <>
        {this.state.data === "filterByDate" ? (
          ""
        ) : (
          <div className="mt-5 d-flex align-content-center justify-content-center mb-3">
            <label className="pr-3">Select option: </label>
            <select onClick={this.handleSelectChange}>
              <option>Select Option</option>
              <option value="allTransactionPagination">All Transactions</option>
              <option value="filterByDate">Filter By Date</option>
            </select>
          </div>
        )}
        {this.state.data === "allTransactionPagination" ||
        this.state.data === "" ? (
          <Transactions />
        ) : (
          console.log("bad")
        )}
        {this.state.loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          >
            <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
              <div className="d-flex align-items-center flex-column px-4">
                <ClimbingBoxLoader color={"#3c44b1"} loading={true} />
              </div>
              <div className="text-muted font-size-xl text-dark text-center pt-3">
                <span className="font-size-lg d-block text-dark">
                  Your request is loading
                </span>
              </div>
            </div>
          </motion.div>
        ) : this.state.data === "filterByDate" ? (
          <>
            <form className={classes.container} noValidate>
              <Container>
                <div className="mt-5">
                  <Card className="p-3 allsecond">
                    <div className="">
                      <label className="pr-3">Select option: </label>
                      <select
                        className="w-100"
                        onClick={this.handleSelectChange}
                      >
                        <option>Select Option</option>
                        <option value="allTransactionPagination">
                          All Transactions
                        </option>
                        <option value="filterByDate">Filter By Date</option>
                      </select>
                    </div>
                    <TextField
                      id="date"
                      label="start date"
                      type="date"
                      onChange={this.handleChange}
                      defaultValue={this.state.start}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="date"
                      label="End date"
                      type="date"
                      format="dd/mm/yyyy"
                      onChange={this.handleChanges}
                      defaultValue={this.state.end}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <Button
                      style={{
                        backgroundColor: "#048cfc",
                        height: "50%",
                        marginTop: "2%",
                      }}
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Submit
                    </Button>
                  </Card>
                </div>

                <Card className="mt-5 card-box mb-spacing-6-x2">
                  <div className="card-header pr-2">
                    <div className="card-header--title">
                      Filtered Transaction
                    </div>
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
                          {this.state.tableData.map((tdata, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="text-center">
                                {tdata.response.fastrId}
                              </td>
                              <td className="text-center">
                                {tdata.response.paymentRequestid.fullname}
                              </td>
                              <td className="text-center">
                                <div>
                                  {
                                    tdata.response.paymentRequestid
                                      .accountNumber
                                  }
                                </div>
                              </td>
                              <td className="text-center">
                                <div>
                                  {
                                    tdata.response.paymentRequestid
                                      .serviceproviderId.paymentTypeid
                                      .paymentTypeName
                                  }
                                </div>
                              </td>
                              <td className="table-text text-center">
                                {
                                  tdata.response.paymentRequestid
                                    .serviceproviderId.manager.phone
                                }
                              </td>
                              <td className="table-text text-center">
                                {
                                  tdata.response.paymentRequestid.productCode
                                    .title
                                }
                              </td>
                              <td className="table-text text-center">
                                {tdata.response.paymentRequestid.amount}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </Container>
            </form>
          </>
        ) : (
          console.log("Fine")
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, {
  filterByDate,
  hideLoader,
  showLoader,
})(Select);
