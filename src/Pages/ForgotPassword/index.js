import React from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector, connect } from "react-redux";
import { hideForgotModal } from "../../_actions/forgotModal";
import ForgotPassword from "./forgotPassword";

function SimpleModal(props) {
  const modal = useSelector((state) => state.modalForgot.autoForgotModal);

  const body = (
    <div className="">
      <div className="">
        <ForgotPassword />
      </div>
    </div>
  );

  if (!modal) return null;

  return (
    <div>
      <Modal
        open={modal}
        onClose={props.hideForgotModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="p-4 d-flex align-item-center justify-content-center"
      >
        <>{body}</>
      </Modal>
    </div>
  );
}

export default connect(null, { hideForgotModal })(SimpleModal);
