const roadmapData = {
    ideia: {
        title: "Ideia científica",
        body: "Converter uma observação em oportunidade de investigação, registrando contexto, relevância, lacuna inicial e potencial contribuição.",
        items: [
            "Entregável: nota conceitual de uma página.",
            "Critério: problema plausível, delimitado e relevante.",
            "Conexões: estado da arte, pergunta, justificativa."
        ]
    },
    problema: {
        title: "Problema e pergunta",
        body: "Transformar a intuição em pergunta operacionalizável, com escopo, população, variáveis e critérios de inclusão definidos.",
        items: [
            "Entregável: pergunta estruturada.",
            "Critério: testabilidade e clareza conceitual.",
            "Conexões: PICOS, objetivos, hipótese."
        ]
    },
    metodo: {
        title: "Método e protocolo",
        body: "Documentar desenho, amostra, instrumentos, coleta, plano analítico e mecanismos de reprodutibilidade.",
        items: [
            "Entregável: protocolo completo.",
            "Critério: cada decisão metodológica tem justificativa.",
            "Conexões: PRISMA, CASP, ROBIS, OSF."
        ]
    },
    etica: {
        title: "Ética e governança",
        body: "Avaliar riscos, consentimento, anonimização, proteção de dados e submissão a instâncias competentes.",
        items: [
            "Entregável: dossiê ético.",
            "Critério: riscos mitigados e responsabilidades explícitas.",
            "Conexões: CEP/CONEP, LGPD, dados sensíveis."
        ]
    },
    analise: {
        title: "Análise e síntese",
        body: "Executar a estratégia analítica conforme protocolo, reportando incertezas, limites e decisão estatística ou interpretativa.",
        items: [
            "Entregável: relatório analítico.",
            "Critério: evidências rastreáveis até dados e procedimentos.",
            "Conexões: scripts, tabelas, matriz de evidências."
        ]
    },
    publicacao: {
        title: "Publicação e impacto",
        body: "Preparar manuscrito, cover letter, dados suplementares, estratégia editorial e plano de divulgação científica.",
        items: [
            "Entregável: pacote de submissão.",
            "Critério: aderência ao periódico e transparência documental.",
            "Conexões: peer review, Qualis, SciELO, preprint."
        ]
    }
};

const conceptData = {
    metodologia: {
        title: "Metodologia",
        body: "Define desenho, coleta, análise e critérios de validade para sustentar a consistência da pesquisa.",
        links: [
            { label: "Módulo relacionado", href: "#mod-ferramentas" },
            { label: "Ferramentas", href: "#ferramentas" },
            { label: "Glossário", href: "#glossario" }
        ]
    },
    prisma: {
        title: "PRISMA",
        body: "Estrutura o relato transparente de revisões sistemáticas e metanálises, conectando busca, seleção e síntese.",
        links: [
            { label: "Checklist", href: "#res-prisma" },
            { label: "Revisão", href: "#mod-ferramentas" },
            { label: "Roadmap", href: "#roadmap" }
        ]
    },
    picos: {
        title: "PICOS",
        body: "Organiza pergunta, população, intervenção, comparação, desfecho e desenho para formular estudos e critérios de elegibilidade.",
        links: [
            { label: "Pergunta", href: "#roadmap" },
            { label: "Elegibilidade", href: "#gloss-picos" },
            { label: "Módulo", href: "#mod-anatomia" }
        ]
    },
    osf: {
        title: "OSF",
        body: "Apoia pré-registro, repositório, materiais, versionamento e ciência aberta com foco em rastreabilidade.",
        links: [
            { label: "Pré-registro", href: "#res-osf" },
            { label: "Dados", href: "#ferramentas" },
            { label: "Publicação", href: "#mod-publicacao" }
        ]
    },
    peer: {
        title: "Peer review",
        body: "Valida manuscritos por avaliação especializada antes da publicação e orienta revisões com base em pareceres.",
        links: [
            { label: "Submissão", href: "#mod-submissao" },
            { label: "Glossário", href: "#gloss-peer-review" },
            { label: "Publicação", href: "#mod-publicacao" }
        ]
    },
    qualis: {
        title: "Qualis",
        body: "Classifica periódicos para avaliação da produção científica no Brasil e informa decisões editoriais e de posicionamento.",
        links: [
            { label: "Indexação", href: "#mod-publicacao" },
            { label: "Recursos", href: "#res-qualis" },
            { label: "Impacto", href: "#ferramentas" }
        ]
    }
};

