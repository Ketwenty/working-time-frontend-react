import React from "react";
import { NavLink } from "react-router-dom";
import NavBarLink from "./NavBarLink";

// TODO hide link according to the auth status using either redux, recoil, or useReducer
export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Temps de travail
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavBarLink
            title="A propos"
            path="/about"
            publicLink={true}
            protectedLink={true}
          />
          <NavBarLink title="Temps" path="/time" protectedLink={true} />
          <NavBarLink title="Profil" path="/profile" protectedLink={true} />
          <NavBarLink title="Compte" path="/account" protectedLink={true} />
          <NavBarLink
            title="Connexion"
            path="/auth"
            publicLink={true}
            protectedLink={true}
            defaultTitle="Déconnexion"
          />
        </ul>
      </div>
    </nav>
  );
}
