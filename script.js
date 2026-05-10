//  PORTAL DE APRENDIZAGEM TI COM IA
//  BANCO DE PERGUNTAS 
const BANCO_PERGUNTAS = [
  // INICIANTE
  { id:1,  nivel:'Iniciante',     enunciado:'O que significa a sigla "IA"?',
    alternativas:[{id:'a',texto:'Inteligência Artificial'},{id:'b',texto:'Interface Avançada'},{id:'c',texto:'Informação Automatizada'},{id:'d',texto:'Instrução Algorítmica'}], correta:'a' },
  { id:2,  nivel:'Iniciante',     enunciado:'Qual das opções abaixo é um exemplo de dispositivo de entrada?',
    alternativas:[{id:'a',texto:'Monitor'},{id:'b',texto:'Impressora'},{id:'c',texto:'Teclado'},{id:'d',texto:'Caixa de som'}], correta:'c' },
  { id:3,  nivel:'Iniciante',     enunciado:'O que é um navegador (browser)?',
    alternativas:[{id:'a',texto:'Um programa para editar fotos'},{id:'b',texto:'Um software para acessar a internet'},{id:'c',texto:'Um sistema operacional'},{id:'d',texto:'Um banco de dados'}], correta:'b' },
  { id:4,  nivel:'Iniciante',     enunciado:'O que significa "download"?',
    alternativas:[{id:'a',texto:'Enviar arquivos para a internet'},{id:'b',texto:'Apagar arquivos do computador'},{id:'c',texto:'Receber/baixar arquivos da internet'},{id:'d',texto:'Imprimir documentos'}], correta:'c' },
  { id:5,  nivel:'Iniciante',     enunciado:'Qual é a função principal de um sistema operacional?',
    alternativas:[{id:'a',texto:'Navegar na internet'},{id:'b',texto:'Gerenciar o hardware e software do computador'},{id:'c',texto:'Criar documentos de texto'},{id:'d',texto:'Reproduzir vídeos'}], correta:'b' },
  { id:6,  nivel:'Iniciante',     enunciado:'O que é um arquivo ".pdf"?',
    alternativas:[{id:'a',texto:'Um arquivo de áudio'},{id:'b',texto:'Um arquivo de vídeo'},{id:'c',texto:'Um formato de documento portátil'},{id:'d',texto:'Um arquivo de imagem editável'}], correta:'c' },

  // BÁSICO
  { id:7,  nivel:'Básico',        enunciado:'O que é engenharia de prompt?',
    alternativas:[{id:'a',texto:'Programar robôs industriais'},{id:'b',texto:'Elaborar instruções eficazes para modelos de IA'},{id:'c',texto:'Criar interfaces gráficas'},{id:'d',texto:'Desenvolver banco de dados'}], correta:'b' },
  { id:8,  nivel:'Básico',        enunciado:'O que é HTML?',
    alternativas:[{id:'a',texto:'Uma linguagem de programação back-end'},{id:'b',texto:'Um banco de dados relacional'},{id:'c',texto:'A linguagem de marcação usada para criar páginas web'},{id:'d',texto:'Um sistema operacional para servidores'}], correta:'c' },
  { id:9,  nivel:'Básico',        enunciado:'Qual a função do CSS em um site?',
    alternativas:[{id:'a',texto:'Armazenar dados do usuário'},{id:'b',texto:'Definir a lógica e comportamento da página'},{id:'c',texto:'Estilizar e dar aparência visual aos elementos HTML'},{id:'d',texto:'Conectar o site a um banco de dados'}], correta:'c' },
  { id:10, nivel:'Básico',        enunciado:'O que é um loop em programação?',
    alternativas:[{id:'a',texto:'Um erro no código'},{id:'b',texto:'Uma estrutura que repete um bloco de código'},{id:'c',texto:'Uma função matemática'},{id:'d',texto:'Um tipo de variável'}], correta:'b' },
  { id:11, nivel:'Básico',        enunciado:'O que significa "UI" em design?',
    alternativas:[{id:'a',texto:'Unified Interface'},{id:'b',texto:'User Integration'},{id:'c',texto:'User Interface (Interface do Usuário)'},{id:'d',texto:'Universal Index'}], correta:'c' },
  { id:12, nivel:'Básico',        enunciado:'O que é prototipagem em desenvolvimento de software?',
    alternativas:[{id:'a',texto:'Testar o produto final com usuários reais'},{id:'b',texto:'Criar uma versão inicial e simplificada de um produto para validação'},{id:'c',texto:'Documentar o código-fonte'},{id:'d',texto:'Configurar servidores de produção'}], correta:'b' },

  // INTERMEDIÁRIO
  { id:13, nivel:'Intermediário',  enunciado:'Qual destas é uma boa prática de engenharia de prompt?',
    alternativas:[{id:'a',texto:'Usar instruções vagas para dar liberdade à IA'},{id:'b',texto:'Ser específico, contextual e fornecer exemplos'},{id:'c',texto:'Evitar pontuação nas instruções'},{id:'d',texto:'Usar apenas palavras-chave isoladas'}], correta:'b' },
  { id:14, nivel:'Intermediário',  enunciado:'O que é uma API REST?',
    alternativas:[{id:'a',texto:'Um banco de dados relacional'},{id:'b',texto:'Uma linguagem de programação'},{id:'c',texto:'Um conjunto de regras para comunicação entre sistemas via HTTP'},{id:'d',texto:'Um sistema de controle de versão'}], correta:'c' },
  { id:15, nivel:'Intermediário',  enunciado:'O que é o localStorage no navegador?',
    alternativas:[{id:'a',texto:'Um banco de dados no servidor'},{id:'b',texto:'Uma área de armazenamento de dados no próprio navegador do usuário'},{id:'c',texto:'Um cache temporário apagado ao fechar a aba'},{id:'d',texto:'Um tipo de cookie criptografado'}], correta:'b' },
  { id:16, nivel:'Intermediário',  enunciado:'Em JavaScript, qual método converte um objeto em string JSON?',
    alternativas:[{id:'a',texto:'JSON.parse()'},{id:'b',texto:'JSON.convert()'},{id:'c',texto:'JSON.stringify()'},{id:'d',texto:'JSON.toString()'}], correta:'c' },
  { id:17, nivel:'Intermediário',  enunciado:'O que é UX (User Experience)?',
    alternativas:[{id:'a',texto:'A aparência visual de um sistema'},{id:'b',texto:'A experiência e satisfação do usuário ao interagir com um produto'},{id:'c',texto:'A velocidade de carregamento de um site'},{id:'d',texto:'O código responsável pela animação de botões'}], correta:'b' },
  { id:18, nivel:'Intermediário',  enunciado:'O que é versionamento de código com Git?',
    alternativas:[{id:'a',texto:'Um sistema para compactar arquivos'},{id:'b',texto:'Uma linguagem de programação para back-end'},{id:'c',texto:'Um sistema que registra o histórico de alterações no código'},{id:'d',texto:'Um gerenciador de banco de dados'}], correta:'c' },

  // AVANÇADO
  { id:19, nivel:'Avançado',       enunciado:'O que é um modelo de linguagem de grande escala (LLM)?',
    alternativas:[{id:'a',texto:'Um banco de dados com milhões de registros'},{id:'b',texto:'Um modelo de IA treinado em grandes volumes de texto para gerar linguagem'},{id:'c',texto:'Um compilador de código avançado'},{id:'d',texto:'Um sistema de armazenamento em nuvem'}], correta:'b' },
  { id:20, nivel:'Avançado',       enunciado:'O que significa "temperatura" em modelos de IA generativa?',
    alternativas:[{id:'a',texto:'A velocidade de processamento do modelo'},{id:'b',texto:'O consumo de energia do servidor'},{id:'c',texto:'Um parâmetro que controla a criatividade/aleatoriedade das respostas'},{id:'d',texto:'O tamanho máximo do contexto aceito'}], correta:'c' },
  { id:21, nivel:'Avançado',       enunciado:'O que é "hallucination" em IA?',
    alternativas:[{id:'a',texto:'Quando a IA se recusa a responder'},{id:'b',texto:'Quando a IA gera informações falsas com aparência de verdadeiras'},{id:'c',texto:'Um erro de conexão com a API'},{id:'d',texto:'Quando a IA repete a mesma resposta'}], correta:'b' },
  { id:22, nivel:'Avançado',       enunciado:'Qual técnica de prompt instrui a IA a raciocinar passo a passo?',
    alternativas:[{id:'a',texto:'Zero-shot prompting'},{id:'b',texto:'Role prompting'},{id:'c',texto:'Chain-of-thought prompting'},{id:'d',texto:'Negative prompting'}], correta:'c' },
  { id:23, nivel:'Avançado',       enunciado:'O que é um "token" no contexto de LLMs?',
    alternativas:[{id:'a',texto:'Uma senha de acesso à API'},{id:'b',texto:'A menor unidade de texto processada pelo modelo (parte de palavra)'},{id:'c',texto:'Um arquivo de configuração do modelo'},{id:'d',texto:'Um tipo de variável em Python'}], correta:'b' },
  { id:24, nivel:'Avançado',       enunciado:'O que é RAG (Retrieval-Augmented Generation)?',
    alternativas:[{id:'a',texto:'Um método de treinar modelos do zero'},{id:'b',texto:'Uma técnica que combina busca em documentos externos com geração de texto'},{id:'c',texto:'Um formato de exportação de modelos de IA'},{id:'d',texto:'Uma linguagem de consulta para bancos vetoriais'}], correta:'b' },

  // PROFICIÊNCIA
  { id:25, nivel:'Proficiência',   enunciado:'O que é fine-tuning em modelos de linguagem?',
    alternativas:[{id:'a',texto:'Ajustar parâmetros visuais da interface do modelo'},{id:'b',texto:'Treinar um modelo pré-treinado com dados específicos para uma tarefa'},{id:'c',texto:'Comprimir o modelo para uso em dispositivos móveis'},{id:'d',texto:'Converter o modelo para outro idioma'}], correta:'b' },
  { id:26, nivel:'Proficiência',   enunciado:'Qual a diferença entre aprendizado supervisionado e não supervisionado?',
    alternativas:[{id:'a',texto:'O supervisionado usa GPU e o não supervisionado usa CPU'},{id:'b',texto:'No supervisionado os dados têm rótulos; no não supervisionado, não'},{id:'c',texto:'O não supervisionado é mais rápido que o supervisionado'},{id:'d',texto:'O supervisionado só funciona com texto; o não supervisionado com imagens'}], correta:'b' },
  { id:27, nivel:'Proficiência',   enunciado:'O que é embeddings em IA?',
    alternativas:[{id:'a',texto:'Imagens geradas por redes neurais'},{id:'b',texto:'Representações numéricas (vetores) de textos ou objetos em espaço multidimensional'},{id:'c',texto:'Arquivos de configuração de modelos'},{id:'d',texto:'Técnica de compressão de dados de treinamento'}], correta:'b' },
  { id:28, nivel:'Proficiência',   enunciado:'O que é o conceito de "context window" em LLMs?',
    alternativas:[{id:'a',texto:'A resolução da tela usada pelo modelo'},{id:'b',texto:'A quantidade máxima de tokens que o modelo pode processar em uma única interação'},{id:'c',texto:'O histórico de conversas armazenado no servidor'},{id:'d',texto:'A janela do navegador onde a IA é exibida'}], correta:'b' },
];