const roadmapDetail = document.getElementById("roadmapDetail");
const conceptDetail = document.getElementById("conceptDetail");
const themeToggle = document.getElementById("themeToggle");
const dialog = document.getElementById("searchDialog");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("searchResults");
const searchButtons = [...document.querySelectorAll("[data-open-search], #openSearch")];

const normalize = (value = "") =>
    value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

function setSearchExpanded(isExpanded) {
    searchButtons.forEach((button) => button.setAttribute("aria-expanded", String(isExpanded)));
}

function renderRoadmap(stage) {
    const data = roadmapData[stage];
    if (!data) return;

    roadmapDetail.innerHTML = `
        <p class="panel-kicker">Marco ativo</p>
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        <ul class="quality-list">${data.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
}

function renderConcept(concept) {
    const data = conceptData[concept];
    if (!data) return;

    conceptDetail.innerHTML = `
        <p class="panel-kicker">Conceito selecionado</p>
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        <div class="tag-list">${data.links.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}</div>
    `;
}

document.querySelectorAll(".roadmap-step").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".roadmap-step").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        renderRoadmap(button.dataset.stage);
    });
});

document.querySelectorAll(".graph-node").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".graph-node").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        renderConcept(button.dataset.concept);
    });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        const filter = button.dataset.filter;

        document.querySelectorAll(".module-card").forEach((card) => {
            card.hidden = filter !== "all" && card.dataset.category !== filter;
        });
    });
});

const searchable = [...document.querySelectorAll("[data-search]")].map((item) => {
    const section = item.closest("section");
    const sectionTitle =
        section?.querySelector(".section-header h2")?.textContent ||
        section?.id ||
        "Conteúdo";

    return {
        title: item.querySelector("h3")?.textContent || "Item",
        text: normalize(`${item.textContent} ${item.dataset.search}`),
        href: `#${item.id || section?.id || "conteudo"}`,
        sectionTitle
    };
});

function renderSearch(query = "") {
    const value = normalize(query);
    const matches = searchable
        .filter((item) => !value || item.text.includes(value))
        .slice(0, 8);

    if (!matches.length) {
        results.innerHTML = `<p class="search-empty">Nenhum resultado encontrado para <strong>${query}</strong>.</p>`;
        return;
    }

    results.innerHTML = matches
        .map(
            (item) => `
                <a href="${item.href}" data-result>
                    <strong>${item.title}</strong>
                    <span>${item.sectionTitle}</span>
                </a>
            `
        )
        .join("");

    results.querySelectorAll("[data-result]").forEach((link) => {
        link.addEventListener("click", () => {
            dialog.close();
            setSearchExpanded(false);
        });
    });
}

function openSearchDialog() {
    if (!dialog.open) {
        dialog.showModal();
    }
    setSearchExpanded(true);
    renderSearch(searchInput.value);
    window.setTimeout(() => searchInput.focus(), 0);
}

searchButtons.forEach((button) => button.addEventListener("click", openSearchDialog));
searchInput.addEventListener("input", (event) => renderSearch(event.target.value));
dialog.addEventListener("close", () => setSearchExpanded(false));

window.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearchDialog();
    }
});

const progress = document.getElementById("readingProgress");
window.addEventListener(
    "scroll",
    () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progressValue = max <= 0 ? 0 : (window.scrollY / max) * 100;
        progress.style.width = `${Math.max(0, progressValue)}%`;
    },
    { passive: true }
);

function updateThemeLabel(theme) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
}

updateThemeLabel(document.documentElement.dataset.theme || "light");

themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateThemeLabel(next);
});

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuery.addEventListener("change", ({ matches }) => {
    if (localStorage.getItem("theme")) return;
    const next = matches ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    updateThemeLabel(next);
});

const navLinks = [...document.querySelectorAll(".site-nav a, .context-rail a")];
const sections = [...document.querySelectorAll("main section[id]")];

const observer = new IntersectionObserver(
    (entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
            link.classList.toggle("is-current", isCurrent);

            if (isCurrent) {
                link.setAttribute("aria-current", "true");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.4, 0.7] }
);

sections.forEach((section) => observer.observe(section));
renderRoadmap("ideia");
renderConcept("metodologia");
renderSearch();
