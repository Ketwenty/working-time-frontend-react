import React, { Fragment } from "react";
import StorageProcessorFactory from "../../core/StorageProcessorFactory";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";

export default class AuthPage extends React.Component {
  render() {
    // TODO utiliser Redux
    StorageProcessorFactory.getAuthSP().drop();
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm">
            <h2>Je crée un compte:</h2>
            <SignUpForm />
          </div>
          <div className="col-sm">
            <h2>Je me connecte:</h2>
            <SignInForm />
          </div>
        </div>
      </Fragment>
    );
  }
}
