import React, { useState } from "react";
import Transactions from "./Transactions";
import Filter from "./Filter";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Card, Container, Button } from "@material-ui/core";
import { filterByDate } from "../../_actions/transactions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, CardContent, Tooltip } from "@material-ui/core";

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

function Select(props) {
  const classes = useStyles();
  const [data, setData] = useState("");
  const [date, setDate] = useState(null);
  const [date1, setDate1] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handleChanges = (e) => {
    setDate1(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dates = {
      date,
      date1,
    };

    props.filterByDate(dates);

    // console.log(dates);
  };
  return (
    <>
      {data === "filterByDate" ? (
        ""
      ) : (
        <div className="mt-5 d-flex align-content-center justify-content-center mb-3">
          <label className="pr-3">Select option: </label>
          <select onClick={handleSelectChange}>
            <option>Select Option</option>
            <option value="allTransactionPagination">All Transactions</option>
            <option value="filterByDate">Filter By Date</option>
          </select>
        </div>
      )}
      {data === "allTransactionPagination" || data === "" ? (
        <Transactions />
      ) : (
        console.log("bad")
      )}
      {/* {this.state.data === "filterByDate" ? <Filter /> : console.log("Fine")} */}
      {data === "filterByDate" ? (
        <>
          <form className={classes.container} noValidate>
            <Container>
              <div className="mt-5">
                <Card className="p-3 allsecond">
                  <div className="">
                    <label className="pr-3">Select option: </label>
                    <select className="w-100" onClick={handleSelectChange}>
                      <option>Select Option</option>
                      <option value="allTransactionPagination">
                        All Transactions
                      </option>
                      <option value="filterByDate">Filter By Date</option>
                    </select>
                  </div>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    onChange={handleChange}
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    onChange={handleChanges}
                    defaultValue="2017-05-24"
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
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Card>
              </div>

              <Card className="mt-5 card-box mb-spacing-6-x2">
                <div className="card-header pr-2">
                  <div className="card-header--title">Filtered Transaction</div>
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
                            <div className="d-flex align-items-center">
                              0jw912983
                            </div>
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
                          <td className="table-text text-center">
                            09052673281
                          </td>
                          <td className="table-text text-center">
                            Electricity payment
                          </td>
                          <td className="table-text text-center">₦5000</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <div className="d-flex align-items-center">
                              0jw912983
                            </div>
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
                          <td className="table-text text-center">
                            09052673281
                          </td>
                          <td className="table-text text-center">
                            Electricity payment
                          </td>
                          <td className="table-text text-center">₦5000</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <div className="d-flex align-items-center">
                              0jw912983
                            </div>
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
                          <td className="table-text text-center">
                            09052673281
                          </td>
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
            </Container>
          </form>
        </>
      ) : (
        console.log("Fine")
      )}
    </>
  );
}

export default connect(null, { filterByDate })(Select);
