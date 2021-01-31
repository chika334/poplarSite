import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon tabs example"
      >
        <Tab
          icon={
            <FontAwesomeIcon
              icon={["fas", "lightbulb"]}
              style={{ width: "50%", height: "3em" }}
              // className="text-warning"
            />
          }
          aria-label="phone"
        />
        <Tab
          icon={
            <FontAwesomeIcon
              icon={["fas", "lightbulb"]}
              style={{ width: "50%", height: "3em" }}
              // className="text-warning"
            />
          }
          aria-label="favorite"
        />
        <Tab
          icon={
            <FontAwesomeIcon
              icon={["fas", "lightbulb"]}
              style={{ width: "50%", height: "3em" }}
              // className="text-warning"
            />
          }
          aria-label="person"
        />
        <Tab
          icon={
            <FontAwesomeIcon
              icon={["fas", "lightbulb"]}
              style={{ width: "50%", height: "3em" }}
              // className="text-warning"
            />
          }
          aria-label="person"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tab3 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tab4 />
      </TabPanel>
    </Paper>
  );
}