// UTILITÁRIOS 
function getUsuarios()  { return JSON.parse(localStorage.getItem('usuarios')  || '[]'); }
function saveUsuarios(u){ localStorage.setItem('usuarios', JSON.stringify(u)); }
function getUsuarioLogado() {
  const id = localStorage.getItem('usuarioId');
  if (!id) return null;
  return getUsuarios().find(u => u.id === id) || null;
}
function salvarUsuario(usuario) {
  const todos = getUsuarios();
  const idx   = todos.findIndex(u => u.id === usuario.id);
  if (idx >= 0) todos[idx] = usuario; else todos.push(usuario);
  saveUsuarios(todos);
}

function calcularNivel(pct) {
  if (pct >= 90) return 'Proficiência';
  if (pct >= 75) return 'Avançado';
  if (pct >= 55) return 'Intermediário';
  if (pct >= 35) return 'Básico';
  return 'Iniciante';
}

function selecionarPerguntas(usuario) {
  // Distribui perguntas de acordo com o nível atual do usuário
  const nivel = usuario.nivelAtual || 'Iniciante';
  const mapa  = { 'Iniciante':0, 'Básico':1, 'Intermediário':2, 'Avançado':3, 'Proficiência':4 };
  const idx   = mapa[nivel] ?? 0;

  // Pega 2 do nível anterior (se houver), 4 do nível atual, 2 do próximo (se houver)
  const niveis  = ['Iniciante','Básico','Intermediário','Avançado','Proficiência'];
  const pool    = [];

  const adicionar = (n, qtd) => {
    const grupo = BANCO_PERGUNTAS.filter(p => p.nivel === n);
    const embaralhado = [...grupo].sort(() => Math.random() - .5);
    pool.push(...embaralhado.slice(0, qtd));
  };

  if (idx > 0)              adicionar(niveis[idx - 1], 2);
  adicionar(niveis[idx],                               4);
  if (idx < niveis.length - 1) adicionar(niveis[idx + 1], 2);

  // Garante ao menos 6 perguntas
  if (pool.length < 6) adicionar(niveis[idx], 6 - pool.length);

  return pool.sort(() => Math.random() - .5).slice(0, 8);
}

