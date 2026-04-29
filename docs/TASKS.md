# TASKS.md — Portfolio Website

## Fase 1 — Páginas de Detalhe

- [x] **T-033: Blog routes and content model**
  - Criar rotas `/blog` e `/blog/:slug`
  - Centralizar a estrutura de artigos em uma camada reutilizável
  - Criar conteúdo dummy para ao menos um artigo para visualização
  - Branch: `feature/blog-routing`

- [x] **T-034: Blog section on Home**
  - Adicionar seção de artigos abaixo de Work Experience
  - Exibir cards com imagem de capa, título, descrição, data, categoria e link
  - Reutilizar o padrão visual do restante do site
  - Branch: `feature/blog-home-section`

- [x] **T-035: Blog listing page**
  - Listar todos os artigos na página `/blog`
  - Implementar filtro por categoria com opção de visualizar todas
  - Implementar paginação quando houver mais de 10 artigos
  - Fazer a paginação respeitar o filtro ativo
  - Branch: `feature/blog-listing-page`

- [x] **T-036: Blog detail page**
  - Renderizar conteúdo completo em `/blog/:slug`
  - Suportar imagens e vídeos embutidos no corpo do artigo
  - Exibir aside lateral com categorias e filtro compartilhado com `/blog`
  - Incluir fallback para artigo, imagem ou categoria ausente
  - Branch: `feature/blog-detail-page`

- [x] **T-037: Blog i18n content structure**
  - Criar `src/i18n/articles/` com pares `*-en.json` e `*-pt.json`
  - Ajustar `src/i18n/index.ts` se necessário para carregar os artigos
  - Garantir textos e categorias funcionando em PT-BR e EN
  - Branch: `feature/blog-i18n-content`
