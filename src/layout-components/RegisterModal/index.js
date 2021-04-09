import React from "react";
import Modal from "@material-ui/core/Modal";
import Register from "./Register";
import { hideRegisterModal } from "../../_actions/registerModal";
import { useSelector, connect } from "react-redux";
// import { Button } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SimpleModal(props) {
  const autoShowModal = useSelector(
    (state) => state.modalRegister.autoShowModal
  );

  const body = (
    <div className="pl-3 pr-3 align-items-center">
      <div className="">
        <Register />
      </div>
    </div>
  );

  if (!autoShowModal) return null;

  return (
    <div>
      <Modal
        open={autoShowModal}
        onClose={props.hideRegisterModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="pt-2 pb-4 d-flex align-item-center justify-content-center"
        style={{overflow: "auto"}}
      >
        <>{body}</>
      </Modal>
    </div>
  );
}

export default connect(null, { hideRegisterModal })(SimpleModal);
