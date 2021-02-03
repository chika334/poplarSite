import React, { useState } from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./changePassword";
import { Card, List, ListItem } from "@material-ui/core";
import clsx from 'clsx';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // const [checked1, setChecked1] = useState(false);

  // const toggleCheck1 = () => {
  //   setChecked1(!checked1);
  // };

  // const [checked2, setChecked2] = useState(false);

  // const toggleCheck2 = () => {
  //   setChecked2(!checked2);
  // };

  // const [country, setCountry] = useState("");

  // const handleChange = (event) => {
  //   setCountry(event.target.value);
  // };

  return (
    <>
      <Card>
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
                Personal details
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
                Settings
              </span>
              <div className="divider" />
            </ListItem>
          </List>
        </div>
        <div className="px-0 py-0 py-lg-4">
          {/* edit profile starts */}
          <div
            className={clsx("tab-item-wrapper", { active: activeTab === "1" })}
            index={1}
          >
            <EditProfile />
          </div>
          {/* edit profile ends */}
          {/* change password starts */}
          <div
            className={clsx("tab-item-wrapper", { active: activeTab === "2" })}
            index={2}
          >
            <ChangePassword />
          </div>
          {/* change password ends */}
        </div>
      </Card>
    </>
  );
}
