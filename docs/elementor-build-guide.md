# Guia de implementacion en Elementor

## 1. Ajustes globales

### Colores globales

- `Primary`: `#CC0000`
- `Secondary`: `#1A2B4A`
- `Text`: `#0A0A0A`
- `Muted`: `#666666`
- `Surface`: `#F5F5F5`
- `Border`: `#E0E0E0`
- `Black`: `#000000`
- `White`: `#FFFFFF`

### Tipografias globales

- Primary font: `Inter`
- Secondary font: `Space Mono`
- H1: 56px / 1.05 / 700
- H2: 38px / 1.15 / 700
- H3: 26px / 1.2 / 700
- H4: 20px / 1.3 / 600
- Body: 18px / 1.7 / 400
- Small: 14px / 1.6 / 400
- Label mono: 13px / 1.4 / 400 / uppercase optional

### Breakpoints sugeridos

- Desktop: 1280px+
- Tablet: 768px
- Mobile: 360px

## 2. Estructura de Elementor

### Header template

- Seccion contenedora: `zhell-header`
- Layout: logo izquierda, menu centro, CTA derecha
- Sticky header opcional
- Anadir clase al boton: `zhell-btn zhell-btn-primary`

### Footer template

- Seccion contenedora: `zhell-footer`
- Fondo negro con padding amplio
- Usar version blanca del logo si se dispone
- Si aun no existe version blanca, usar solo isotipo o solicitar variante monocromatica

### Home

- Hero: clase `zhell-hero`
- Quienes somos: clase `zhell-narrow-copy`
- Servicios: grid 4x2 en desktop, 2x4 tablet, 1x8 mobile
- Por que Zhell: 3 columnas
- Certificaciones: 3 badges
- CTA final: clase `zhell-cta-band`

### Servicios

- Hero corto: `zhell-hero zhell-hero-compact`
- Cada servicio en contenedor con clase `zhell-service-block`
- Alternar fondo con `zhell-section-alt`

### Nosotros

- Hero corto
- Tres secciones de contenido simple
- Grid 3 columnas para enfoque
- Badge row para certificaciones

### Blog

- Crear plantilla Archive con Elementor Theme Builder
- Crear plantilla Single Post
- Grid cards con categoria visible arriba
- Ocultar sidebar nativo

### Contacto

- Hero corto
- Seccion de dos columnas con formulario y datos
- Asignar `id="contacto"` a la seccion principal para CTAs ancla

## 3. Sistema de secciones

### Espaciado

- Hero desktop: 120px arriba / 120px abajo
- Seccion estandar desktop: 88px arriba / 88px abajo
- Tablet: 72px
- Mobile: 56px

### Anchuras

- Contenedor general: 1180px
- Texto angosto: 680px
- Tarjetas y badges: maximo 360px por item

## 4. Componentes clave

### Boton primario

- Fondo: `#CC0000`
- Texto: blanco
- Radio: 4px
- Peso: 600
- Hover: fondo mas oscuro `#A80000`

### Boton secundario

- Fondo transparente
- Borde: `1px solid #0A0A0A`
- Texto: `#0A0A0A`
- Hover: fondo negro, texto blanco

### Tarjetas

- Fondo blanco
- Borde `1px solid #E0E0E0`
- Padding 28px a 32px
- Hover: borde rojo y ligera elevacion

### Linea roja decorativa

- Altura: 3px
- Ancho: 72px en heroes, 48px en secciones
- Color: `#CC0000`

## 5. Formulario

### Opcion Contact Form 7

- Campos:
  `text* your-name`
  `text your-company`
  `email* your-email`
  `tel your-phone`
  `textarea* your-message`

### Opcion WPForms

- Mantener 1 columna en mobile
- Confirmacion corta y profesional

### Mensaje de exito sugerido

- `Gracias. Recibimos tu mensaje y te responderemos en menos de 24 horas habiles.`

## 6. Blog en WordPress

- Categorias:
  `Threat Intelligence`
  `Forense Digital`
  `Seguridad Ofensiva`
  `Buenas Practicas`
  `Casos y Analisis`
- Usar imagen destacada abstracta consistente
- Longitud recomendada de extracto: 20 a 28 palabras

## 7. SEO tecnico base

- Instalar Rank Math o Yoast SEO
- Configurar meta title y description de cada pagina
- H1 unico por pagina
- URLs limpias
- Breadcrumbs opcionales solo en blog
- Alt text descriptivo en logo e imagenes abstractas

## 8. Rendimiento

- Convertir imagenes a WebP cuando sea posible
- Evitar sliders, videos auto-play y animaciones pesadas
- Limitar plugins a los esenciales
- Activar lazy load
- Cargar Google Fonts con solo pesos 400, 500 y 700

## 9. Plugins sugeridos

- SEO: Rank Math o Yoast SEO
- Forms: Contact Form 7 o WPForms
- WhatsApp flotante: WP Social Chat
- Cache: LiteSpeed Cache o WP Rocket, segun hosting

## 10. Checklist final

- Revisar contraste en hero y footer
- Validar responsive en 360px, 768px y 1440px
- Confirmar que todos los CTAs llevan a contacto
- Probar formulario y correo de salida
- Anadir favicon
- Conectar Search Console y GA4
