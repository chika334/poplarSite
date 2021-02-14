import React from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector, connect } from "react-redux";
import { hideProductModal } from "../../../_actions/ProductLoginDisplay";
// import ForgotPassword from "./forgotPassword";
import Tab1 from "../../../layout-components/Tab/Tab1";

function SimpleModal(props) {
  const modal = useSelector((state) => state.productModal.autoProductModal);
  // const user = useSelector(state => state.authUser.isAuthenticated)

  const body = (
    <div className="card pl-3 pr-3 align-items-center">
      <div className="app-wrapper">
        <Tab1 />
      </div>
    </div>
  );

  if (!modal) return null;

  return (
    <div>
      {/* <Modal
        open={modal}
        onClose={props.hideProductModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="pt-4 pb-4 d-flex align-item-center justify-content-center"
      >
        <>{body}</>
      </Modal> */}
    </div>
  );
}

export default connect(null, { hideProductModal })(SimpleModal);
