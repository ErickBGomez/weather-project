class Dialog {
  // Private methods
  #dialog;

  constructor(id) {
    this.id = id;
  }

  // Private methods

  // Public methods
  setDialogContent(
    contentCallback,
    buttons = [{ name: "button", type: "button", label: "Button" }],
  ) {
    const dialog = document.createElement("dialog");
    dialog.id = this.id;
    const dialogButtons = document.createElement("div");
    dialogButtons.className = "buttons";

    dialog.appendChild(contentCallback());

    buttons.forEach((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.className = button.name;
      buttonElement.type = button.type;
      buttonElement.textContent = button.label;
      dialogButtons.appendChild(buttonElement);
    });

    dialog.appendChild(dialogButtons);

    this.#dialog = dialog;
  }

  showDialog() {
    if (!this.#dialog) return;
    document.body.appendChild(this.#dialog);
    this.#dialog.showModal();
  }

  closeDialog() {
    this.#dialog.close();
    document.body.removeChild(this.#dialog);
  }
}

export default Dialog;
