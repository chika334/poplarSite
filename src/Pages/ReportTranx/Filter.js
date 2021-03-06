// import React, { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import Button from "@material-ui/core/Button";
// import { Container, Card } from "@material-ui/core";
// import { connect } from "react-redux";
// import { withStyles } from "@material-ui/core/styles";
// import { filterByDate } from "../../_actions/transactions";
// import PropTypes from "prop-types";

// const styles = (theme) => ({
// card: {
//   maxWidth: 600,
//   margin: "auto",
//   textAlign: "center",
//   marginTop: theme.spacing(5),
//   paddingBottom: theme.spacing(2),
// },
// submit: {
//   margin: "auto",
//   marginBottom: theme.spacing(2),
// },
// });

// const Filter = (props) => {
//   const { classes } = props;
//   const [open, setOpen] = useState(false);
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: "selection",
//     },
//   ]);

//   const handleOpen = (e) => {
//     e.preventDefault();
//     setOpen(!open);
//     const value = {
//       state,
//     };

//     props.filterByDate(value);
//     // console.log(state);
//   };

//   const handleChange = ({ item }) => {
//     setState([item.selection]);
//     setOpen(false);
//     console.log(item.selection);
//   };

//   return (
//     <div>
//       <Container fixed>
//         {open ? (
//           <>
//             <Button onClick={handleOpen}>Calender</Button>
//             <div>show the transactions for this period</div>
//           </>
//         ) : (
//           <div className={classes.card}>
//             <DateRange
//               editableDateInputs={false}
//               onChange={(item) => handleChange({ item })}
//               moveRangeOnFirstSelection={false}
//               ranges={state}
//             />
//             <div className="element">
//               <Button
//                 className={classes.submit}
//                 variant="contained"
//                 onClick={handleOpen}
//               >
//                 Submit
//               </Button>
//             </div>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default connect(null, { filterByDate })(withStyles(styles)(Filter));

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, LinearProgress, CardContent, Tooltip } from "@material-ui/core";
import { TextField, Card, Container, Button } from "@material-ui/core";

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
}));

function DatePickers() {
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

    console.log(dates);
  };

  return (
    <form className={classes.container} noValidate>
      <Container>
        <div className="mt-5">
          <Link to={`/reportTranx`}>
            View All Transactions
          </Link>
          <Card className="p-3 allsecond">
            <TextField
              id="date"
              label="Birthday"
              type="date"
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChanges(e)}
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
                      <td className="table-text text-center">09052673281</td>
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
                      <td className="table-text text-center">09052673281</td>
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
      </Container>
    </form>
  );
}

export default DatePickers;
