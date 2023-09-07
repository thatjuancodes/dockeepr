class PrintButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <button onclick="window.print()" type="submit" class="btn btn-primary w-100">
        Print/Download a Copy
      </button>
    `
  }
}

window.customElements.define('print-button', PrintButton);
