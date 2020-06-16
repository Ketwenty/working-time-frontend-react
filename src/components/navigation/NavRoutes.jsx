import loadable from "@loadable/component";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "./Loading";
import SecureRoute from "./SecureRoute";

// TODO use React.lazy instead of @loadable
const HomePage = loadable(() => import("../pages/HomePage"), {
  fallback: <Loading />,
});

// TODO use React.lazy instead of @loadable
const AboutPage = loadable(() => import("../pages/AboutPage"), {
  fallback: <Loading />,
});

// TODO use React.lazy instead of @loadable
const AccountPage = loadable(() => import("../pages/AccountPage"), {
  fallback: <Loading />,
});

// TODO use React.lazy instead of @loadable
const ProfilePage = loadable(() => import("../pages/ProfilePage"), {
  fallback: <Loading />,
});

// TODO use React.lazy instead of @loadable
const TimePage = loadable(() => import("../pages/TimePage"), {
  fallback: <Loading />,
});

// TODO use React.lazy instead of @loadable
const AuthPage = loadable(() => import("../pages/AuthPage"), {
  fallback: <Loading />,
});

export default function NavRoutes() {
  return (
    <Switch>
      <SecureRoute exact path="/profil" component={ProfilePage} />
      <SecureRoute exact path="/time" component={TimePage} />
      <SecureRoute exact path="/compte" component={AccountPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/auth" component={AuthPage} />
      <SecureRoute
        exact
        path="/"
        component={TimePage}
        publicComponent={HomePage}
      />
      <Route path="*" component={() => <p>Vous êtes perdu ?!</p>} />
    </Switch>
  );
}
