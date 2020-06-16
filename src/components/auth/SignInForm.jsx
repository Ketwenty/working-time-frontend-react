import React from "react";
import { withRouter } from "react-router-dom";
import SignInService from "../../services/local/sign-in-service";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      secret: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const logged = SignInService.checkForm(this.state);
    const path = logged ? "/profil" : "/auth";
    this.props.history.push(path);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputEmail">Identifiant</label>

          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="id"
            aria-describedby="emailHelp"
            placeholder="Veuillez saisir votre email de connexion."
            value={this.state.id}
            onChange={this.handleFormChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            C'est l'adresse email que vous avez utiliser lors de votre
            enregistrement.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="secret"
            placeholder="Veuillez saisir votre mot de passe"
            value={this.state.secret}
            onChange={this.handleFormChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Entrer
        </button>
      </form>
    );
  }
}
// Pour avoir accès à l'objet history sans HOC (Composant d'ordre supérieur)
export default withRouter(SignInForm);
