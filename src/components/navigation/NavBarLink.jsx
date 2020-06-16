import React from "react";
import { NavLink } from "react-router-dom";
import SignInService from "../../services/local/sign-in-service";

export default function NavBarLink({
  path,
  title,
  protectedLink = false,
  publicLink = false,
  publicTitle,
}) {
  const logged = SignInService.getLoggedUser();
  console.log("link logged" + logged);

  // only logged user can't see it
  const canShowProtectedLink = true === logged && true === protectedLink;
  // only not logged user can't see it
  const canShowPublicLink = false === logged && true === publicLink;
  // both logged or not logged user can't see it
  const canShowCommonLink = true === protectedLink && true === publicLink;

  if (canShowPublicLink && publicTitle) {
    title = Object.assign({}, publicTitle);
  }
  console.log(title);
  if (canShowProtectedLink || canShowPublicLink || canShowCommonLink) {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to={path}>
          {title}
        </NavLink>
      </li>
    );
  }

  return null;
}
