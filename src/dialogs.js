class Dialog {
  // Private methods
  #dialog;

  constructor(id) {
    this.id = id;
    this.#dialog = this.#setupDialog();
  }

  // Private methods
  #setupDialog() {
    const dialog = document.createElement("dialog");
    dialog.id = this.id;
    return dialog;
  }

  #addCloseEvent(button) {
    button.addEventListener("click", () => this.closeDialog());
  }

  // Public methods
  setContent(
    content,
    buttons = [{ classes: "button", type: "button", label: "Button" }],
  ) {
    const dialogButtons = document.createElement("div");
    dialogButtons.className = "buttons";

    this.#dialog.appendChild(content);

    buttons.forEach((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.className = button.classes;
      buttonElement.type = button.type;
      buttonElement.textContent = button.label;
      this.#addCloseEvent(buttonElement);
      dialogButtons.appendChild(buttonElement);
    });

    this.#dialog.appendChild(dialogButtons);
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

// Pending:
// 1. Invoke dialogs
// 2. Add custom events to dialog
// 3. Create and add more content to other parts of the code

export default Dialog;