// LOGIN / CADASTRO 
if (document.getElementById('login-form')) {

  const loginForm    = document.getElementById('login-form');
  const cadastroForm = document.getElementById('cadastro-form');
  const mensagem     = document.getElementById('mensagem');

  function mostrarLogin() {
    loginForm.style.display    = 'flex';
    loginForm.style.flexDirection = 'column';
    cadastroForm.style.display = 'none';
    mensagem.textContent       = '';
  }
  function mostrarCadastro() {
    cadastroForm.style.display    = 'flex';
    cadastroForm.style.flexDirection = 'column';
    loginForm.style.display       = 'none';
    mensagem.textContent          = '';
  }

  document.getElementById('btn-mostrar-cadastro').addEventListener('click', mostrarCadastro);
  document.getElementById('btn-voltar-login').addEventListener('click', mostrarLogin);

  // Cadastro
  cadastroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome  = document.getElementById('cadastro-nome').value.trim();
    const email = document.getElementById('cadastro-email').value.trim().toLowerCase();
    const senha = document.getElementById('cadastro-senha').value;

    const usuarios = getUsuarios();
    if (usuarios.find(u => u.email === email)) {
      mensagem.style.color  = '#ef4444';
      mensagem.textContent  = 'Este e-mail já está cadastrado.';
      return;
    }

    const novoUsuario = {
      id:         Date.now().toString(),
      nome, email, senha,
      nivelAtual:       'Iniciante',
      totalTentativas:  0,
      somaPercentuais:  0,
      historico:        [],
      proficienciaRespondida: false,
      criadoEm:         new Date().toISOString()
    };
    salvarUsuario(novoUsuario);

    mensagem.style.color = '#22c55e';
    mensagem.textContent = 'Conta criada com sucesso! Faça login.';
    setTimeout(mostrarLogin, 1800);
  });

  // Login
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const senha = document.getElementById('senha').value;
    const msg   = document.getElementById('mensagem');

    const usuario = getUsuarios().find(u => u.email === email && u.senha === senha);
    if (usuario) {
      localStorage.setItem('usuarioId',   usuario.id);
      localStorage.setItem('usuarioNome', usuario.nome);
      msg.style.color  = '#22c55e';
      msg.textContent  = `Bem-vindo, ${usuario.nome}!`;
      setTimeout(() => window.location.href = 'dashboard.html', 900);
    } else {
      msg.style.color  = '#ef4444';
      msg.textContent  = 'E-mail ou senha incorretos.';
    }
  });
}

