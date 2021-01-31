import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ClimbingBoxLoader } from "react-spinners";
import { ThemeProvider } from "@material-ui/styles";
import MuiTheme from "./theme";

// Layout Blueprints
import {
  CollapsedSidebar,
  MinimalLayout,
  PresentationLayout,
} from "./layout-blueprints";

import PrivateRoute from "./Protect/Protect";
import ProtectRoutes from "./Protect/ProtectRoute";

// Layout components
import Modal from "./layout-components/LoginModal";
import RegisterModal from "./layout-components/RegisterModal";
import Electric from "./layout-components/Products/Electric";
import Data from "./layout-components/Products/Data";
import Cable from "./layout-components/Products/Cable";
import Transfer from "./layout-components/Products/Transfer";
import Water from "./layout-components/Products/Water";
import Airtime from "./layout-components/Products/Airtime";
import Deposits from "./layout-components/Products/Deposits";

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

const Homepage = lazy(() => import("./Pages/Homepage"));
const PageLoginOverlay = lazy(() =>
  import("./layout-components/LoginModal/Login")
);
const PageRegisterOverlay = lazy(() => import("./Pages/PageRegisterOverlay"));
const PageRecoverOverlay = lazy(() => import("./Pages/PageRecoverOverlay"));
const BuyToken = lazy(() => import("./Pages/ConfirmPayment"));

const Routes = () => {
  const location = useLocation();

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

  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                <div className="d-flex align-items-center flex-column px-4">
                  <ClimbingBoxLoader color={"#3c44b1"} loading={true} />
                </div>
                <div className="text-muted font-size-xl text-center pt-3">
                  Please wait while we load the page
                  <span className="font-size-lg d-block text-dark">
                    Welcome to `${process.env.REACT_APP_NAME}`
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Modal />
          <RegisterModal />
          <Switch>
            <Redirect
              exact
              from="/"
              to={`${process.env.REACT_APP_URL}/Homepage`}
            />
            <Route
              path={[
                `${process.env.REACT_APP_URL}/Homepage`,
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
                      path={`${process.env.REACT_APP_URL}/Homepage`}
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
                `${process.env.REACT_APP_URL}/Dashboard`,
                `${process.env.REACT_APP_URL}/Electric`,
                `${process.env.REACT_APP_URL}/Water`,
                `${process.env.REACT_APP_URL}/Cable`,
                `${process.env.REACT_APP_URL}/Airtime`,
                `${process.env.REACT_APP_URL}/Data`,
                `${process.env.REACT_APP_URL}/Transfer`,
                `${process.env.REACT_APP_URL}/Deposits`,
                `${process.env.REACT_APP_URL}/Products`,
                `${process.env.REACT_APP_URL}/PageProfile`,
                `${process.env.REACT_APP_URL}/buytoken`,
                `${process.env.REACT_APP_URL}/Settings`,
                `${process.env.REACT_APP_URL}/walletTranx`,
                `${process.env.REACT_APP_URL}/reportTranx`,
                `${process.env.REACT_APP_URL}/fundWallet`,
                `${process.env.REACT_APP_URL}/debitWallet`,
                `${process.env.REACT_APP_URL}/PageRegisterOverlay`,
              ]}
            >
              <CollapsedSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/PageRegisterOverlay`}
                      component={PageRegisterOverlay}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Dashboard`}
                      component={Overview}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/walletTranx`}
                      component={WalletTranx}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/reportTranx`}
                      component={ReportTranx}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/fundWallet`}
                      component={FundWallet}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/debitWallet`}
                      component={debitWallet}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Deposits`}
                      component={Deposits}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Transfer`}
                      component={Transfer}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Data`}
                      component={Data}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Airtime`}
                      component={Airtime}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Cable`}
                      component={Cable}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Water`}
                      component={Water}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Electric`}
                      component={Electric}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Products`}
                      component={Products}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/PageProfile`}
                      exact
                      component={PageProfile}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/buyToken`}
                      component={BuyToken}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/invoice`}
                      component={BuyToken}
                    />
                    <PrivateRoute
                      path={`${process.env.REACT_APP_URL}/Settings`}
                      component={Settings}
                    />
                  </motion.div>
                </Switch>
              </CollapsedSidebar>
            </Route>

            <Route
              path={[
                `${process.env.REACT_APP_URL}/PageLoginOverlay`,
                `${process.env.REACT_APP_URL}/PageRecoverOverlay`,
                `${process.env.REACT_APP_URL}/PageError404`,
              ]}
            >
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route
                      path={`${process.env.REACT_APP_URL}/PageLoginOverlay`}
                      component={PageLoginOverlay}
                    />

                    <Route
                      path={`${process.env.REACT_APP_URL}/PageRecoverOverlay`}
                      component={PageRecoverOverlay}
                    />
                    <Route path="/PageError404" component={PageError404} />
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
          </Switch>
          {/* Show the modal when a background page is set */}
          {/* {background && <Route path={`${process.env.REACT_APP_URL}/PageLoginOverlay`} children={<Modal />} />} */}
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
