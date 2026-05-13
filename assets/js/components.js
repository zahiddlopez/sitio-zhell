const iconLibrary = {
  forensic: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 4a6 6 0 1 0 3.88 10.58L20 20" />
      <path d="M8.5 8.5h3M10 7v3" />
    </svg>
  `,
  pentest: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 4v5c0 4.5-3.1 7.8-7 9-3.9-1.2-7-4.5-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  `,
  strategy: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19h16" />
      <path d="M6 16l4-4 3 3 5-6" />
      <path d="M16 9h2v2" />
    </svg>
  `,
  soc: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16" />
      <path d="M4 12h16" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  `,
  hardening: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 5.5a4 4 0 0 0-5.5 5.8L4 16.3V20h3.7l5-5a4 4 0 0 0 5.8-5.5L14 14" />
    </svg>
  `,
  ciso: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  `,
  awareness: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4a5 5 0 0 1 5 5c0 2-1.2 3.2-2.4 4.3A4.7 4.7 0 0 0 13 16v1" />
      <path d="M11 20h2" />
      <path d="M9 17h6" />
    </svg>
  `,
  retainer: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l7 4v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-4z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  `,
  offensive: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19l6-6" />
      <path d="M14 5l5 5" />
      <path d="M8 15l7-7 4 4-7 7H8z" />
    </svg>
  `,
  defensive: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 4v5c0 4.5-3.1 7.8-7 9-3.9-1.2-7-4.5-7-9V7l7-4z" />
      <path d="M9 12h6" />
    </svg>
  `
};

function buildHeader(activePage) {
  const links = [
    ["Inicio", "index.html", "home"],
    ["Servicios", "servicios.html", "servicios"],
    ["Nosotros", "nosotros.html", "nosotros"],
    ["Blog", "blog.html", "blog"],
    ["Contacto", "contacto.html", "contacto"]
  ];

  const navLinks = links
    .map(
      ([label, href, key]) =>
        `<a href="${href}" class="${activePage === key ? "is-active" : ""}">${label}</a>`
    )
    .join("");

  return `
    <header class="site-header" id="site-header">
      <div class="container site-header__inner">
        <a class="site-logo" href="index.html" aria-label="Zhell Consulting">
          <img src="assets/img/logo_zhell.png" alt="Zhell Consulting logo" />
        </a>
        <nav class="site-nav" id="site-nav" aria-label="Navegacion principal">
          ${navLinks}
        </nav>
        <div class="header-actions">
          <a class="btn btn--primary" href="contacto.html#formulario-contacto">Contactanos</a>
          <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav">
            <span class="menu-toggle__bar"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function buildFooter() {
  return `
    <footer class="site-footer section">
      <div class="container">
        <div class="site-footer__inner">
          <div class="site-footer__brand">
            <img src="assets/img/logo_zhell.png" alt="Zhell Consulting logo" />
            <p>Firma boutique de ciberseguridad enfocada en forense digital, pentesting y consultoria estrategica para empresas del sector privado en Mexico.</p>
          </div>
          <div>
            <h3>Navegacion</h3>
            <ul>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="servicios.html">Servicios</a></li>
              <li><a href="nosotros.html">Nosotros</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contacto.html">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3>Contacto</h3>
            <ul>
              <li><a href="mailto:contacto@zhellconsulting.com">contacto@zhellconsulting.com</a></li>
              <li><a href="https://wa.me/5215512345678?text=Hola%20Zhell%20Consulting,%20quiero%20agendar%20un%20diagnostico%20gratuito." target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="site-footer__bottom">
          (c) 2025 Zhell Consulting. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `;
}

function buildWhatsApp() {
  return `
    <div class="wa-float" aria-label="WhatsApp">
      <a href="https://wa.me/5215512345678?text=Hola%20Zhell%20Consulting,%20quiero%20agendar%20un%20diagnostico%20gratuito." target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.8c0 4.8-3.9 8.7-8.7 8.7-1.5 0-3-.4-4.2-1.1L3 20.8l1.5-4.4a8.6 8.6 0 0 1-1.4-4.6C3.1 7 7 3.1 11.8 3.1s8.7 3.9 8.7 8.7zM8.1 7.4c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.2 5.1 7.8 6.9 3.8 1.5 4.6 1.2 5.4 1.1.8-.1 2.5-1 2.8-2 .4-1 .4-1.9.3-2-.1-.2-.3-.3-.7-.5s-2.5-1.2-2.9-1.4c-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.3 1.6-.2.2-.5.3-.9.1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.4-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.3-.9-2.3-1.3-3.1z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </div>
  `;
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = buildHeader(document.body.dataset.page || "");
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = buildFooter();
  }
}

class SiteWhatsApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = buildWhatsApp();
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
customElements.define("site-whatsapp", SiteWhatsApp);

window.ZhellIcons = iconLibrary;
