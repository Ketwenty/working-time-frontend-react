import React from "react";
import Alert from "./Alert";

function DismissableAlert(props) {
  return (
    <Alert
      title={props.title}
      messages={props.messages}
      type={props.type}
      className="alert-dismissible fade show"
    >
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </Alert>
  );
}
export default DismissableAlert;
