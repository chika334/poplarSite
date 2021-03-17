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
    // this.setState({
    //   data: e.target.value,
    // });
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
          <Link to={`${process.env.REACT_APP_URL}/reportTranx`}>
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
        </div>
      </Container>
    </form>
  );
}

export default DatePickers;
