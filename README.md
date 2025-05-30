# WhatsApp Templates Viewer 📱

Aplicación web construida con Vue 3 + Composition API, TypeScript y TailwindCSS para visualizar templates de mensajes de WhatsApp de forma organizada e interactiva.

## ✨ Funcionalidades

- 🔄 Listado de templates con **scroll infinito**
- 🏷️ Filtros por estado (`approved`, `rejected`, etc.)
- 📦 Visualización por secciones: **header**, **body**, **footer**, **botones**
- 🧩 **Resaltado de variables dinámicas** como `{{1}}`, `{{2}}`, etc.
- 💡 Arquitectura del proyecto clara y escalable

## 🛠️ Tecnologías utilizadas

- [Vue 3](https://vuejs.org/) + Composition API
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/) (para el entorno de desarrollo)

## 📦 Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/Tiin24/WhatsApp-template

# Ingresar al proyecto
cd whatsapp-templates-viewer

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del proyecto

```
src/
├─ components/        # Componentes reutilizables como TemplateCard, FilterBar, etc.
├─ composables/       # Composables personalizados con Composition API
├─ services/          # Lógica de llamadas HTTP con Axios
├─ utils/             # Funciones de utilidad
├─ views/             # Vistas principales
├─ types/             # Tipos de TypeScript
├─ App.vue
├─ main.ts
```
## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## ✍️ Autor

Desarrollado por [Isaias Agustin Romero](https://www.linkedin.com/in/isaias-romero//)