import React from "react";
import { Redirect, Route } from "react-router-dom";
import SignInService from "../../services/local/sign-in-service";

export default function SecureRoute({ publicComponent, ...othersProps }) {
  const authorizedUser = SignInService.getLoggedUser();
  console.log(authorizedUser);

  const renderDefault = publicComponent ? (
    <Route {...othersProps} component={publicComponent} />
  ) : (
    <Redirect to="/auth" />
  );

  return authorizedUser ? <Route {...othersProps} /> : renderDefault;
}
