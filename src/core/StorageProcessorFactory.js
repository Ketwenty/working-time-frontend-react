import AuthSP from "./AuthSP";
import ExerciceStorageProcessor from "./exercice-storage-processor";

class StorageProcessorFactory {
  static getExerciceSP() {
    return new ExerciceStorageProcessor("KEY_ALIMENTS");
  }

  static getWorkAreaSP() {
    return new ExerciceStorageProcessor("KEY_WORK_AREA");
  }

  static getAuthSP() {
    return new AuthSP("KEY_AUTH");
  }
}

export default StorageProcessorFactory;
