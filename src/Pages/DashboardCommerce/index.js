import React from "react";
import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";

import DashboardCommerce1 from "../../Components/DashboardCommerce/DashboardCommerce1";
import DashboardCommerce2 from "../../Components/DashboardCommerce/DashboardCommerce2";
import DashboardCommerce3 from "../../Components/DashboardCommerce/DashboardCommerce3";
import DashboardCommerce4 from "../../Components/DashboardCommerce/DashboardCommerce4";
import DashboardCommerce5 from "../../Components/DashboardCommerce/DashboardCommerce5";
import DashboardCommerce6 from "../../Components/DashboardCommerce/DashboardCommerce6";
import { Container } from "@material-ui/core";

export default function DashboardCommerce() {
  return (
    <Container>
      <DashboardCommerce1 />
      <DashboardCommerce5 />
    </Container>
  );
}
