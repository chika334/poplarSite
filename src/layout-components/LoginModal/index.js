import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector, connect } from "react-redux";
import Login from "./Login";
// import { Button } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hideModal } from "../../_actions/modal";
// import Product from "./Product";

function SimpleModal(props) {
  const modal = useSelector((state) => state.modal.autoModal);

  const body = (
    <div className="card pl-3 pr-3 align-items-center">
      <div className="app-wrapper">
        <Login />
      </div>
    </div>
  );

  if (!modal) return null;

  return (
    <div>
      <Modal
        open={modal}
        onClose={props.hideModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="pt-4 pb-4 d-flex align-item-center justify-content-center"
        // style={{
        //   maxHeight: "20%",
        // }}
      >
        <>{body}</>
      </Modal>
    </div>
  );
}

export default connect(null, { hideModal })(SimpleModal);
