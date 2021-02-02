import React from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector, connect } from "react-redux";
import { hideResetModal } from '../../_actions/ResetPassword'
import ResetPassword from "./RestPassword";

function SimpleModal(props) {
  const modal = useSelector((state) => state.modal.autoResetModal);

  const body = (
    <div className="card m-5 align-items-center">
      <div className="">
        <ResetPassword />
      </div>
    </div>
  );

  if (!modal) return null;

  return (
    <div>
      <Modal
        open={modal}
        onClose={props.hideResetModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="m-5 p-5 d-flex align-item-center justify-content-center"
      >
        <>{body}</>
      </Modal>
    </div>
  );
}

export default connect(null, { hideResetModal })(SimpleModal);
