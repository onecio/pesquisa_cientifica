# DESIGN SYSTEM — Referência de Componentes

## Tokens Disponíveis

### Cores

```css
--color-primary: #0066CC
--color-primary-dark: #0052A3
--color-primary-light: #E6F0FF
--color-secondary: #2D9E4D (Validação)
--color-accent: #FF8C42 (Destaque)
--color-success, --color-warning, --color-error, --color-info
```

### Tipografia

```css
Pesos: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

Tamanhos:
- --font-size-caption: 12px
- --font-size-small: 14px
- --font-size-base: 16px
- --font-size-lg: 18px
- --font-size-xl: 20px
- --font-size-2xl: 28px
- --font-size-3xl: 32px
- --font-size-4xl: 40px
- --font-size-5xl: 48px

Line Heights: tight (1.2), normal (1.5), relaxed (1.6), loose (1.8)
```

### Espaçamento

```css
xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px, 4xl: 96px
```

### Border Radius

```css
sm: 4px, md: 8px, lg: 12px, xl: 16px, full: 999px
```

### Elevação e Sombras

```css
Níveis: 0 (none), 1 (sm shadow), 2 (md shadow), 3 (lg shadow), 4 (xl shadow)
Usar: box-shadow: var(--elevation-N)
```

### Motion

```css
Velocidades: fast (100ms), normal (200ms), slow (300ms), slower (400ms)
Easing: in, out, in-out, bounce

Uso: transition: all var(--transition-normal) var(--easing-out);
```

---

## Componentes Prontos

### Botões

```html
<!-- Primário (Action principal) -->
<button class="button button-primary">Ação Principal</button>

<!-- Secundário (Action alternativa) -->
<button class="button button-secondary">Ação Secundária</button>

<!-- Terciário (Action mínima) -->
<button class="button button-tertiary">Ação Mínima</button>

<!-- Tamanhos -->
<button class="button button-primary button-sm">Small</button>
<button class="button button-primary button-lg">Large</button>

<!-- Estados -->
<button class="button button-primary" disabled>Desabilitado</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3>Título</h3>
  </div>
  <div class="card-body">
    <p>Conteúdo do card</p>
  </div>
  <div class="card-footer">
    <button class="button button-secondary">Ação</button>
  </div>
</div>
```

### Badges

```html
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

### Alerts

```html
<div class="alert alert-success">
  ✓ Operação realizada com sucesso!
</div>

<div class="alert alert-warning">
  ⚠ Atenção: algo que você deve saber
</div>

<div class="alert alert-error">
  ✗ Erro: operação não foi concluída
</div>

<div class="alert alert-info">
  ℹ Informação: contexto útil
</div>
```

### Grids de Cards

```html
<!-- Grid responsivo (1-3 colunas) -->
<div class="cards-grid">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>

<!-- Grid 2 colunas (mais largo) -->
<div class="cards-grid-2">
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker">1</div>
    <div class="timeline-content">
      <h3>Etapa 1</h3>
      <p>Descrição da etapa</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-marker">2</div>
    <div class="timeline-content">
      <h3>Etapa 2</h3>
      <p>Descrição da etapa</p>
    </div>
  </div>
</div>
```

### Seções

```html
<section class="section">
  <div class="section-header">
    <h2>Título da Seção</h2>
    <p>Descrição ou contextualização</p>
  </div>
  
  <!-- Conteúdo -->
  <div class="cards-grid">
    <!-- cards aqui -->
  </div>
</section>
```

### Header/Navegação

```html
<header class="site-header">
  <div class="brand">
    <h1>Logo / Marca</h1>
  </div>
  
  <nav class="site-nav">
    <a href="#home">Home</a>
    <a href="#roadmap">Roadmap</a>
    <a href="#modulos">Módulos</a>
    <a href="#glossario">Glossário</a>
  </nav>
</header>
```

### Hero

```html
<section class="hero">
  <div class="hero-copy">
    <span class="eyebrow">Label / Categoria</span>
    <h2>Headline Principal</h2>
    <p>Descrição e value proposition</p>
    
    <div class="hero-actions">
      <button class="button button-primary">CTA Primária</button>
      <button class="button button-secondary">CTA Secundária</button>
    </div>
  </div>
  
  <div class="hero-visual">
    <!-- Ilustração, gráfico ou conteúdo visual -->
  </div>
</section>
```

### Tipografia Editorial

```html
<!-- Citação -->
<blockquote>
  Uma citação importante que você quer destacar
</blockquote>

<!-- Eyebrow (label) -->
<span class="eyebrow">CATEGORIA OU LABEL</span>

<!-- Código inline -->
Use <code>var-name</code> para variáveis

<!-- Código em bloco -->
<pre><code>function exemplo() {
  return true;
}</code></pre>

<!-- Strong -->
Este é um <strong>texto importante</strong>

<!-- Destaque -->
Este é um <em>texto enfatizado</em>
```

---

## Utilities Disponíveis

### Spacing

```html
<div class="mt-lg">Margin top large</div>
<div class="mb-xl">Margin bottom extra large</div>
<div class="px-lg py-xl">Padding horizontal e vertical</div>
```

### Text

```html
<p class="text-center">Texto centralizado</p>
<p class="text-primary">Texto em cor primária</p>
<p class="text-lg">Texto grande</p>
<span class="font-bold">Texto em negrito</span>
```

### Visibility

```html
<div class="hidden">Escondido</div>
<div class="opacity-50">Opacidade 50%</div>
```

---

## Padrões de Composição

### Card com Badge

```html
<div class="card">
  <div class="card-header flex-between">
    <h3>Título do Card</h3>
    <span class="badge badge-primary">Novo</span>
  </div>
  <div class="card-body">
    <p>Conteúdo</p>
  </div>
</div>
```

### Card com Ícone

```html
<div class="card">
  <div style="font-size: 32px; margin-bottom: var(--space-md)">🧬</div>
  <h3>Anatomia da Pesquisa</h3>
  <p>Descrição do módulo</p>
</div>
```

### Alert com Ícone

```html
<div class="alert alert-success flex">
  <div style="font-size: 20px; flex-shrink: 0;">✓</div>
  <div>
    <strong>Sucesso!</strong>
    <p>Sua pesquisa foi salva</p>
  </div>
</div>
```

---

## Responsividade

O design system é **mobile-first** por padrão. Breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

Todos os componentes se adaptam automaticamente. Grids se tornam single-column em mobile.

---

## Acessibilidade

✅ Todos os componentes suportam:

- `:focus-visible` outline
- ARIA attributes
- Contrast ratios WCAG AA
- Responsive text sizes
- Keyboard navigation

---

## Customização

Adicionar em `<head>` para sobrescrever tokens:

```html
<style>
  :root {
    --color-primary: #YOUR-COLOR;
    --font-size-base: 18px;
    --space-lg: 32px;
  }
</style>
```
