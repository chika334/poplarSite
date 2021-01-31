import React from "react";
import Modal from "@material-ui/core/Modal";
import Register from "./Register";
import { hideRegisterModal } from "../../_actions/registerModal";
import { useSelector, connect } from "react-redux";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SimpleModal(props) {
  const autoShowModal = useSelector(
    (state) => state.modalRegister.autoShowModal
  );

  const body = (
    <div className="card pl-3 pr-3 align-items-center">
      <div className="app-wrapper">
        <Register />
      </div>
      <Button
        onClick={props.hideRegisterModal}
        className="px-4 d-flex bg-danger align-items-center justify-content-center text-dark-50"
      >
        <FontAwesomeIcon icon={["fas", "times"]} />
      </Button>
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
        className="pt-4 pb-4 d-flex align-item-center justify-content-center"
      >
        <>{body}</>
      </Modal>
    </div>
  );
}

export default connect(null, { hideRegisterModal })(SimpleModal);
