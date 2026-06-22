# Registro Tecnico da Evolucao Premium

**Data:** 2026-06-22  
**Branch:** `design/premium-evolucao`  
**Escopo:** redesenho estrutural da pagina estatica `index.html` e consolidacao do Design System em `styles.css`.

## Alteracoes Implementadas

- Substituicao do HTML duplicado e invalido por uma estrutura unica, sem conteudo apos `</html>`.
- Reposicionamento da pagina como plataforma premium: **Pesquisa OS**, o Sistema Operacional da Pesquisa Cientifica.
- Hero redesenhado com narrativa, metricas, chamadas para acao e visualizacao propria do fluxo de pesquisa.
- Inclusao de navegacao global, trilho contextual em desktop, indicador de progresso de leitura e skip link.
- Implementacao de roadmap interativo com atualizacao dinamica do marco ativo.
- Implementacao de grafo de conceitos clicavel, conectando metodologia, PRISMA, PICOS, OSF, peer review e Qualis.
- Criacao de modulos filtraveis por categoria: aprendizagem, execucao e publicacao.
- Inclusao de arvore de decisao metodologica, matriz comparativa, recursos operacionais e glossario conectado.
- Inclusao de busca modal instantanea com suporte a `Ctrl+K`.
- Inclusao de alternancia de tema claro/escuro com persistencia em `localStorage`.
- Adicao de favicon incorporado via data URI para evitar erro 404 em navegadores e auditorias.

## Design System

- Definicao de tokens para cor, texto, borda, espacamento, raio, sombra, superficie, movimento e largura maxima.
- Criacao de componentes reutilizaveis: botoes, botoes iconicos, chips, cards, paineis, grafo, roadmap, dialog de busca e tabela visual.
- Estados de hover, foco visivel, ativo e responsividade para desktop, tablet e mobile.
- Tratamento de contraste em fundos claros e escuros, com alvo WCAG A/AA.
- Suporte a `prefers-reduced-motion`.

## Validacao Executada

- `python tools\checks.py`: aprovado.
- `npm run audit:axe -- http://127.0.0.1:5500`: 0 violacoes.
- Checagem de console via Puppeteer: sem erros.
- Capturas geradas:
  - `reports/desktop-home.png`
  - `reports/mobile-home.png`

## Observacao

O Lighthouse gerou `reports/lighthouse.json`, mas o comando retornou erro de limpeza de diretorio temporario do Chrome no Windows (`EPERM`) apos escrever o relatorio. O resultado gerado antes do erro registrou acessibilidade 100.
