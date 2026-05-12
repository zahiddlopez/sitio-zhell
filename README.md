# Zhell Consulting

Sitio corporativo estatico para `zhellconsulting.com`, construido en HTML, CSS y JavaScript con una linea visual ejecutiva orientada a directivos y empresas medianas en Mexico.

## Stack

- HTML multipagina
- CSS personalizado
- JavaScript vanilla
- Google Fonts: `Inter` y `Space Mono`

## Paginas

- `index.html`: inicio
- `servicios.html`: portafolio de servicios
- `nosotros.html`: perfil de la firma
- `blog.html`: listado editorial demo
- `contacto.html`: formulario y datos de contacto

## Archivos

- [`assets/css/styles.css`](assets/css/styles.css): estilos principales del sitio HTML
- [`assets/js/components.js`](assets/js/components.js): header, footer, WhatsApp flotante e iconos
- [`assets/js/main.js`](assets/js/main.js): interacciones globales y comportamiento del formulario demo
- [`assets/img/logo-zhell.svg`](assets/img/logo-zhell.svg): logo vectorial usado en la version publicada
- [`docs/site-blueprint.md`](docs/site-blueprint.md): blueprint original de contenido y arquitectura
- [`docs/elementor-build-guide.md`](docs/elementor-build-guide.md): guia de referencia para una futura implementacion en WordPress + Elementor
- [`assets/css/elementor-custom.css`](assets/css/elementor-custom.css): hoja base preparada para Elementor

## Vista local

Abre `index.html` directamente en el navegador o levanta un servidor estatico simple, por ejemplo:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Estado del proyecto

- Diseno responsive para desktop, tablet y mobile
- Componentes reutilizables para navegacion y footer
- CTA y formulario de contacto en modo demo visual
- SEO base por pagina con `title` y `meta description`

## Nota

La carpeta `docs/` se conserva como referencia de estrategia y contenido. La version activa del sitio en este repositorio es la implementacion estatica en HTML/CSS/JS.
