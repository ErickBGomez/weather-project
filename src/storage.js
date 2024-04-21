class Storage {
  constructor(name) {
    this.name = name;
  }

  saveItem(item) {
    if (typeof item === "object") {
      localStorage.setItem(this.name, JSON.stringify(item));
      return;
    }

    localStorage.setItem(this.name, item);
  }

  getItem() {
    if (typeof item === "object") {
      return JSON.parse(localStorage.getItem(this.name));
    }

    return localStorage.getItem(this.name);
  }

  checkSavedItem() {
    return Boolean(this.getItem());
  }
}

export default Storage;
