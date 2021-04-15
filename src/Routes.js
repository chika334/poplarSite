import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ClimbingBoxLoader } from "react-spinners";
import MuiTheme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import SuspenseLoading from "./Components/Loader/Loader";

import { useSelector, connect } from "react-redux";
import { showLoader, hideLoader } from "./_actions/loading";
import ProductModal from "./Components/Homepage/Homepage1/ProductLoginModal";
// Layout Blueprints
import {
  // CollapsedSidebar,
  MinimalLayout,
  PresentationLayout,
} from "./layout-blueprints";

import PrivateRoute from "./Protect/Protect";
import ProtectRoutes from "./Protect/ProtectRoute";
import MessengerHeader from "./Components/Homepage/Homepage1/MessengerHeader";
import Pay from "./Components/paystack/pay";

// Layout components
import Modal from "./layout-components/LoginModal";
import RegisterModal from "./layout-components/RegisterModal";
import ForgotModal from "./Pages/ForgotPassword/index";
import Electric from "./layout-components/Products/Electric";
import Data from "./layout-components/Products/Data";
import Cable from "./layout-components/Products/Cable";
import Transfer from "./layout-components/Products/Transfer";
import Water from "./layout-components/Products/Water";
import Airtime from "./layout-components/Products/Airtime";
import Deposits from "./layout-components/Products/Deposits";
import FourProducts from "./Components/FourPRoducts";
import Footer from "./Components/Homepage/Homepage6";
import Header from "./Components/Homepage/Homepage1/MessengerHeader";

// Example Pages
import Overview from "./Pages/Overview";
import PageProfile from "./Pages/PageProfile";
import Settings from "./Pages/Settings";
import PageError404 from "./Pages/PageError404";
import Products from "./Pages/Products";
import WalletTranx from "./Pages/WalletTranx";
import ReportTranx from "./Pages/ReportTranx";
import FundWallet from "./Pages/FundWallet";
import debitWallet from "./Pages/debitWallet";
import DashboardCommerce from "./Pages/DashboardCommerce";
import Invoice from "./Components/PageInvoice/PageInvoice1";
import Query from "./Pages/Query/index";

import Homepage from "./Pages/Homepage";
import PageLoginOverlay from "./layout-components/LoginModal/Login";
import Service from "./layout-components/Service";
import PageRecoverOverlay from "./Pages/PageRecoverOverlay";
import BuyToken from "./Pages/ConfirmPayment";
import PaystackInvoice from "./Components/PageInvoice/PageInvoice1/PaystackInvoice";

const Routes = (props) => {
  const location = useLocation();
  const loading = useSelector((state) => state.loading.loading);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.6,
  };

  useEffect(() => {
    props.showLoader();
    setTimeout(() => {
      props.hideLoader();
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        {loading === true ? (
          <SuspenseLoading />
        ) : (
          <>
            <Suspense fallback={<SuspenseLoading />}>
              <div className="header-top-section pb-2">
                <MessengerHeader />
              </div>
              <Modal />
              <Service />
              <RegisterModal />
              <ForgotModal />
              <ProductModal />
              <Switch>
                <Redirect
                  exact
                  from={`/`}
                  to={`${process.env.REACT_APP_URL}/home`}
                />
              </Switch>
              <Route
                path={[
                  `${process.env.REACT_APP_URL}/home`,
                  `${process.env.REACT_APP_URL}/protect`,
                ]}
              >
                <PresentationLayout>
                  <Switch location={location} key={location.pathname}>
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Route
                        path={`${process.env.REACT_APP_URL}/home`}
                        exact
                        component={Homepage}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/protect`}
                        exact
                        component={ProtectRoutes}
                      />
                    </motion.div>
                  </Switch>
                </PresentationLayout>
              </Route>
              <Route
                path={[
                  `${process.env.REACT_APP_URL}/buyProducts`,
                  // `${process.env.REACT_APP_URL}/payment`,
                  `${process.env.REACT_APP_URL}/dashboard`,
                  `${process.env.REACT_APP_URL}/electric`,
                  `${process.env.REACT_APP_URL}/query/tranx`,
                  `${process.env.REACT_APP_URL}/water`,
                  `${process.env.REACT_APP_URL}/cable`,
                  `${process.env.REACT_APP_URL}/airtime`,
                  `${process.env.REACT_APP_URL}/data`,
                  `${process.env.REACT_APP_URL}/transfer`,
                  `${process.env.REACT_APP_URL}/deposits`,
                  `${process.env.REACT_APP_URL}/products`,
                  `${process.env.REACT_APP_URL}/profilepage`,
                  `${process.env.REACT_APP_URL}/buytoken`,
                  `${process.env.REACT_APP_URL}/settings`,
                  `${process.env.REACT_APP_URL}/walletTranx`,
                  `${process.env.REACT_APP_URL}/reportTranx`,
                  `${process.env.REACT_APP_URL}/fundWallet`,
                  `${process.env.REACT_APP_URL}/debitWallet`,
                  `${process.env.REACT_APP_URL}/dash`,
                  `${process.env.REACT_APP_URL}/invoice`,
                  `${process.env.REACT_APP_URL}/cardInvoice`,
                  // `/PageRegisterOverlay`,
                ]}
              >
                <PresentationLayout>
                  <Switch location={location} key={location.pathname}>
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Route
                        path={`${process.env.REACT_APP_URL}/products`}
                        exact
                        component={Products}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/cardInvoice`}
                        exact
                        component={PaystackInvoice}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/query/tranx`}
                        exact
                        component={Query}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/dashboard`}
                        exact
                        component={DashboardCommerce}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/data`}
                        exact
                        component={Data}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/airtime`}
                        exact
                        component={Airtime}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/cable`}
                        exact
                        component={Cable}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/water`}
                        exact
                        component={Water}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/electric`}
                        exact
                        component={Electric}
                      />
                      <Route
                        path={`${process.env.REACT_APP_URL}/transfer`}
                        exact
                        component={Transfer}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/buyProducts`}
                        exact
                        component={FourProducts}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/dash`}
                        exact
                        component={Overview}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/walletTranx`}
                        exact
                        component={WalletTranx}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/reportTranx`}
                        exact
                        component={ReportTranx}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/fundWallet`}
                        exact
                        component={FundWallet}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/debitWallet`}
                        exact
                        component={debitWallet}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/deposits`}
                        exact
                        component={Deposits}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/profilepage`}
                        exact
                        component={PageProfile}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/buyToken`}
                        exact
                        component={BuyToken}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/invoice`}
                        exact
                        component={Invoice}
                      />
                      <PrivateRoute
                        path={`${process.env.REACT_APP_URL}/Settings`}
                        exact
                        component={Settings}
                      />
                    </motion.div>
                  </Switch>
                  <Footer />
                  {/* </CollapsedSidebar> */}
                </PresentationLayout>
              </Route>
            </Suspense>
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default connect(null, { showLoader, hideLoader })(Routes);
