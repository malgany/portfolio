      // Dados dos repositórios (JSON como objeto JS)
const repos = [
        { title: 'malgany', description: 'Arquivos de configuração para personalizar meu perfil no GitHub.', topics: ['config','github-config'], language: '', updated: 'Updated on Sep 12, 2025' },
        { title: 'lista-vagas', description: 'Aplicação em JavaScript para listar vagas de emprego.', topics: [], language: 'JavaScript', updated: 'Updated on Sep 5, 2025' },
        { title: 'cruzada', description: 'Jogo de palavras cruzadas em JavaScript.', topics: [], language: 'JavaScript', updated: 'Updated on Aug 22, 2025' },
        { title: 'tabuleiro', description: 'Jogo de tabuleiro em JavaScript com interface HTML.', topics: [], language: 'JavaScript', updated: 'Updated on Aug 22, 2025' },
        { title: 'operiodico', description: 'Site informativo do projeto O Periódico desenvolvido em HTML.', topics: [], language: 'HTML', updated: 'Updated on May 12, 2025' },
        { title: 'android-standard-model', description: 'Modelo padrão para projetos Android com documentação em HTML.', topics: [], language: 'HTML', updated: 'Updated on Mar 24, 2025' },
        { title: 'pwa-cartoon', description: 'Aplicativo progressivo que transforma imagens em cartoon, desenvolvido com HTML, CSS e JavaScript usando Material Design.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 15, 2025' },
        { title: 'api-cartoon', description: 'API em Node.js para o aplicativo SnapToon que transforma imagens em cartoon.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 15, 2025' },
        { title: 'tanktank', description: 'Jogo web TankTank em JavaScript publicado no GitHub Pages.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 9, 2025' },
        { title: 'PHPChain', description: 'Biblioteca em PHP que implementa o padrão Chain of Responsibility.', topics: [], language: 'PHP', updated: 'Updated on Apr 25, 2024' },
        { title: 'sum20', description: 'Jogo de números desenvolvido em JavaScript.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 21, 2024' },
        { title: 'aitools', description: 'Coleção de ferramentas simples de inteligência artificial desenvolvidas em HTML.', topics: [], language: 'HTML', updated: 'Updated on Mar 21, 2024' },
        { title: 'frames', description: 'Experimentos com frames utilizando HTML.', topics: [], language: 'HTML', updated: 'Updated on Jul 19, 2023' },
        { title: 'portfolio', description: 'Site de portfólio pessoal desenvolvido em HTML.', topics: ['website','portfolio','personal-website','personal-portfolio'], language: 'HTML', updated: 'Updated on Mar 21, 2023' },
        { title: 'gpt-calendar', description: 'Experimentos em JavaScript para integrar GPT ao Google Calendar.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 13, 2023' },
        { title: 'uno-online', description: 'Fork do jogo UNO online desenvolvido em JavaScript.', topics: [], language: 'JavaScript', updated: 'Updated on Mar 12, 2023' },
        { title: 'a-estrela', description: 'Implementação do algoritmo A* em JavaScript.', topics: [], language: 'JavaScript', updated: 'Updated on Jul 27, 2022' },
        { title: 'qa-challenge-medium', description: 'Desafio de QA de nível médio para prática de testes de software.', topics: [], language: '', updated: 'Updated on Jun 1, 2022' },
        { title: 'qa-challenge-easy', description: 'Desafio de QA de nível fácil para prática de testes de software.', topics: [], language: '', updated: 'Updated on May 21, 2022' },
        { title: 'transfer-clothes', description: 'Aplicativo web para gerenciamento e transferência de roupas.', topics: [], language: '', updated: 'Updated on Apr 20, 2022' },
        { title: 'jogodavelha2.0', description: 'Jogo da velha 2.0 desenvolvido em JavaScript.', topics: [], language: '', updated: 'Updated on Apr 17, 2022' },
        { title: 'estudos-de-git', description: 'Repositório de estudos sobre Git baseado em um fork.', topics: [], language: '', updated: 'Updated on Mar 17, 2022' },
        { title: 'ddd-laravel-model', description: 'Modelo DDD em PHP utilizando o framework Laravel.', topics: [], language: 'PHP', updated: 'Updated on Feb 28, 2022' },
        { title: 'PHPUnitProject', description: 'Exemplos de melhores práticas em testes unitários com PHP e PHPUnit.', topics: [], language: 'PHP', updated: 'Updated on Feb 13, 2022' },
        { title: 'SymfonyRESTful', description: 'API RESTful desenvolvida em PHP com o framework Symfony.', topics: [], language: 'PHP', updated: 'Updated on Feb 9, 2022' },
        { title: 'FlappyIA', description: 'Jogo estilo Flappy Bird em JavaScript com inteligência artificial usando Synaptic.js e Lodash.', topics: ['javascript','algorithm','ai','js','artificial-intelligence','ia'], language: 'JavaScript', updated: 'Updated on Feb 9, 2022' },
        { title: 'Semaforo', description: 'Simulador de semáforo com calculadora de estados desenvolvido em HTML.', topics: ['js','semaforo'], language: 'HTML', updated: 'Updated on Feb 7, 2022' },
        { title: 'api-classify-images', description: 'API em JavaScript que classifica imagens utilizando TensorFlow.js e Teachable Machine.', topics: ['nodejs','javascript','tensorflow','tensorflowjs','teachablemachine'], language: 'JavaScript', updated: 'Updated on Feb 7, 2022' },
        { title: 'random-cpf-php', description: 'Scripts PHP para geração e validação de números de CPF.', topics: [], language: 'PHP', updated: 'Updated on Feb 7, 2022' },
        { title: 'Compilador-8-semestre-CC', description: 'Trabalhos acadêmicos de Ciência da Computação do 8º semestre com código em PHP.', topics: [], language: 'PHP', updated: 'Updated on Feb 7, 2022' },
        { title: 'ionic-appet', description: 'Aplicativo de exemplo desenvolvido em JavaScript com o framework Ionic.', topics: [], language: 'JavaScript', updated: 'Updated on Feb 11, 2017' },
        { title: 'appet', description: 'Aplicação para animais com funcionalidades de venda, doação e procura, construída com HTML, CSS e JavaScript.', topics: [], language: 'CSS', updated: 'Updated on Oct 25, 2016' },
      { title: 'Varios-Projetos', description: 'Repositório de projetos acadêmicos em Java.', topics: [], language: 'Java', updated: 'Updated on Dec 20, 2015' }
      ];

      const certs = [
        { title: 'ENTREGA CONTÍNUA: CONFIABILIDADE E QUALIDADE NA IMPLANTAÇÃO DE SOFTWARE', provider: 'Alura', issued: 'mar de 2023', link: 'https://cursos.alura.com.br/certificate/e1a2fbe0-c515-4ed4-8959-f2f64ce5fffb', competencies: ['Continuous Delivery'] },
        { title: 'INTEGRAÇÃO CONTÍNUA: MAIS QUALIDADE E MENOS RISCO NO DESENVOLVIMENTO', provider: 'Alura', issued: 'mar de 2023', link: 'https://cursos.alura.com.br/certificate/b4baa7a8-d613-4158-8f75-7b0f4824e4d5', competencies: ['Continuous Integration'] },
        { title: 'MICROSSERVIÇOS: EXPLORANDO OS CONCEITOS', provider: 'Alura', issued: 'mar de 2023', link: 'https://cursos.alura.com.br/certificate/dd5a58e0-3a5b-46d1-889e-e555d0da9b81', competencies: ['Message Broker'] },
        { title: 'MICROSSERVIÇOS: PADRÕES DE PROJETO', provider: 'Alura', issued: 'mar de 2023', link: 'https://cursos.alura.com.br/certificate/ec0468dc-53e8-441f-beb3-d682e3a09ab4', competencies: ['Microsservice'] },
        { title: 'INTELIGÊNCIA ARTIFICIAL COM JAVASCRIPT E TENSORFLOW.JS', provider: 'Udemy', issued: 'ago de 2022', credential: 'UC-a8de6968-c618-4004-a0d7-ed3315c2c12a', link: 'https://www.udemy.com/certificate/UC-a8de6968-c618-4004-a0d7-ed3315c2c12a/' },
        { title: 'AVANÇANDO COM ORIENTAÇÃO A OBJETOS COM PHP: HERANÇA, POLIMORFISMO E INTERFACES', provider: 'Alura', issued: 'fev de 2022', link: 'https://cursos.alura.com.br/certificate/596efb99-a295-4119-8728-9f8bd31e849d' },
        { title: 'DESIGN PATTERNS EM PHP: PADRÕES COMPORTAMENTAIS', provider: 'Alura', issued: 'fev de 2022', link: 'https://cursos.alura.com.br/certificate/a49bbe0f-ada6-424b-b1cc-a1c3194d52c3', competencies: ['design patterns'] },
        { title: 'ORIENTAÇÃO A OBJETOS COM PHP: CLASSES, MÉTODOS E ATRIBUTOS', provider: 'Alura', issued: 'fev de 2022' },
        { title: 'PHP E CLEAN ARCHITECTURE: DESCOMPLICANDO ARQUITETURA DE SOFTWARE', provider: 'Alura', issued: 'fev de 2022', link: 'https://cursos.alura.com.br/certificate/3dbeaa2c-3737-482b-bafd-24fcabc18930' },
        { title: 'SYMFONY PARTE 1: CRIAÇÃO DE UMA API RESTFUL', provider: 'Alura', issued: 'fev de 2022', link: 'https://cursos.alura.com.br/certificate/5a9de20f-c2f6-4e36-bb6d-8ca5ca17a3ac' },
        { title: 'TESTES UNITÁRIOS E TDD COM PHP E PHPUNIT', provider: 'Udemy', issued: 'fev de 2022', link: 'https://www.udemy.com/certificate/UC-bc16db34-a760-4b4f-9b3e-564d4ad9d344/', competencies: ['Unit Testing'] },
        { title: 'GESTÃO DE PROJETOS', provider: 'Fundação Getulio Vargas', issued: 'ago de 2021', link: 'https://www.brasilopenbadge.com.br/pages/badge/b2af3a338e2ac3f0b4660943b79a49fa' },
        { title: 'HOME OFFICE PARA GESTORES', provider: 'Udemy', issued: 'mai de 2020' },
        { title: 'DALE CARNEGIE', provider: 'Dale Carnegie Training', issued: 'jan de 2019' }
      ];

      const jobs = [
        {
          year: '2023',
          company: 'EBANX (via Objective)',
          title: 'Software Engineer Golang',
          period: 'abr/2023 - presente (~1 ano 6 meses)',
          bullets: [
            'Desenvolvimento de APIs REST para integração entre sistemas internos',
            'Novo fluxo de cobrança de ponta a ponta, incluindo geração de CNAB',
            'Monitoramento financeiro para validar e corrigir inconsistências',
            'Observabilidade com métricas, logs estruturados e tracing (Grafana, CloudWatch)'
          ]
        },
        {
          year: '2022',
          company: 'EBANX (via Objective)',
          title: 'Software Engineer PHP',
          period: 'mar/2022 - mar/2023 (1 ano 1 mês)',
          bullets: [
            'Implementação de novo fluxo de conciliação e cálculo de novas taxas',
            'Filas para consumo de snapshots e processamento assíncrono',
            'Aumento da cobertura de testes e esteiras CI/CD com validações automáticas',
            'Observabilidade com métricas, logs estruturados e tracing (Grafana, CloudWatch)'
          ]
        },
        {
          year: '2017',
          company: 'Before TI',
          title: 'Team Lead',
          period: 'nov/2017 - fev/2022 (4 anos 4 meses)',
          bullets: [
            'Liderança de equipe: metas, acompanhamento e feedbacks',
            'Recrutamento, onboarding e desenvolvimento de colaboradores (1:1s, PDIs)',
            'Planejamento de Sprints (Scrum) e gestão do fluxo Kanban'
          ]
        },
        {
          year: '2014',
          company: 'Before TI',
          title: 'Software Development Engineer',
          period: 'out/2014 - out/2017 (3 anos 1 mês)',
          bullets: [
            'Implementação de novas tecnologias com código limpo',
            'Refatoração contínua para melhorar desempenho e reduzir manutenções'
          ]
        },
        {
          year: '2010',
          company: 'NDS Brasil Soluções Tecnológicas',
          title: 'Software Development Engineer',
          period: 'ago/2010 - out/2014 (4 anos 3 meses)',
          bullets: [
            'Desenvolvimento e manutenção de sistemas em PHP e MySQL',
            'Uso de Microsoft SQL Server'
          ]
        }
      ];

      // Renderização dos cards e filtros
      const grid = document.getElementById('grid');
      const filtersDiv = document.getElementById('filters');
      const certGrid = document.getElementById('certGrid');

      const order = ['PHP','JavaScript','HTML','CSS','Java'];
      const allLangs = [...new Set(repos.filter(r => r.language).map(r => r.language))].sort((a,b) => a.localeCompare(b));
      let activeFilters = new Set(allLangs);

      function createFilters() {
        filtersDiv.innerHTML = '';
        allLangs.forEach(lang => {
          const btn = document.createElement('button');
          btn.className = 'lang-filter';
          btn.type = 'button';
          btn.textContent = lang;
          btn.dataset.lang = lang;
          btn.setAttribute('aria-pressed', 'true');
          btn.addEventListener('click', () => {
            const pressed = btn.getAttribute('aria-pressed') === 'true';

            // Quando todos os filtros estão ativos e o filtro clicado está marcado,
            // mantém somente o filtro clicado ativo.
            if (activeFilters.size === allLangs.length && pressed) {
              activeFilters.clear();
              activeFilters.add(lang);
              document
                .querySelectorAll('#filters .lang-filter')
                .forEach(b => b.setAttribute('aria-pressed', 'false'));
              btn.setAttribute('aria-pressed', 'true');
              renderGrid();
              return;
            }

            btn.setAttribute('aria-pressed', String(!pressed));
            if (pressed) activeFilters.delete(lang); else activeFilters.add(lang);
            renderGrid();
          });
          filtersDiv.appendChild(btn);
        });
      }

      function createCertCard(cert) {
        const card = document.createElement(cert.link ? 'a' : 'div');
        card.className = 'card';
        if (cert.link) {
          card.href = cert.link;
          card.target = '_blank';
          card.rel = 'noopener noreferrer';
        }

        const title = document.createElement('h3');
        title.textContent = cert.title;
        card.appendChild(title);

        const provider = document.createElement('p');
        provider.className = 'desc';
        provider.textContent = cert.provider;
        card.appendChild(provider);

        const issued = document.createElement('div');
        issued.className = 'meta';
        issued.textContent = `Emitido em ${cert.issued}`;
        card.appendChild(issued);

        if (cert.credential) {
          const cred = document.createElement('div');
          cred.className = 'meta';
          cred.textContent = `Código: ${cert.credential}`;
          card.appendChild(cred);
        }

        if (Array.isArray(cert.competencies) && cert.competencies.length) {
          const chips = document.createElement('div');
          chips.className = 'chips';
          cert.competencies.forEach(c => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = c;
            chips.appendChild(chip);
          });
          card.appendChild(chips);
        }

        return card;
      }

      function renderCerts() {
        certGrid.innerHTML = '';
        certs.forEach(c => certGrid.appendChild(createCertCard(c)));
      }

      function createJobItem(job) {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        const year = document.createElement('span');
        year.className = 'timeline-year';
        year.textContent = job.year;
        item.appendChild(year);

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const title = document.createElement('h3');
        title.textContent = `${job.company} — ${job.title}`;
        content.appendChild(title);

        const period = document.createElement('div');
        period.className = 'meta';
        period.textContent = job.period;
        content.appendChild(period);

        const ul = document.createElement('ul');
        job.bullets.forEach(b => {
          const li = document.createElement('li');
          li.textContent = b;
          ul.appendChild(li);
        });
        content.appendChild(ul);

        item.appendChild(content);
        return item;
      }

      function renderJobs() {
        const panel = document.getElementById('tab-work');
        panel.innerHTML = '';
        const timeline = document.createElement('div');
        timeline.className = 'timeline';
        jobs.forEach(job => timeline.appendChild(createJobItem(job)));
        panel.appendChild(timeline);
      }

      function createCard(repo) {
        const card = document.createElement('a');
        card.className = 'card';
        card.setAttribute('role', 'article');
        card.href = "https://github.com/malgany/" + repo.title;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

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
      const tabs = document.querySelectorAll('.tab');
      const panels = document.querySelectorAll('.tab-panel');

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

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          panels.forEach(p => p.hidden = true);
          document.getElementById(`tab-${tab.dataset.tab}`).hidden = false;
        });
      });

      // Start
      createFilters();
      initTheme();
      renderGrid();
      renderCerts();
      renderJobs();

