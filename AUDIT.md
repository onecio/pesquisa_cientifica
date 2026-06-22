# Auditoria Técnica e Estratégica

## Estado atual

- Página construída com HTML estático e CSS simples.
- Estrutura linear e pouco conectada entre módulos.
- Design escuro genérico, com aspecto de landing page de startup e elementos visuais clichês.
- Ausência de navegação global e de componentes reutilizáveis.
- Conteúdo relevante, mas sem hierarquia de informação clara e sem visão de ecossistema.
- Falta de documentação de design system, tokens e critérios de aceitação.

## Principais oportunidades de melhoria

- Estabelecer arquitetura de informação baseada em um ecossistema de pesquisa científica.
- Criar navegação clara, âncoras semânticas e seções modulares.
- Redesenhar com foco em autoridade científica, confiabilidade institucional e experiência premium.
- Definir um design system leve com tokens de cores, tipografia e espaçamentos.
- Entregar microinterações discretas, estados de foco acessíveis e transições suaves.
- Incluir roadmap de pesquisa explícito com etapas, checklists e ferramentas.
- Reforçar comunicação para públicos iniciantes e avançados em pesquisa.
- Produzir documentação de apoio ao processo de evolução.

## Diagnóstico técnico

- Baixo uso de tokens: variáveis CSS limitadas e sem sistema de escalas.
- Responsividade básica com poucas melhorias para telas pequenas.
- Estrutura semântica parcial; falta de `nav` com âncoras e de seções com propósito claro.
- Acessibilidade não endereçada explicitamente; foco e contraste podem ser otimizados.
- Performance aceitável, mas poderia se beneficiar de estilo mais compacto e componentes reutilizáveis.

## Plano de evolução

1. Preservar a versão atual na branch `audit/redesign-evolucao`.
2. Adicionar documentação de prompt e auditoria (`PROMPT_MESTRE.md`, `AUDIT.md`).
3. Redefinir `index.html` com uma hierarquia de páginas orientada por ecossistema.
4. Reescrever `styles.css` como um design system tokenizado.
5. Incluir roadmap de pesquisa, módulos e glossário como elementos interconectados.
6. Manter a página estática e compatível com hospedagem em GitHub Pages.

## Critérios de aprovação

- Interface transmite autoridade científica e sofisticação técnica.
- Conteúdo está organizado como um produto digital maduro.
- Navegação é intuitiva e permite múltiplos níveis de profundidade.
- Página é responsiva, acessível e semântica.
- O código é limpo e preparado para evolução futura.
