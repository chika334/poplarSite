import React, { useEffect, useState } from "react";
// import clsx from "clsx";
import { Container, Button, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { useDropzone } from "react-dropzone";
import { withRouter } from "react-router-dom";
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import CheckIcon from "@material-ui/icons/Check";
import MessengerHeader from "../../Homepage/Homepage1/MessengerHeader";

function LivePreviewExample(props) {
  const user = useSelector((state) => state.authUser);

  const [activeTab2] = useState("1");

  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="rounded-circle avatar-image overflow-hidden d-140 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center"
    >
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-wrapper bg-composed-wrapper">
          {/* <div className="header-top-section">
            <MessengerHeader />
          </div> */}
          <div className="app-inner-content-layout--main p-0 mb-3 h-auto">
            <div className="hero-wrapper rounded-bottom shadow-xxl">
              <div className="flex-grow-1 d-flex align-items-center">
                <div className="bg-composed-wrapper--bg rounded-bottom opacity-4" />
                <div className="bg-composed-wrapper--content px-3 pt-5">
                  {/* <Container className="pt-4"> */}
                  <div className="d-block d-md-flex align-items-start">
                    <div className="dropzone rounded-circle shadow-sm-dark mr-md-3">
                      <div
                        {...getRootProps({
                          className: "dropzone-upload-wrapper",
                        })}
                      >
                        {/* <input {...getInputProps()} /> */}
                        <div className="dropzone-inner-wrapper d-140 rounded-circle dropzone-avatar">
                          <div className="avatar-icon-wrapper d-140 rounded-circle m-2">
                            <div>
                              {isDragAccept && (
                                <div className="rounded-circle overflow-hidden d-140 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                                  <CheckIcon className="d-40" />
                                </div>
                              )}
                              {isDragReject && (
                                <div className="rounded-circle overflow-hidden d-140 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                                  <CloseTwoToneIcon className="d-60" />
                                </div>
                              )}
                              {!isDragActive && (
                                <div className="rounded-circle overflow-hidden d-140 bg-second text-center font-weight-bold text-white-50 d-flex justify-content-center align-items-center">
                                  <AccountCircleTwoToneIcon className="d-50" />
                                </div>
                              )}
                            </div>

                            {thumbs.length > 0 && <div>{thumbs}</div>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex text-white flex-column pl-md-2">
                      <div className="d-block d-md-flex align-items-center">
                        <div className="my-3 my-md-0">
                          <div className="d-flex align-items-end">
                            <div className="font-size-xxl font-weight-bold text-dark">
                              {user.user === null
                                ? ""
                                : user.user.user.fullName}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 font-size-lg text-dark">
                        Welcome to your profile{" "}
                        {user.user === null ? "" : user.user.user.fullName}
                      </div>
                    </div>
                  </div>
                  <List className="d-flex justify-content-center nav-tabs-success tabs-animated tabs-animated-shadow my-3">
                    <Button
                      selected={activeTab2 === "1"}
                      className="p-3 mx-3 rounded-lg"
                      style={{ backgroundColor: "#048cfc", color: "#fff" }}
                      onClick={(e) => {
                        if (props.authUser) {
                          window.location.href = `${process.env.REACT_APP_URL}/dashboard`;
                        }
                      }}
                    >
                      <span className="font-size-lg text-white px-2 py-1">
                        Dashboard
                      </span>
                    </Button>

                    <Button
                      selected={activeTab2 === "1"}
                      className="mx-3 rounded-lg"
                      style={{ backgroundColor: "#048cfc", color: "#fff" }}
                      onClick={(e) => {
                        if (props.authUser) {
                          window.location.href = `${process.env.REACT_APP_URL}/walletTranx`;
                        }
                      }}
                    >
                      <span className="font-size-lg text-white px-2 py-1">
                        View Wallet Transactions
                      </span>
                    </Button>
                  </List>
                  <List className="pb-5">
                    <Button
                      className="mx-3 p-3 rounded-lg"
                      style={{
                        border: `3px solid #048cfc`,
                        width: "94%",
                      }}
                    >
                      <Link
                        className="text-white"
                        to={`${process.env.REACT_APP_URL}/fundWallet`}
                      >
                        <span
                          className="font-size-lg px-2 py-1"
                          style={{ color: `rgb(0, 68, 116)` }}
                        >
                          Fund Wallet
                        </span>
                      </Link>
                    </Button>
                  </List>
                  {/* </Container> */}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default withRouter(connect(mapStateToProps, null)(LivePreviewExample));
