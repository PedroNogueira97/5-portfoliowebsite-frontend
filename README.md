# Pedro Nogueira Portfolio

High-fidelity portfolio website for Pedro Nogueira, Senior Backend Developer and AI Agent Engineering Specialist.

## 🚀 Technologies

- **Frontend:** React 19, TypeScript 6, Vite 8, TailwindCSS v4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Routing:** React Router 7
- **Internationalization:** i18next (EN/PT support)
- **Deployment:** Docker, Nginx, GitHub Actions

## 🏗 Project Structure

- `src/components`: Global UI components (Layout, ScrollToTop)
- `src/sections`: Specialized sections for the single-page home (Hero, About, Skills, Experience, Projects, Contact)
- `src/pages`: Main page wrappers and detail pages (`ProjectDetail`, `ExperienceDetail`)
- `src/i18n`: Translatable locales and configuration
- `ops/`: Infrastructure and deployment scripts (Nginx, Deploy SH)

## 🛠 Setup & Development

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

### Docker

```bash
docker compose up -d --build
```

## 🌐 Features

- **Dynamic Routing:** Deep-link supports for specific projects and professional experiences.
- **Bilingual Interface:** Toggle between English and Portuguese with persistent state.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
- **SEO Optimized:** Semantic HTML, meta tags, and OpenGraph support.

## 📄 License

All rights reserved.
