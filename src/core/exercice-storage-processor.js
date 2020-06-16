import StorageProcessor from "./StorageProcessor";

class ExerciceStorageProcessor extends StorageProcessor {
  findByName(label) {
    if (label) {
      return super
        .findAll()
        .filter((a) => a.label.toLowerCase().includes(label.toLowerCase()));
    }
    return [];
  }

  findById(id) {
    if (id) {
      const results = super.findAll().filter((a) => a.id === id);
      return results.length > 0 ? results[0] : undefined;
    }
    return [];
  }
}

export default ExerciceStorageProcessor;
