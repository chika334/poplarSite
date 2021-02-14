import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Button from "@material-ui/core/Button";
import { Container, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
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
});

const Filter = (props) => {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleOpen = (e) => {
    setOpen(!open);
  };

  const handleChange = (item) => {
    setState([item.selection]);
  };

  // console.log(state, open);

  return (
    <div>
      <Container fixed>
        {open ? (
          <>
            <Button onClick={handleOpen}>Calender</Button>
            <div>show the transactions for this period</div>
          </>
        ) : (
          <div className={classes.card}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => handleChange(item)}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
            <div className="element">
              <Button
                className={classes.submit}
                variant="contained"
                onClick={handleOpen}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default withStyles(styles)(Filter);
