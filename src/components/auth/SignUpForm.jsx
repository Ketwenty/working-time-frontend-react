import React from "react";

export default function SignUpForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Veuillez saisir votre adresse email."
        />
        <small id="emailHelp" className="form-text text-muted">
          Cet email sera utile pour activer votre compte et vous connecter par
          la suite.
        </small>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          J'accepte les <a href="#">conditions d'utilisation</a>.
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Je m'enregistrer
      </button>
    </form>
  );
}
