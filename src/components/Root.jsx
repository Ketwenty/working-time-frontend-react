// import "bootswatch/dist/cosmo/bootstrap.min.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import React from "react";
import SignInService from "../services/local/sign-in-service";
import DismissableAlert from "./common/DismissableAlert";
import NavBar from "./navigation/NavBar";
import NavRoutes from "./navigation/NavRoutes";
import "./root.css";

export default function Root() {
  // this.secret = "pump44";
  // this.idGenerator = new IdGenerator();
  // this.consumptionSP = StorageProcessorFactory.getConsumptionSP();

  // consumedAliments: this.consumptionSP.findByCurrentIsoDate(),
  // TODO utiliser Redux
  const logged = SignInService.getLoggedUser();
  return (
    <>
      <NavBar logged={logged} />
      <div className="container mt-4">
        <DismissableAlert
          title="!!! Attention - Ce site est une version beta."
          messages={[
            "Les données que vous saisissez sont enregistrés dans votre navigateur. Si vous videz le cache elles seront perdues.",
            "Aussi, nous vous recommandons d'utiliser le navigateur Google Chrome.",
          ]}
          type="info"
        />
        <NavRoutes setAuthUser="setAuthUser" />
        {/* TODO Footer bar */}
        <footer>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
