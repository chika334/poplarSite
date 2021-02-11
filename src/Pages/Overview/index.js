import React, { useState } from "react";
import clsx from "clsx";
import MessengerHeader from '../../Components/Homepage/Homepage1/MessengerHeader'
import { Button, Container } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverviewMainWindow from "../../Components/Overview/OverviewMainWindow";
import OverviewSidebar from "../../Components/Overview/OverviewSidebar";

export default function Overview() {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  return (
    <Container>
      {/* <div className="hero-wrapper bg-composed-wrapper bg-light"> */}
        <div className="header-top-section pb-3">
          <MessengerHeader />
        </div>
        <div className="app-inner-content-layout  ml-3 mr-3">
          <div className="btn-md-pane d-lg-none px-4 order-0">
            <Button
              onClick={toggleSidebarMenu}
              size="small"
              style={{ backgroundColor: `rgb(0, 68, 116)`, color: "#fff" }}
              className="p-0 mb-2 btn-icon d-40"
            >
              <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
            </Button>
          </div>
          <div
            className={clsx(
              "app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__xxl order-1",
              { "layout-sidebar-open": isSidebarMenuOpen }
            )}
          >
            <OverviewSidebar />
          </div>
          <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
            <OverviewMainWindow />
          </div>

          <div
            onClick={toggleSidebarMenu}
            className={clsx("sidebar-inner-layout-overlay", {
              active: isSidebarMenuOpen,
            })}
          />
        </div>
      {/* </div> */}
    </Container>
  );
}
