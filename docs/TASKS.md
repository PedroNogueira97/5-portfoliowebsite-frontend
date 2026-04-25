# TASKS.md — Portfolio Website

> Backlog completo do projeto. Cada item deve ser tratado como uma unidade de trabalho
> independente, seguindo o fluxo definido em `AGENT_WORKFLOW.md` e `GIT_WORKFLOW.md`.

---

## Fase 0 — Setup do Projeto

- [ ] **T-000: Inicializar o projeto React + TypeScript + Vite + TailwindCSS**
  - Criar o projeto usando Vite com template `react-ts`
  - Instalar e configurar TailwindCSS (conforme ARCHITECTURE.md)
  - Configurar aliases de importação (`@/components`, `@/sections`, etc.)
  - Garantir que `npm run dev` funciona sem erros
  - Branch: `feature/project-setup`

- [ ] **T-001: Estrutura de pastas e arquivos base**
  - Criar estrutura de diretórios: `components/`, `sections/`, `pages/`, `assets/`, `i18n/`, `hooks/`, `types/`
  - Criar componentes placeholder para cada seção (Header, Hero, About, Skills, Projects, Experience, Contact, Resume, Footer)
  - Criar `App.tsx` montando todas as seções na ordem correta
  - Branch: `feature/project-structure`

- [ ] **T-002: Configurar sistema de internacionalização (i18n)**
  - Instalar e configurar `react-i18next` (ou lib similar)
  - Criar arquivos de tradução: `en.json` e `pt.json`
  - Implementar hook/componente para alternância entre idiomas
  - Todo conteúdo deve ser escrito originalmente em inglês e traduzido para português
  - Branch: `feature/i18n-setup`

---

## Fase 1 — Design System & Layout Global

- [ ] **T-010: Definir design tokens e tema global**
  - Configurar paleta de cores escuras (tema terminal/programação)
  - Definir tipografia (Google Fonts — ex: Inter, JetBrains Mono)
  - Definir espaçamentos, border-radius, sombras e breakpoints responsivos
  - Criar arquivo de variáveis globais CSS / Tailwind config
  - Branch: `feature/design-tokens`

- [ ] **T-011: Layout responsivo base (Shell)**
  - Implementar container global responsivo
  - Garantir scroll suave entre seções com `scroll-behavior: smooth`
  - Implementar lógica de scroll-spy para highlight no menu
  - Branch: `feature/layout-shell`

---

## Fase 2 — Componentes de Seção (Single Page)

- [ ] **T-020: Header / Navbar**
  - Logo à esquerda (`assets/images/logo.png`)
  - Links âncora para cada seção
  - Botão de download do currículo (`assets/docs/resume.pdf`)
  - Botão de alternância de idioma (EN/PT)
  - Menu hamburger responsivo para mobile
  - Sticky header com blur/transparência
  - Branch: `feature/header`

- [ ] **T-021: Hero Section**
  - Foto de perfil (`assets/images/profile.png`)
  - Nome, título e descrição profissional (dados do PRD)
  - Botões para LinkedIn e GitHub
  - Animações de entrada (fade-in / slide)
  - Branch: `feature/hero-section`

- [ ] **T-022: About Section**
  - Título e descrição (Resumo Profissional do PRD)
  - Histórico Acadêmico (Formação e Cursos)
  - Idiomas
  - Layout com ícones/cards para cada item
  - Branch: `feature/about-section`

- [ ] **T-023: Skills Section**
  - Categorias: Backend & Linguagens, IA, Infraestrutura/DevOps
  - Cada skill representada por ícone/badge
  - Seção extra de "Competências Principais" (Clean Architecture, DDD, APIs RESTful, etc.)
  - Layout responsivo em grid
  - Branch: `feature/skills-section`

- [ ] **T-024: Projects Section**
  - Lista de projetos pessoais (AI-Jail, AI Resume Agent, LNM Website)
  - Card com nome, descrição curta e tecnologias usadas
  - Botão "Ver mais" → navega para página de detalhe do projeto
  - Branch: `feature/projects-section`

- [ ] **T-025: Experience Section**
  - Timeline vertical com experiências profissionais
  - Cada item: cargo, empresa, período, descrição, tecnologias
  - Botão "Ver mais" → navega para página de detalhe da experiência
  - Branch: `feature/experience-section`

- [ ] **T-026: Contact Section**
  - Formulário com campos: Nome, E-mail, Mensagem
  - Validação de campos no frontend
  - Botão de enviar (integração futura com backend/email service)
  - Estilo visual coerente com o tema escuro
  - Branch: `feature/contact-section`

- [ ] **T-027: Resume Section**
  - Botão/CTA para download do currículo (`assets/docs/resume.pdf`)
  - Preview visual ou descrição breve
  - Branch: `feature/resume-section`

- [ ] **T-028: Footer**
  - Informações de contato (e-mail, telefone)
  - Links para redes sociais (LinkedIn, GitHub)
  - Copyright com ano dinâmico
  - Branch: `feature/footer`

---

## Fase 3 — Páginas de Detalhe

- [ ] **T-030: Configurar React Router**
  - Instalar `react-router-dom`
  - Configurar rota principal `/` (single page)
  - Configurar rota dinâmica `/project/:slug` (detalhe de projeto)
  - Configurar rota dinâmica `/experience/:slug` (detalhe de experiência)
  - Branch: `feature/routing`

- [ ] **T-031: Página de detalhe de Projeto**
  - Layout com: título, descrição completa, tecnologias, imagens/vídeos, link externo
  - Botão para voltar à home
  - Branch: `feature/project-detail-page`

- [ ] **T-032: Página de detalhe de Experiência**
  - Layout com: cargo, empresa, período, descrição detalhada, tecnologias
  - Botão para voltar à home
  - Branch: `feature/experience-detail-page`

---

## Fase 4 — Conteúdo & Assets

- [ ] **T-040: Adicionar assets estáticos**
  - Foto de perfil → `assets/images/profile.jpeg`
  - Logo → `assets/images/logo.png`
  - Currículo → `assets/docs/resume.pdf`
  - Imagens de projetos (se houver)

- [ ] **T-041: Popular conteúdo i18n (EN + PT)**
  - Preencher `en.json` e `pt.json` com todos os textos das seções
  - Garantir que todas as seções usam chaves de tradução
  - Branch: `feature/i18n-content`

---

## Fase 5 — Polimento & Responsividade

- [ ] **T-050: Revisão de responsividade**
  - Testar em mobile (320px), tablet (768px) e desktop (1280px+)
  - Corrigir quebras de layout
  - Garantir acessibilidade básica (alt text, contraste, navegação por teclado)
  - Branch: `fix/responsive-review`

- [ ] **T-051: Animações e micro-interações**
  - Scroll reveal nas seções
  - Hover effects em cards e botões
  - Transições suaves de navegação
  - Branch: `feature/animations`

- [ ] **T-052: SEO & Meta Tags**
  - Title tags, meta descriptions, Open Graph tags
  - Heading hierarchy correta (um `<h1>` por página)
  - HTML semântico
  - Branch: `feature/seo`

---

## Fase 6 — Deploy & CI/CD

- [ ] **T-060: Configurar build de produção**
  - Verificar `npm run build` sem erros
  - Garantir que o `nginx.conf` serve o build corretamente
  - Branch: `chore/build-config`

- [ ] **T-061: Configurar GitHub Actions para CI/CD**
  - Pipeline de lint + build + deploy automatizado
  - Integrar com o script existente em `ops/deploy.sh`
  - Branch: `chore/ci-cd`
