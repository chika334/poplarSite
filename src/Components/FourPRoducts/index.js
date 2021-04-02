import React, { Component } from "react";
import MessengerHeader from "../Homepage/Homepage1/MessengerHeader";
import Tab1 from "../../layout-components/Tab/Tab1";

class index extends Component {
  render() {
    return (
      <div className="hero-wrapper bg-composed-wrapper bg-light">
        {/* <div className="header-top-section pb-2">
          <MessengerHeader />
        </div> */}
        <div className="p-3 m-3 b">
          <Tab1 />
        </div>
      </div>
    );
  }
}

export default index;
