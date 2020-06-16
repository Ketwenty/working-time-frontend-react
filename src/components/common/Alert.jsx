import React from "react";

function Alert(props) {
  const defaultClassName = "alert alert-" + props.type + " ";
  const className = props.className
    ? defaultClassName + props.className
    : defaultClassName;
  const renderMessages = () => {
    if (props.messages.length > 1) {
      return (
        <ul>
          {props.messages.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      );
    }
    return props.messages[0];
  };
  return (
    <div className={className} role="alert">
      <strong>{props.title}</strong>
      {renderMessages()}
      {props.children}
    </div>
  );
}
export default Alert;
