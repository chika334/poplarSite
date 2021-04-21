import React from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector, connect } from "react-redux";
import { Button, Card } from "@material-ui/core";
import { hideServiceModal } from "../../_actions/modal";

function SimpleModal(props) {
  const modal = useSelector((state) => state.service.autoModal);

  const body = (
    <Card
      style={{
        padding: "17%",
      }}
    >
      <h4 className="text-center">Service Unavailable</h4>
      <div
        style={{
          display: "flex",
          paddingTop: "20px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button onClick={props.hideServiceModal}>Ok</Button>
      </div>
    </Card>
  );

  if (!modal) return null;

  return (
    <div>
      <Modal
        open={modal}
        onClose={props.hideServiceModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          paddingTop: "15%",
          paddingLeft: "37%",
          paddingRight: "37%",
          paddingBottom: "10%",
        }}
      >
        <>{body}</>
      </Modal>
    </div>
  );
}

export default connect(null, { hideServiceModal })(SimpleModal);