// DASHBOARD 
if (document.querySelector('.dashboard-container')) {

  const usuario = getUsuarioLogado();
  if (!usuario) { window.location.href = 'login.html'; }

  // Saudação
  const nomeSpan = document.getElementById('nome-usuario');
  if (nomeSpan) nomeSpan.textContent = usuario.nome || 'Estudante';

  let graficoEvolucaoInstance = null;
  let graficoPorNivelInstance = null;

  function formatarData(dataStr) {
    if (!dataStr) return '—';
    return new Date(dataStr).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' });
  }

  function badgeNivel(nivel) {
    const cores = {
      'Iniciante':     { bg:'#eff6ff', color:'#3b82f6' },
      'Básico':        { bg:'#f0fdf4', color:'#16a34a' },
      'Intermediário': { bg:'#fefce8', color:'#ca8a04' },
      'Avançado':      { bg:'#fdf4ff', color:'#9333ea' },
      'Proficiência':  { bg:'#fff1f2', color:'#e11d48' },
    };
    const c = cores[nivel] || { bg:'#f1f5f9', color:'#475569' };
    return `<span class="nivel-badge" style="background:${c.bg};color:${c.color};padding:3px 10px;border-radius:9999px;font-size:.78rem;font-weight:600;">${nivel || '—'}</span>`;
  }

  function badgeResultado(percentual) {
    const pct = parseFloat(percentual) || 0;
    let bg, color, icone;
    if      (pct >= 80) { bg='#f0fdf4'; color='#16a34a'; icone='✅'; }
    else if (pct >= 50) { bg='#fefce8'; color='#ca8a04'; icone='⚠️'; }
    else                { bg='#fff1f2'; color='#e11d48'; icone='❌'; }
    return `<span style="background:${bg};color:${color};padding:3px 10px;border-radius:9999px;font-size:.78rem;font-weight:600;">${icone} ${pct.toFixed(1)}%</span>`;
  }

  function carregarDashboard() {
    const u = getUsuarioLogado();
    if (!u) return;

    // KPIs
    const media = u.totalTentativas > 0 ? (u.somaPercentuais / u.totalTentativas) : 0;
    const ultima = u.historico.length > 0 ? u.historico[u.historico.length - 1].dataFim : null;

    document.getElementById('kpi-nivel').textContent      = u.nivelAtual || 'Iniciante';
    document.getElementById('kpi-tentativas').textContent = u.totalTentativas ?? 0;
    document.getElementById('kpi-media').textContent      = `${media.toFixed(1)}%`;
    document.getElementById('kpi-ultima').textContent     = formatarData(ultima);

    // Gráficos
    desenharGraficoEvolucao(u.historico);
    desenharGraficoPorNivel(u.historico);
    renderizarHistorico(u.historico);
  }

  function desenharGraficoEvolucao(historico) {
    const canvas = document.getElementById('graficoEvolucao');
    const empty  = document.getElementById('evolucao-empty');
    if (!canvas) return;
    if (graficoEvolucaoInstance) { graficoEvolucaoInstance.destroy(); graficoEvolucaoInstance = null; }

    if (!historico || historico.length === 0) {
      canvas.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }
    canvas.style.display = 'block';
    if (empty) empty.style.display = 'none';

    const dados  = [...historico].slice(-10);
    const labels = dados.map((_, i) => `#${i + 1}`);
    const valores = dados.map(t => parseFloat(t.percentualAcerto) || 0);

    graficoEvolucaoInstance = new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels,
        datasets: [{ label:'Acertos (%)', data: valores,
          borderColor:'#AB34FA', backgroundColor:'rgba(171,52,250,0.1)',
          pointBackgroundColor:'#AB34FA', pointRadius:5, fill:true, tension:0.4 }]
      },
      options: {
        responsive:true,
        plugins:{ legend:{ display:false } },
        scales:{ y:{ beginAtZero:true, max:100, ticks:{ callback: v => v+'%' } } }
      }
    });
  }

  function desenharGraficoPorNivel(historico) {
    const canvas = document.getElementById('graficoPorNivel');
    const empty  = document.getElementById('nivel-empty');
    if (!canvas) return;
    if (graficoPorNivelInstance) { graficoPorNivelInstance.destroy(); graficoPorNivelInstance = null; }

    if (!historico || historico.length === 0) {
      canvas.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }
    canvas.style.display = 'block';
    if (empty) empty.style.display = 'none';

    const niveis = ['Iniciante','Básico','Intermediário','Avançado','Proficiência'];
    const porNivel = niveis.map(n => {
      const tentativas = historico.filter(t => t.nivelResultado === n);
      const media = tentativas.length > 0
        ? tentativas.reduce((s, t) => s + (parseFloat(t.percentualAcerto) || 0), 0) / tentativas.length
        : 0;
      return { nivel: n, media };
    }).filter(n => n.media > 0);

    if (porNivel.length === 0) {
      canvas.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }

    const cores = ['#AB34FA','#A9C6F9','#7B1FA2','#C084FC','#A855F7'];
    graficoPorNivelInstance = new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: porNivel.map(n => n.nivel),
        datasets: [{ label:'Média de Acertos (%)', data: porNivel.map(n => n.media),
          backgroundColor: porNivel.map((_, i) => cores[i % cores.length]), borderRadius:8 }]
      },
      options: {
        responsive:true,
        plugins:{ legend:{ display:false } },
        scales:{ y:{ beginAtZero:true, max:100, ticks:{ callback: v => v+'%' } } }
      }
    });
  }

  function renderizarHistorico(historico) {
    const tbody = document.getElementById('historico-tbody');
    if (!tbody) return;
    if (!historico || historico.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="table-empty">Nenhuma tentativa realizada ainda.</td></tr>';
      return;
    }
    tbody.innerHTML = [...historico].reverse().slice(0, 7).map(t => `
      <tr>
        <td>Quiz Geral</td>
        <td>${formatarData(t.dataFim)}</td>
        <td>${t.totalAcertos ?? 0}/${t.totalPerguntas ?? 0}</td>
        <td>${badgeResultado(t.percentualAcerto)}</td>
        <td>${badgeNivel(t.nivelResultado)}</td>
      </tr>`).join('');
  }

  // Modal proficiência
  const modal = document.getElementById('modal-proficiencia');
  if (usuario && !usuario.proficienciaRespondida && modal) {
    modal.style.display = 'flex';
    document.getElementById('form-proficiencia').addEventListener('submit', function(e) {
      e.preventDefault();
      const u = getUsuarioLogado();
      u.proficienciaRespondida = true;
      salvarUsuario(u);
      modal.style.display = 'none';
      carregarDashboard();
    });
  }

  carregarDashboard();

  // Botões
  const btnQuiz = document.getElementById('btn-quiz');
  if (btnQuiz) btnQuiz.addEventListener('click', () => window.location.href = 'quiz.html');

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) btnLogout.addEventListener('click', () => {
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('usuarioNome');
    window.location.href = 'login.html';
  });

  const btnResetar = document.getElementById('btn-resetar');
  if (btnResetar) btnResetar.addEventListener('click', () => {
    if (!confirm('Tem certeza que deseja limpar todas as suas estatísticas? Esta ação não pode ser desfeita.')) return;
    const u = getUsuarioLogado();
    u.historico         = [];
    u.totalTentativas   = 0;
    u.somaPercentuais   = 0;
    u.nivelAtual        = 'Iniciante';
    u.proficienciaRespondida = false;
    salvarUsuario(u);
    alert('✅ Estatísticas resetadas com sucesso!');
    carregarDashboard();
  });

  const chatbotBtn = document.getElementById('chatbot-btn');
  if (chatbotBtn) chatbotBtn.addEventListener('click', () => alert('Assistente de IA em desenvolvimento!'));
}

