import React from "react";

import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";

// import { PageTitle } from '../../layout-components';

import DashboardCommerce1 from "../../Components/DashboardCommerce/DashboardCommerce1";
import DashboardCommerce2 from "../../Components/DashboardCommerce/DashboardCommerce2";
import DashboardCommerce3 from "../../Components/DashboardCommerce/DashboardCommerce3";
import DashboardCommerce4 from "../../Components/DashboardCommerce/DashboardCommerce4";
import DashboardCommerce5 from "../../Components/DashboardCommerce/DashboardCommerce5";
import DashboardCommerce6 from "../../Components/DashboardCommerce/DashboardCommerce6";
// import Chart from "../Chartjs";
import { Container } from "@material-ui/core";

export default function DashboardCommerce() {
  return (
    <Container>
      {/* <PageTitle
        titleHeading="Commerce"
        titleDescription="Dashboard section built in a few minutes using only included elements."
      /> */}
      {/* <div className="header-top-section pb-3">
        <MessengerHeader />
      </div> */}
      {/* <Chart /> */}
      <DashboardCommerce1 />
      {/* <DashboardCommerce2 /> */}
      {/* <DashboardCommerce3 /> */}
      {/* <DashboardCommerce4 /> */}
      <DashboardCommerce5 />
      {/* <DashboardCommerce6 /> */}
    </Container>
  );
}
