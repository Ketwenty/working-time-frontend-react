class StorageProcessor {
  constructor(key) {
    this.key = key;
    this.initLocalStorage(this.key);
  }
  /**
   * creating an empty array of Aliment if not exists
   */
  initLocalStorage() {
    if (!localStorage.getItem(this.key)) {
      this.drop();
    }
  }

  /**
   * retrieving all the aliments form the list
   */
  findAll() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  findById(id) {
    if (id) {
      const results = this.findAll().filter((a) => a.id === id);
      return results.length > 0 ? results[0] : undefined;
    }
    return undefined;
  }

  /**
   * adding a new aliment to the list
   * @param {Object} aliment
   */
  add(element) {
    let list = this.findAll();
    list.push(element);
    localStorage.setItem(this.key, JSON.stringify(list));
  }

  count() {
    return this.findAll().length;
  }

  drop() {
    localStorage.setItem(this.key, JSON.stringify([]));
  }
}

export default StorageProcessor;
