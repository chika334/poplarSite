import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { signin } from "../../_actions/userAction";
import { clearErrors } from "../../_actions/errorAction";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { showLoader, hideLoader } from "../../_actions/loading";
import { InputAdornment, Button, TextField } from "@material-ui/core";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import { withRouter, Redirect } from "react-router-dom";
import { hideModal, showModal } from "../../_actions/modal";
import { showForgotModal } from "../../_actions/forgotModal";
// import Grid from "@material-ui/core/Grid";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  static propTypes = {
    authUser: PropTypes.object.isRequired,
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ error: error.message.message });
        this.props.hideLoader();
      }
    } else {
      this.check();
    }
  }

  check = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.sendRedirect();
      this.props.hideLoader();
      this.props.hideModal();
      this.props.history.push(`${process.env.REACT_APP_URL}/profilepage`);
      // window.location.href = `${process.env.REACT_APP_URL}/profilepage`;
      // <Redirect to={`${process.env.REACT_APP_URL}/profilepage`} />
    }
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    if (email === "" || password === "") {
      this.setState({ error: "Please fill all inputs" });
      return;
    }

    const user = {
      email,
      password,
    };
    this.props.signin(user);
    this.props.showLoader();
  };

  forgotPassword = (e) => {
    this.props.showForgotModal();
  };

  render() {
    return (
      <div className="app-wrapper bg-white">
        <div className="hero-wrapper w-100">
          <div className="flex-grow-1 w-100 align-items-center">
            <div>
              <div style={{ position: "relative", left: "270px" }}>
                <Button
                  onClick={this.props.hideModal}
                  className="px-4 text-dark-50 mt-3"
                >
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </Button>
              </div>
              <div className="divider-v divider-v-lg d-none d-lg-block" />
              <div className="text-center mt-4">
                <div className="mb-0 text-black-50">
                  <h1 className="font-size-xxl mb-1 font-weight-bold">Login</h1>
                  <p className="mb-0 text-black-50 mt-5">
                    Fill in the fields below to login to your account
                  </p>
                </div>
              </div>
              <div className="py-4">
                <div>
                  <div className="mb-4">
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-email"
                      label="Email address"
                      onChange={this.handleChange("email")}
                      value={this.state.email || ""}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineTwoToneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-password"
                      label="Password"
                      onChange={this.handleChange("password")}
                      type="password"
                      value={this.state.password || ""}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockTwoToneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  {this.state.error && (
                    <Typography
                      className="text-center"
                      component="p"
                      color="error"
                    >
                      {this.state.error}
                    </Typography>
                  )}
                  <div className="d-inline-flex">
                    <div className="text-center py-2">
                      <Button
                        onClick={(e) => this.handleClick(e)}
                        className="btn-second font-weight-bold p-3 my-2"
                      >
                        Submit
                      </Button>
                    </div>
                    <div className="text-center">
                      <Button
                        onClick={this.forgotPassword}
                        className="btn bg-white font-weight-bold my-2"
                      >
                        forgot Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default withRouter(
  connect(mapStateToProps, {
    signin,
    clearErrors,
    showLoader,
    showForgotModal,
    hideLoader,
    showModal,
    hideModal,
  })(Login)
);

// import React, { Component } from "react";
// // import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { connect, useSelector } from "react-redux";
// import { signin } from "../../_actions/userAction";
// import { clearErrors } from "../../_actions/errorAction";
// import PropTypes from "prop-types";
// import Typography from "@material-ui/core/Typography";
// import { showLoader, hideLoader } from "../../_actions/loading";
// import { InputAdornment, Button, TextField } from "@material-ui/core";
// import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
// import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
// import SuspenseLoading from "../../Components/Loader/Loader";
// import { withRouter } from "react-router-dom";
// import { hideModal, showModal } from "../../_actions/modal";
// import { showForgotModal } from "../../_actions/forgotModal";
// import { AnimatePresence, motion } from "framer-motion";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       error: "",
//     };
//   }

//   static propTypes = {
//     authUser: PropTypes.object.isRequired,
//     signin: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,
//     clearErrors: PropTypes.func.isRequired,
//   };

//   componentDidUpdate(prevProps) {
//     const { error, isAuthenticated } = this.props;
//     if (error !== prevProps.error) {
//       // check for login error
//       if (error.id === "LOGIN_FAIL") {
//         // this.props.showModal()
//         this.props.hideLoader();
//         this.setState({ error: error.message.message });
//       }
//     }
//     // this.check();
//     // if(isAuthenticated) {
//     //   // this.props.history.push(`${process.env.REACT_APP_URL}/profilepage`);
//     //   console.log("GOOD");
//     // } else {
//     //   console.log("BAD");
//     // }
//   }

//   // componentDidMount() {
//   //   const { error } = this.props
//   //   if(error.status === 400) {
//   //     this.props.hideLoader()
//   //   }
//   // }

//   // check = () => {
//   //   const { isAuthenticated } = this.props;
//   //   console.log(isAuthenticated);
//   //   if (isAuthenticated === true) {
//   //     this.sendRedirect();
//   //     // this.props.hideModal();
//   //     // this.props.hideLoader();
//   //     this.props.history.push(`${process.env.REACT_APP_URL}/profilepage`);
//   //     // setTimeout(() => {
//   //     //   // let redirect = localStorage.getItem("redirectPage");
//   //     //   // window.location.href = `${process.env.REACT_APP_URL}/profilepage`;
//   //     // }, 2000);
//   //   }
//   // };

//   sendRedirect = () => {
//     this.props.clearErrors();
//   };

//   handleChange = (name) => (event) => {
//     this.setState({ [name]: event.target.value });
//   };

//   handleClick = (e) => {
//     const { email, password } = this.state;
//     if (email === "" || password === "") {
//       this.setState({ error: "Please fill all inputs" });
//       return;
//     }

//     const user = {
//       email,
//       password,
//     };

//     this.props.signin(user);
//     this.props.showLoader();
//   };

//   forgotPassword = (e) => {
//     this.props.showForgotModal();
//   };

//   render() {
//     if (this.props.isAuthenticated) {
//       this.props.history.push(`${process.env.REACT_APP_URL}/profilepage`);
//     }
//     return (
//       <>
//         <div className="bg-white">
//           <div className="w-100">
//             <div className="flex-grow-1 w-100 align-items-center">
//               <div>
//                 <div style={{ position: "relative", left: "270px" }}>
//                   <Button
//                     onClick={this.props.hideModal}
//                     className="px-4 text-dark-50 mt-3"
//                   >
//                     <FontAwesomeIcon icon={["fas", "times"]} />
//                   </Button>
//                 </div>
//                 <div className="divider-v divider-v-lg d-none d-lg-block" />
//                 <div className="text-center mt-4">
//                   <div className="mb-0 text-black-50">
//                     <h1 className="font-size-xxl mb-1 font-weight-bold">
//                       Login
//                     </h1>
//                     <p className="mb-0 text-black-50 mt-5">
//                       Fill in the fields below to login to your account
//                     </p>
//                   </div>
//                 </div>
//                 <div className="py-4">
//                   <div>
//                     <div className="mb-4">
//                       <TextField
//                         fullWidth
//                         variant="outlined"
//                         id="textfield-email"
//                         label="Email address"
//                         onChange={this.handleChange("email")}
//                         value={this.state.email || ""}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <MailOutlineTwoToneIcon />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <TextField
//                         fullWidth
//                         variant="outlined"
//                         id="textfield-password"
//                         label="Password"
//                         onChange={this.handleChange("password")}
//                         type="password"
//                         value={this.state.password || ""}
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <LockTwoToneIcon />
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     </div>
//                     {this.state.error && (
//                       <Typography
//                         className="text-center"
//                         component="p"
//                         color="error"
//                       >
//                         {this.state.error}
//                       </Typography>
//                     )}
//                     <div className="d-inline-flex">
//                       <div className="text-center py-2">
//                         <Button
//                           onClick={this.handleClick}
//                           className="btn-second font-weight-bold p-3 my-2"
//                         >
//                           Submit
//                         </Button>
//                       </div>
//                       <div className="text-center">
//                         <Button
//                           onClick={this.forgotPassword}
//                           className="btn bg-white font-weight-bold my-2"
//                         >
//                           forgot Password
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.authUser.isAuthenticated,
//   authUser: state.authUser,
//   error: state.error,
//   loading: state.loading.loading,
// });

// export default withRouter(
//   connect(mapStateToProps, {
//     signin,
//     clearErrors,
//     showLoader,
//     showForgotModal,
//     hideLoader,
//     showModal,
//     hideModal,
//   })(Login)
// );

// // const Login = (props) => {
// //   const isAuthenticated = useSelector(
// //     (state) => state.authUser.isAuthenticated
// //   );
// //   const authUser = useSelector((state) => state.authUser);
// //   const errors = useSelector((state) => state.error);
// //   const [values, setValues] = useState({
// //     email: "",
// //     password: "",
// //     error: "",
// //   });

// //   const { email, password, error } = values;

// //   useEffect(() => {
// //     if (isAuthenticated) {
// //       console.log(isAuthenticated);
// //     } else {
// //       console.log("BAd");
// //     }
// //   });

// //   const handleChange = (name) => (event) => {
// //     setValues({ ...values, [name]: event.target.value });
// //   };

// //   const handleClick = (e) => {
// //     // const { email, password } = this.state;
// //     if (email === "" || password === "") {
// //       setValues({ ...values, error: "Please fill all inputs" });
// //       return;
// //     }

// //     const user = {
// //       email,
// //       password,
// //     };

// //     // props.signin(user)
// //     // signin(user).then(data => {
// //     //   if(data.error) {
// //     //     console.log(data.error);
// //     //     // setValues({ ...values, error: data.error })
// //     //   } else {
// //     //     console.log("User");
// //     //   }
// //     // })
// //     props.showLoader();
// //   };

// //   const forgotPassword = (e) => {
// //     props.showForgotModal();
// //   };

// //   return (
// //     <div>
// //       <div className="bg-white">
// //         <div className="w-100">
// //           <div className="flex-grow-1 w-100 align-items-center">
// //             <div>
// //               <div style={{ position: "relative", left: "270px" }}>
// //                 <Button
// //                   onClick={props.hideModal}
// //                   className="px-4 text-dark-50 mt-3"
// //                 >
// //                   <FontAwesomeIcon icon={["fas", "times"]} />
// //                 </Button>
// //               </div>
// //               <div className="divider-v divider-v-lg d-none d-lg-block" />
// //               <div className="text-center mt-4">
// //                 <div className="mb-0 text-black-50">
// //                   <h1 className="font-size-xxl mb-1 font-weight-bold">Login</h1>
// //                   <p className="mb-0 text-black-50 mt-5">
// //                     Fill in the fields below to login to your account
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="py-4">
// //                 <div>
// //                   <div className="mb-4">
// //                     <TextField
// //                       fullWidth
// //                       variant="outlined"
// //                       id="textfield-email"
// //                       label="Email address"
// //                       onChange={handleChange("email")}
// //                       value={email || ""}
// //                       InputProps={{
// //                         startAdornment: (
// //                           <InputAdornment position="start">
// //                             <MailOutlineTwoToneIcon />
// //                           </InputAdornment>
// //                         ),
// //                       }}
// //                     />
// //                   </div>
// //                   <div className="mb-3">
// //                     <TextField
// //                       fullWidth
// //                       variant="outlined"
// //                       id="textfield-password"
// //                       label="Password"
// //                       onChange={handleChange("password")}
// //                       type="password"
// //                       value={password || ""}
// //                       InputProps={{
// //                         startAdornment: (
// //                           <InputAdornment position="start">
// //                             <LockTwoToneIcon />
// //                           </InputAdornment>
// //                         ),
// //                       }}
// //                     />
// //                   </div>
// //                   {error && (
// //                     <Typography
// //                       className="text-center"
// //                       component="p"
// //                       color="error"
// //                     >
// //                       {error}
// //                     </Typography>
// //                   )}
// //                   <div className="d-inline-flex">
// //                     <div className="text-center py-2">
// //                       <Button
// //                         onClick={handleClick}
// //                         className="btn-second font-weight-bold p-3 my-2"
// //                       >
// //                         Submit
// //                       </Button>
// //                     </div>
// //                     <div className="text-center">
// //                       <Button
// //                         onClick={forgotPassword}
// //                         className="btn bg-white font-weight-bold my-2"
// //                       >
// //                         forgot Password
// //                       </Button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default Login;

// // export default withRouter(
// //   connect(null, {
// //     signin,
// //     clearErrors,
// //     showLoader,
// //     showForgotModal,
// //     hideLoader,
// //     showModal,
// //     hideModal,
// //   })(Login)
// // );