// QUIZ 
if (document.getElementById('quiz-form')) {

  const usuario = getUsuarioLogado();
  if (!usuario) { window.location.href = 'login.html'; }

  const quizEnunciado    = document.getElementById('quiz-enunciado');
  const quizAlternativas = document.getElementById('quiz-alternativas');
  const quizForm         = document.getElementById('quiz-form');
  const btnResponder     = document.getElementById('btn-responder');
  const quizFeedback     = document.getElementById('quiz-feedback');

  let perguntas      = selecionarPerguntas(usuario);
  let indicePergunta = 0;
  let acertosCount   = 0;

  function atualizarProgresso() {
    const el  = document.getElementById('quiz-progresso');
    const bar = document.getElementById('barra-progresso-fill');
    if (el)  el.textContent    = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
    if (bar) bar.style.width   = `${(indicePergunta / perguntas.length) * 100}%`;
  }

  function mostrarPergunta() {
    if (indicePergunta >= perguntas.length) { mostrarResultadoFinal(); return; }

    const p = perguntas[indicePergunta];
    quizForm.dataset.perguntaId = p.id;
    quizEnunciado.textContent   = p.enunciado;
    quizAlternativas.innerHTML  = '';

    p.alternativas.forEach(item => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="alternativa" value="${item.id}"> <span>${item.texto}</span>`;
      quizAlternativas.appendChild(label);
    });

    btnResponder.disabled      = true;
    quizFeedback.textContent   = '';
    quizFeedback.style.color   = '';
    atualizarProgresso();
  }

  function mostrarResultadoFinal() {
    const pct  = perguntas.length > 0 ? (acertosCount / perguntas.length) * 100 : 0;
    const nivel = calcularNivel(pct);

    // Salva no histórico do usuário
    const u = getUsuarioLogado();
    const entrada = {
      dataFim:          new Date().toISOString(),
      totalAcertos:     acertosCount,
      totalPerguntas:   perguntas.length,
      percentualAcerto: pct.toFixed(1),
      nivelResultado:   nivel
    };
    u.historico.push(entrada);
    u.totalTentativas++;
    u.somaPercentuais += pct;
    u.nivelAtual       = nivel;
    salvarUsuario(u);

    // UI
    quizForm.style.display    = 'none';
    quizFeedback.style.display = 'none';

    const resultadoEl = document.getElementById('quiz-resultado');
    if (resultadoEl) {
      const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚';
      resultadoEl.innerHTML = `
        <div class="resultado-final">
          <div class="resultado-emoji">${emoji}</div>
          <h3>Quiz Concluído!</h3>
          <p class="resultado-placar">${acertosCount} <span>de</span> ${perguntas.length}</p>
          <p class="resultado-pct">${pct.toFixed(1)}% de acertos</p>
          <p style="margin-bottom:16px;font-size:.9rem;color:#6b7280;">Seu nível: ${nivel}</p>
          <button id="btn-voltar-resultado">← Voltar ao Dashboard</button>
        </div>`;
      resultadoEl.style.display = 'block';
      document.getElementById('btn-voltar-resultado').onclick = () => window.location.href = 'dashboard.html';
    }

    const el  = document.getElementById('quiz-progresso');
    const bar = document.getElementById('barra-progresso-fill');
    if (el)  el.textContent  = `Concluído! ${acertosCount}/${perguntas.length} acertos`;
    if (bar) bar.style.width = '100%';
  }

  mostrarPergunta();

  quizAlternativas.addEventListener('change', e => {
    if (e.target.name === 'alternativa') btnResponder.disabled = false;
  });

  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const escolhida  = quizForm.elements['alternativa'].value;
    const pergunta   = perguntas[indicePergunta];
    const correto    = escolhida === pergunta.correta;

    if (correto) acertosCount++;
    btnResponder.disabled    = true;
    quizFeedback.style.color = correto ? '#16a34a' : '#e11d48';
    quizFeedback.textContent = correto ? '✅ Resposta correta!' : `❌ Incorreta. A certa era: "${pergunta.alternativas.find(a => a.id === pergunta.correta)?.texto}"`;

    quizAlternativas.querySelectorAll('label').forEach(label => {
      const input = label.querySelector('input');
      if (input.value === escolhida) {
        label.style.background  = correto ? '#f0fdf4' : '#fff1f2';
        label.style.borderColor = correto ? '#16a34a' : '#e11d48';
      }
      if (input.value === pergunta.correta && !correto) {
        label.style.background  = '#f0fdf4';
        label.style.borderColor = '#16a34a';
      }
      input.disabled = true;
    });

    setTimeout(() => { indicePergunta++; mostrarPergunta(); }, 1800);
  });

  document.getElementById('btn-voltar').onclick = () => window.location.href = 'dashboard.html';
}
