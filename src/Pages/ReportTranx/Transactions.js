import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { withRouter, Redirect } from "react-router-dom";
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
import { Query } from "../../_actions/QueryReference";

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

export function TranxReport(props) {
  const [values, setValues] = useState({
    offset: 0,
    tableData: [],
    orgtableData: [],
    perPage: 1000,
    currentPage: 0,
    data: null,
    msg: "",
    details: null
  });

  const {
    offset,
    tableData,
    orgtableData,
    perPage,
    currentPage,
    data,
    msg,
    details
  } = values;

  useEffect(() => {
    const { query } = props;

    console.log(query);
  }, [props.query]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setValues(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        loadMoreData();
      }
    );
  };

  const loadMoreData = () => {
    const data = orgtableData;

    const slice = data.slice(offset, offset + perPage);
    setValues({
      pageCount: Math.ceil(data.length / perPage),
      tableData: slice,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setTimeout(() => {
      props.transactions === null
        ? props.showLoader()
        : setValues({
            pageCount: Math.ceil(props.transactions.length / perPage),
            orgtableData: props.transactions,
            tableData: props.transactions.slice(offset, offset + perPage),
          });
    }, 20);
  };

  // const sendDetails = () => {
  //   if (data === null) {
  //     return "";
  //   } else {
  //     props.history.push({
  //       pathname: `${process.env.REACT_APP_URL}/query/tranx`,
  //       state: { detail: props.data },
  //     });
  //   }
  // };

  const handleQuery = (transId) => {
    props.showLoader();
    const { token, isAuthenticated } = props.authUser;
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
        setValues({ ...values, data: res.data });
        props.history.push({
          pathname: `${process.env.REACT_APP_URL}/query/tranx`,
          state: {
            details: res.data,
          },
        });
        setTimeout(() => {
          props.hideLoader();
        }, 3000);
      })
      .catch((err) => {
        setValues({ ...values, msg: err.response.data.message });
      });
  };

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <div>
      <Container>
        {msg ? <Alert severity="error">{msg}</Alert> : ""}
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
                  {tableData.map((tdata, index) =>
                    tdata.response === null ? null : (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="text-center">{tdata.request.fastrId}</td>
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
                              handleQuery({
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

const mapStateToProps = (state) => ({
  error: state.error,
  transactions: state.transactions.transaction,
  authUser: state.authUser,
  query: state.query,
});

export default withRouter(
  connect(mapStateToProps, { showLoader, hideLoader, Query })(
    withStyles(styles)(TranxReport)
  )
);
