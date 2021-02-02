import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import rccg from "../../assets/images/product-logos/rccg.jpg";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import AppBar from "@material-ui/core/AppBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="scrollable"
          // scrollButtons="on"
          // indicatorColor="primary"
          textColor="primary"
          aria-label="force tabs example"
          className="m-5"
        >
          <Tab
            className="h-50"
            label={`${process.env.REACT_APP_RCCG}`}
            icon={<img src={rccg} width="60" />}
            {...a11yProps(0)}
          />
          <Tab
            className="h-50"
            label={`${process.env.REACT_APP_RCCG}`}
            icon={<img src={rccg} width="60" />}
            {...a11yProps(1)}
          />
          <Tab
            className="h-50"
            label={`${process.env.REACT_APP_RCCG}`}
            icon={<img src={rccg} width="60" />}
            {...a11yProps(2)}
          />
          <Tab
            className="h-50"
            label={`${process.env.REACT_APP_RCCG}`}
            icon={
              <>
                <img src={rccg} width="60" />{" "}
              </>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
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
    </div>
  );
}
