import StorageProcessorFactory from "../../core/StorageProcessorFactory";

export default class SignInService {
  static checkForm({ id, secret }) {
    const fakeSecret = "C0C044!";
    const fakeId = "coco44@coco44.fr";
    if (id === fakeId && secret === fakeSecret) {
      const auth = {
        user: {
          id: fakeId,
        },
      };
      console.log("Connected");
      // TODO utiliser Redux
      StorageProcessorFactory.getAuthSP().drop();
      StorageProcessorFactory.getAuthSP().add(auth);
      return true;
    }
    console.log("Auth fail");
    return false;
  }

  static getLoggedUser() {
    // TODO utiliser Redux
    const foundAuthorised = StorageProcessorFactory.getAuthSP().findAll();
    if (foundAuthorised && foundAuthorised.length > 0) {
      return foundAuthorised[0];
    }
    return undefined;
  }
}
