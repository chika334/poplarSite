import React, { PureComponent } from "react";
// import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
// import { List, ListItem } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Transactions from "./Transactions";
// import Filter from "./Filter";
import Select from "./Select";

export class Report extends PureComponent {
  render() {
    return (
      <div>
        <div className="hero-wrapper bg-composed-wrapper bg-light">
          {/* <div className="header-top-section">
            <MessengerHeader />
          </div> */}
        </div>
        <Select />
      </div>
    );
  }
}

export default Report;
