// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import PhoneIcon from "@material-ui/icons/Phone";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import PersonPinIcon from "@material-ui/icons/PersonPin";
// import HelpIcon from "@material-ui/icons/Help";
// import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
// import ThumbDown from "@material-ui/icons/ThumbDown";
// import ThumbUp from "@material-ui/icons/ThumbUp";
// import Typography from "@material-ui/core/Typography";
// import { Box, Container } from "@material-ui/core";
// import rccg from "../../assets/images/product-logos/rccg.jpg";
// import Tab1 from "./Tab1";
// import Tab2 from "./Tab2";
// import Tab3 from "./Tab3";
// import Tab4 from "./Tab4";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-prevent-tabpanel-${index}`}
//       aria-labelledby={`scrollable-prevent-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <div>{children}</div>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `scrollable-prevent-tab-${index}`,
//     "aria-controls": `scrollable-prevent-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function ScrollableTabsButtonPrevent() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Container>
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             // variant="scrollable"
//             // scrollButtons="off"
//             textColor="primary"
//             // aria-label="scrollable prevent tabs example"
//             // className="m-4 ml-5 h-5 w-100"
//             style={{
//               margin: 0,
//               paddingLeft: "2rem",
//               paddingRight: "2rem",
//               paddingTop: "3rem",
//               paddingBottom: "6rem",
//             }}
//           >
//             <Tab
//               icon={<img src={rccg} width="40" />}
//               className="h-50 mr-2"
//               style={{ paddingLeft: 20, paddingRight: 20, width: "3.5rem", margin: 0 }}
//               label={`${process.env.REACT_APP_RCCG}`}
//               aria-label="phone"
//               {...a11yProps(0)}
//             />
//             <Tab
//               icon={<img src={rccg} width="40" />}
//               className="h-50 ml-0"
//               style={{ padding: 0, width: "3.5rem", margin: 0 }}
//               label={`${process.env.REACT_APP_RCCG}`}
//               aria-label="favorite"
//               {...a11yProps(1)}
//             />
//             <Tab
//               icon={<img src={rccg} width="40" />}
//               className="h-50 ml-0"
//               style={{ padding: 0, width: "3.5rem", margin: 0 }}
//               label={`${process.env.REACT_APP_RCCG}`}
//               aria-label="person"
//               {...a11yProps(2)}
//             />
//             <Tab
//               icon={<img src={rccg} width="40" />}
//               className="h-50 ml-0"
//               style={{ padding: 0, width: "3.5rem", margin: 0 }}
//               label={`${process.env.REACT_APP_RCCG}`}
//               aria-label="help"
//               {...a11yProps(3)}
//             />
//           </Tabs>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//           <Tab1 />
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           <Tab2 />
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           <Tab3 />
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           <Tab4 />
//         </TabPanel>
//       </div>
//     </Container>
//   );
// }

import React, { Component } from "react";
import rccg from "../../assets/images/product-logos/rccg.jpg";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

class index extends Component {
  openCity = (evt, cityName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
  componentDidMount() {
    document.getElementById("defaultOpen").click();
  }
  render() {
    return (
      <div>
        <div className="tab">
          <button
            className="tablinks mr-2 p-2"
            id="defaultOpen"
            onClick={(event) => this.openCity(event, "London")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
            {/* London */}
          </button>
          <button
            className="tablinks mr-2 p-2"
            onClick={(event) => this.openCity(event, "Paris")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
          </button>
          <button
            className="tablinks mr-2 p-2"
            onClick={(event) => this.openCity(event, "Tokyo")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
          </button>
          <button
            className="tablinks mr-2 "
            onClick={(event) => this.openCity(event, "Tokyo")}
          >
            <img src={rccg} width="30" alt="tabImage" />
            <p>{process.env.REACT_APP_RCCG}</p>
          </button>
        </div>

        <div id="London" className="tabcontent">
          <Tab1 />
        </div>

        <div id="Paris" className="tabcontent">
          <Tab2 />
        </div>

        <div id="Tokyo" className="tabcontent">
          <Tab3 />
        </div>

        <div id="France" className="tabcontent">
          <Tab4 />
        </div>
      </div>
    );
  }
}

export default index;
