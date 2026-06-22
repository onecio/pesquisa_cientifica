# Ecossistema da Pesquisa Científica

Projeto estático para orientar pesquisa científica, escrita acadêmica e publicação com foco em arquitetura do conhecimento, design institucional e experiência de produto.

## Evolução do projeto

- Branch de trabalho atual: `design/premium-evolucao`
- Auditoria e plano de evolução: `AUDIT.md`
- Registro técnico das mudanças: `EVOLUTION_CHANGELOG.md`
- Prompt de referência para redesign: `PROMPT_MESTRE.md`

## Como usar

1. Abra `index.html` em qualquer navegador moderno.
2. Para testes locais com auditoria, inicie um servidor estático em `http://localhost:5500`.
3. O layout é responsivo e compatível com desktops e dispositivos móveis.

## Estrutura

- `index.html` — conteúdo principal, metadados SEO e estrutura semântica
- `styles.css` — fonte do design system tokenizado e responsivo
- `main.js` — fonte das interações da interface, filtros, busca e alternância de tema
- `styles.min.css` e `main.min.js` — assets minificados usados em produção
- `site.webmanifest` — metadados de instalação e identidade do site
- `robots.txt` e `sitemap.xml` — suporte básico de indexação
- `.github/workflows/pages.yml` — deploy automático para GitHub Pages
- `AUDIT.md` — diagnóstico técnico e plano de evolução
- `PROMPT_MESTRE.md` — briefing mestre para evolução do ecossistema

## Qualidade

- `npm run audit:axe -- http://localhost:5500` — valida acessibilidade com axe
- `npm run audit:lighthouse` — gera relatório Lighthouse em `reports/lighthouse.json`
- `npm run build` — gera os assets minificados de produção

## Publicação

O projeto está preparado para hospedagem no GitHub Pages com automação via GitHub Actions. Ao publicar alterações na branch `master`, o workflow `pages.yml` pode atualizar o site automaticamente.
