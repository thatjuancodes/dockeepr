const template = document.createElement('template');

template.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <footer class="py-3">
    <div class="container">
      <div class="row">
        <ul class="social ps-0 text-center">
          <li><a href="https://twitter.com/ThatJuanCodes" target="_blank">Twitter</a></li>
          <li><a href="https://github.com/" target="_blank">Github</a></li>
          <li><a href="https://forms.gle/YQEBuVbbMwwTZsHT6" target="_blank">Suggestions?</a></li>
        </ul>
      </div>
      <div class="row mt-5 pt-2">
        <p class="text-center pb-0">Maintained by <b>TheJuan.Codes</b></p>
      </div>
    </div>
  </footer>
`

class FooterTemplate extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
  }
}

window.customElements.define('footer-template', FooterTemplate);