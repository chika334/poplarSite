import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Container, Button, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { withRouter } from "react-router-dom";
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import CheckIcon from "@material-ui/icons/Check";
import hero1 from "../../../assets/images/hero-bg/hero-8.jpg";

function LivePreviewExample(props) {
  const user = useSelector((state) => state.authUser);
  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [activeTab2, setActiveTab2] = useState("1");

  const toggle2 = (tab) => {
    if (activeTab2 !== tab) setActiveTab2(tab);
  };

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
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main bg-white p-0">
          <div className="hero-wrapper mx-5 rounded-bottom shadow-xxl bg-composed-wrapper bg-second">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div
                className="bg-composed-wrapper--image rounded-bottom opacity-3"
                style={{ backgroundImage: "url(" + hero1 + ")" }}
              />
              <div className="bg-composed-wrapper--bg rounded-bottom bg-deep-sky opacity-4" />
              <div className="bg-composed-wrapper--content px-3 pt-5">
                <Container className="pt-4">
                  <div className="d-block d-md-flex align-items-start">
                    <div className="dropzone rounded-circle shadow-sm-dark mr-md-3">
                      <div
                        {...getRootProps({
                          className: "dropzone-upload-wrapper",
                        })}
                      >
                        <input {...getInputProps()} />
                        <div className="dropzone-inner-wrapper d-140 rounded-circle dropzone-avatar">
                          <div className="avatar-icon-wrapper d-140 rounded-circle m-2">
                            <Button
                              onClick={open}
                              className="btn-first avatar-button badge shadow-sm-dark btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle badge-first text-white"
                            >
                              <PublishTwoToneIcon className="d-20" />
                            </Button>

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
                            <div className="font-size-xxl font-weight-bold">
                              {user.user === null
                                ? ""
                                : user.user.user.fullName}
                            </div>
                          </div>
                          <div className="font-weight-bold mt-1 font-size-lg text-white-50">
                            {user.user === null ? "" : user.user.user.fullName}
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 font-size-lg">
                        Welcome to your profile{" "}
                        {user.user === null ? "" : user.user.user.fullName}
                      </div>
                    </div>
                  </div>
                  <List className="d-flex nav-tabs justify-content-center nav-tabs-success tabs-animated tabs-animated-shadow my-5">
                    <Button
                      selected={activeTab2 === "1"}
                      className="p-4 bg-white-10 rounded-lg"
                    >
                      <Link to={`${process.env.REACT_APP_URL}/Dashboard`}>
                        <span className="font-size-lg text-white px-2 py-1">
                          Dashboard
                        </span>
                      </Link>
                    </Button>

                    <Button
                      selected={activeTab2 === "1"}
                      className="bg-white-10 mx-3 rounded-lg"
                    >
                      <Link to={`${process.env.REACT_APP_URL}/walletTranx`}>
                        <span className="font-size-lg text-white px-2 py-1">
                          view wallet Transactions
                        </span>
                      </Link>
                    </Button>
                  </List>
                </Container>
              </div>
            </div>
          </div>
          <div>
            <div className="m-2">
              <Link
                className="text-white"
                to={`${process.env.REACT_APP_URL}/fundWallet`}
              >
                <Button className="rounded-lg bg-primary w-50 text-white">
                  <span className="font-size-lg text-white px-2 py-1">
                    Fund Wallet
                  </span>
                </Button>
              </Link>
              <Link
                className="text-white"
                to={`${process.env.REACT_APP_URL}/debitWallet`}
              >
                <Button className="rounded-lg bg-primary w-50">
                  <span className="font-size-lg text-white px-2 py-1">
                    Debit Wallet
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(LivePreviewExample);
