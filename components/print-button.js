const printButton = document.createElement('template');

printButton.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="./assets/style.css">
  
  <button onclick="window.print()" type="submit" class="btn btn-primary w-100">Print/Download a Copy</button>
`

class PrintButton extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(printButton.content.cloneNode(true));
  }

  connectedCallback() {
  }
}

window.customElements.define('print-button', PrintButton);