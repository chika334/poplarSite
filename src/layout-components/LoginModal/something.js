import React from "react";
import ImageSide from "./ImageSide";
import Chart from "./Chart";
import { connect } from "react-redux";
import { Grid, Button, Card } from "@material-ui/core";
import User from "../Admin/Users";

function Index(props) {
  const handleClick = (e) => {
    e.preventDefault();
    if (props.authUser.user.role === 1) {
      props.history.push("/admin/allusers");
    }
  };
  
  return (
    <div className="pl-5 pr-5 pt-5">
      <ImageSide />
      {props.authUser.user.role === 0 && localStorage.token ? <Chart /> : ""}
      {props.authUser.user.role === 1 && localStorage.token ? (
        <Grid item xs={12} md={4} xl={4}>
          <Card className="bg-dark p-5">
            <Button onClick={handleClick} className="mb-1 font-weight-bold">
              view all users
            </Button>
          </Card>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, null)(Index);
