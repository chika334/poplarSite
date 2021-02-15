import React, { useState } from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./changePassword";
import { Card, List, ListItem, Container } from "@material-ui/core";
import clsx from "clsx";
import MessengerHeader from "../../Homepage/Homepage1/MessengerHeader";

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-wrapper bg-light">
        <div className="header-top-section mb-4">
          <MessengerHeader />
        </div>
        <Container>
          <Card className="m-2">
            <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
              <List
                component="div"
                className="w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary"
              >
                <ListItem
                  button
                  className="p-4 font-size-md rounded-0"
                  selected={activeTab === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span className="font-weight-bold font-size-sm text-uppercase">
                    Edit details
                  </span>
                  <div className="divider" />
                </ListItem>
                <ListItem
                  button
                  className="p-4 font-size-md rounded-0"
                  selected={activeTab === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <span className="font-weight-bold font-size-sm text-uppercase">
                    Change password
                  </span>
                  <div className="divider" />
                </ListItem>
              </List>
            </div>
            <div className="px-0 ">
              {/* edit profile starts */}
              <div
                className={clsx("tab-item-wrapper", {
                  active: activeTab === "1",
                })}
                index={1}
              >
                <EditProfile />
              </div>
              {/* edit profile ends */}
              {/* change password starts */}
              <div
                className={clsx("tab-item-wrapper", {
                  active: activeTab === "2",
                })}
                index={2}
              >
                <ChangePassword />
              </div>
              {/* change password ends */}
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}
