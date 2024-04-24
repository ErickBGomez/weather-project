class Storage {
  #savedItem;

  constructor(name) {
    this.name = name;
  }

  saveItem(item) {
    this.#savedItem = item;

    if (typeof item === "object") {
      localStorage.setItem(this.name, JSON.stringify(this.#savedItem));
      return;
    }

    localStorage.setItem(this.name, this.#savedItem);
  }

  getItem() {
    if (typeof this.#savedItem === "object") {
      console.log("object");
      return JSON.parse(localStorage.getItem(this.name));
    }

    return localStorage.getItem(this.name);
  }

  checkSavedItem() {
    return Boolean(this.getItem());
  }
}

export default Storage;
