# Chiquitines Baby & Kids

Landing responsive en Angular para una boutique infantil de Rosario.

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio abre en `http://localhost:4200`.

## Build de producción

```bash
npm run build
```

La salida queda en `dist/chiquitines-baby-kids/browser`.

## Personalización rápida

- Datos del negocio, WhatsApp, Instagram, dirección y horarios: `src/data/site.ts`
- Productos, marcas, guía de talles e imágenes principales: `src/app/content.ts`
- Fotos actuales: `src/assets/images/`

Para subirlo a Vercel, importar el repositorio y dejar:

- Framework: Angular
- Build command: `npm run build`
- Output directory: `dist/chiquitines-baby-kids/browser`
