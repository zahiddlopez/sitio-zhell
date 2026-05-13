function injectServiceIcons() {
  const icons = window.ZhellIcons || {};
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const icon = icons[node.dataset.icon];
    if (icon) node.innerHTML = icon;
  });
}

function setupHeaderBehavior() {
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");

  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectServiceIcons();
  setupHeaderBehavior();
});
