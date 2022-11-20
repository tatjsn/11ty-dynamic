class MyIslandElement extends HTMLDivElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // TODO
  }
}

class MyPayloadElement extends HTMLTemplateElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const targetId = this.getAttribute('for');
    const target = document.getElementById(targetId);
    target.replaceChildren();
    target.appendChild(this.content.cloneNode(true));
  }
}


customElements.define('my-island', MyIslandElement, { extends: 'div' });
customElements.define('my-payload', MyPayloadElement, { extends: 'template' });

[...document.querySelectorAll('[is=my-island]')].forEach(async (island) => {
  const res = await fetch(island.getAttribute('src'));
  const html = await res.text();
  const tmpl = document.createElement('template');
  tmpl.innerHTML = html;
  const cloned = tmpl.content.cloneNode(true);
  cloned.firstChild.setAttribute('for', island.getAttribute('id'));
  document.body.appendChild(cloned);
});
