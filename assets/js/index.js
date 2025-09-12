      // Dados dos repositórios (JSON como objeto JS)
      const repos = [
        { title: 'malgany', description: 'Config files for my GitHub profile.', topics: ['config','github-config'], language: '', updated: 'Updated on Sep 12, 2025' },
        { title: 'lista-vagas', description: 'Listagem de vagas', topics: [], language: 'JavaScript', updated: 'Updated on Sep 5, 2025' },
        { title: 'cruzada', description: 'Game de cruzadinha.', topics: [], language: 'JavaScript', updated: 'Updated on Aug 22, 2025' },
        { title: 'tabuleiro', description: 'Game de tabuleiro.', topics: [], language: 'JavaScript', updated: 'Updated on Aug 22, 2025' },
        { title: 'operiodico', description: 'O Periódico', topics: [], language: 'HTML', updated: 'Updated on May 12, 2025' },
        { title: 'android-standard-model', description: 'Android Standard Model', topics: [], language: 'HTML', updated: 'Updated on Mar 24, 2025' },
        { title: 'pwa-cartoon', description: 'PWA criado com HTML, CSS e JavaScript usando Material Design.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 15, 2025' },
        { title: 'api-cartoon', description: 'API simples em Node.js para o app SnapToon (transforma imagens em cartoon).', topics: [], language: 'JavaScript', updated: 'Updated on Mar 15, 2025' },
        { title: 'tanktank', description: 'Jogo web “TankTank” (GitHub Pages).', topics: [], language: 'JavaScript', updated: 'Updated on Mar 9, 2025' },
        { title: 'PHPChain', description: 'Implementa o padrão Chain of Responsibility em PHP.', topics: [], language: 'PHP', updated: 'Updated on Apr 25, 2024' },
        { title: 'sum20', description: 'A numbers game', topics: [], language: 'JavaScript', updated: 'Updated on Mar 21, 2024' },
        { title: 'aitools', description: 'Coleção de ferramentas simples de IA em HTML.', topics: [], language: 'HTML', updated: 'Updated on Mar 21, 2024' },
        { title: 'frames', description: 'Experimentos com frames em HTML.', topics: [], language: 'HTML', updated: 'Updated on Jul 19, 2023' },
        { title: 'portfolio', description: 'My personal portfolio website', topics: ['website','portfolio','personal-website','personal-portfolio'], language: 'HTML', updated: 'Updated on Mar 21, 2023' },
        { title: 'gpt-calendar', description: 'Experimentos de integração GPT + Calendar.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 13, 2023' },
        { title: 'uno-online', description: 'Fork do UNO online.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 12, 2023' },
        { title: 'a-estrela', description: 'Implementação do algoritmo A* (A-estrela).', topics: [], language: 'JavaScript', updated: 'Updated on Jul 27, 2022' },
        { title: 'qa-challenge-medium', description: 'Desafio de QA (nível médio).', topics: [], language: '', updated: 'Updated on Jun 1, 2022' },
        { title: 'qa-challenge-easy', description: 'Desafio de QA (nível fácil).', topics: [], language: '', updated: 'Updated on May 21, 2022' },
        { title: 'transfer-clothes', description: 'Aplicativo para gerenciamento/transferência de roupas.', topics: [], language: '', updated: 'Updated on Apr 20, 2022' },
        { title: 'jogodavelha2.0', description: 'Jogo da velha 2.0', topics: [], language: '', updated: 'Updated on Apr 17, 2022' },
        { title: 'estudos-de-git', description: 'Estudos de Git (fork).', topics: [], language: '', updated: 'Updated on Mar 17, 2022' },
        { title: 'ddd-laravel-model', description: 'DDD Laravel Model', topics: [], language: 'PHP', updated: 'Updated on Feb 28, 2022' },
        { title: 'PHPUnitProject', description: 'Melhores práticas em testes unitários.', topics: [], language: 'PHP', updated: 'Updated on Feb 13, 2022' },
        { title: 'SymfonyRESTful', description: 'API RESTful com Symfony.', topics: [], language: 'PHP', updated: 'Updated on Feb 9, 2022' },
        { title: 'FlappyIA', description: 'FlappyIA com Inteligência Artificial (synaptic.js, lodash.js).', topics: ['javascript','algorithm','ai','js','artificial-intelligence','ia'], language: 'JavaScript', updated: 'Updated on Feb 9, 2022' },
        { title: 'Semaforo', description: 'Simulador de semáforo e calculadora de estado.', topics: ['js','semaforo'], language: 'HTML', updated: 'Updated on Feb 7, 2022' },
        { title: 'api-classify-images', description: 'API que classifica imagens com TensorFlow.js e Teachable Machine.', topics: ['nodejs','javascript','tensorflow','tensorflowjs','teachablemachine'], language: 'JavaScript', updated: 'Updated on Feb 7, 2022' },
        { title: 'random-cpf-php', description: 'Ideias de programas diversos.', topics: [], language: 'PHP', updated: 'Updated on Feb 7, 2022' },
        { title: 'Compilador-8-semestre-CC', description: 'ATPs compartilhadas de Ciência da Computação (8º semestre).', topics: [], language: 'PHP', updated: 'Updated on Feb 7, 2022' },
        { title: 'ionic-appet', description: 'App de exemplo com Ionic.', topics: [], language: 'JavaScript', updated: 'Updated on Feb 11, 2017' },
        { title: 'appet', description: 'Aplicação para animais (venda, doação e procura).', topics: [], language: 'CSS', updated: 'Updated on Oct 25, 2016' },
        { title: 'Varios-Projetos', description: 'Repositório de projetos acadêmicos.', topics: [], language: 'Java', updated: 'Updated on Dec 20, 2015' }
      ];

      // Renderização dos cards e filtros
      const grid = document.getElementById('grid');
      const filtersDiv = document.getElementById('filters');

      const order = ['PHP','JavaScript','HTML','CSS','Java'];
      const allLangs = [...new Set(repos.filter(r => r.language).map(r => r.language))].sort((a,b) => a.localeCompare(b));
      let activeFilters = new Set(allLangs);

      function createFilters() {
        filtersDiv.innerHTML = '';
        allLangs.forEach(lang => {
          const btn = document.createElement('button');
          const langClass = `badge-${lang.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
          btn.className = `lang-filter ${langClass}`;
          btn.type = 'button';
          btn.textContent = lang;
          btn.dataset.lang = lang;
          btn.setAttribute('aria-pressed', 'true');
          btn.addEventListener('click', () => {
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', String(!pressed));
            if (pressed) activeFilters.delete(lang); else activeFilters.add(lang);
            renderGrid();
          });
          filtersDiv.appendChild(btn);
        });
      }

      function createCard(repo) {
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('role', 'article');

        if (repo.language) {
          const badge = document.createElement('span');
          const langClass = `badge-${repo.language.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
          badge.className = `badge ${langClass}`;
          badge.textContent = repo.language;
          card.appendChild(badge);
        }

        const title = document.createElement('h3');
        title.textContent = repo.title;
        card.appendChild(title);

        const desc = document.createElement('p');
        desc.className = 'desc';
        desc.textContent = repo.description && repo.description.trim() !== '' ? repo.description : 'Projeto sem descrição.';
        card.appendChild(desc);

        if (Array.isArray(repo.topics) && repo.topics.length) {
          const chips = document.createElement('div');
          chips.className = 'chips';
          repo.topics.forEach(t => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = t;
            chips.appendChild(chip);
          });
          card.appendChild(chips);
        }

        if (repo.updated) {
          const meta = document.createElement('div');
          meta.className = 'meta';
          meta.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="opacity:.75"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1V10h16v9z"/></svg>
            <span>Atualizado: ${repo.updated}</span>`;
          card.appendChild(meta);
        }

        return card;
      }

      function renderGrid() {
        grid.innerHTML = '';
        repos
          .filter(r => r.language && activeFilters.has(r.language))
          .sort((a, b) => {
            const ai = order.indexOf(a.language);
            const bi = order.indexOf(b.language);
            return (ai === -1 ? order.length : ai) - (bi === -1 ? order.length : bi);
          })
          .forEach(r => grid.appendChild(createCard(r)));
      }

      // Tema: salva preferência e tenta detectar do sistema apenas na primeira visita
      const root = document.documentElement;
      const toggleBtn = document.getElementById('toggleTheme');
      const iconSun = document.getElementById('iconSun');
      const iconMoon = document.getElementById('iconMoon');

      function setTheme(theme) {
        const t = theme === 'dark' ? 'dark' : 'light';
        root.setAttribute('data-theme', t);
        toggleBtn.setAttribute('aria-pressed', String(t === 'dark'));
        iconSun.style.display = t === 'dark' ? 'none' : '';
        iconMoon.style.display = t === 'dark' ? '' : 'none';
        localStorage.setItem('tb_theme', t);
      }

      function initTheme() {
        const saved = localStorage.getItem('tb_theme');
        if (saved) {
          setTheme(saved);
        } else {
          // tenta usar a preferência do sistema; se não der, padrão claro
          try {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
          } catch {
            setTheme('light');
          }
        }
      }

      toggleBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });

      // Start
      createFilters();
      initTheme();
      renderGrid();

