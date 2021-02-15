import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  Container,
  List,
  ListItem,
} from "@material-ui/core";

export default function LivePreviewExample() {
  return (
    <>
      <div className="z-over pb-5 rounded" style={{ marginTop: "50px" }}>
        <Container className="pt-0 pt-xl-5">
          {/* <Grid container spacing={6}>
            <Grid item xl={7} className="d-flex align-items-center">
              <div className="w-100">
                <Grid container spacing={6} className="d-none d-md-flex mt-3">
                  <Grid item md={4}>
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Services
                      </h6>
                      <List
                        component="div"
                        className="nav-transparent-alt flex-column"
                      >
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          Products
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          Services
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          About us
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Support
                      </h6>
                      <List
                        component="div"
                        className="nav-transparent-alt flex-column"
                      >
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          Support center
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          Affiliates
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          Contact us
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        UI Themes
                      </h6>
                      <List
                        component="div"
                        className="nav-transparent-alt flex-column"
                      >
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          React themes
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          HTML5 themes
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50"
                        >
                          Angular themes
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid> */}
          <div>
            {/*  <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto mb-4 mt-5 w-25" />
            <List
              component="div"
              className="nav-transparent-alt text-nowrap d-flex justify-content-center"
            >
              <ListItem
                button
                className="text-facebook hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-twitter hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-google hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon
                  icon={["fab", "google"]}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-instagram hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className="font-size-lg"
                />
              </ListItem>
            </List> */}
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25" />
            <div className="text-center d-block text-black-50">
              {`${process.env.REACT_APP_NAME}`}
              <span className="p-2">Copyright &copy; 2021</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
