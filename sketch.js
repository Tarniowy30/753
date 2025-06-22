// Projeto Agrinho 2025 - Conexão Campo-Cidade
// Versão final com dist(), map(), teclado, mouse e comentários explicativos

let cenario = "menu";
let imgCampo, imgCidade, imgConexao;
let somCampo, somCidade, somConexao;
let fade = 0;
let corFundo;
let corAlvo;
let botaoMenu;
let circuloX, circuloY; // Variáveis para efeito com dist() e map()

function preload() {
  // Carregando imagens e sons
  imgCampo = loadImage('campo.jpg');
  imgCidade = loadImage('cidade.jpg');
  imgConexao = loadImage('conexao.jpg');

  soundFormats('mp3');
  somCampo = loadSound('somCampo.mp3');
  somCidade = loadSound('somCidade.mp3');
  somConexao = loadSound('somConexao.mp3');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(18);
  corFundo = color(220);
  corAlvo = color(220);

  // Criar botão de voltar ao menu
  botaoMenu = createButton('Voltar ao Menu');
  botaoMenu.position(20, 20);
  botaoMenu.mousePressed(() => mudarCenario('menu'));
  botaoMenu.hide();

  // Inicializa posição do efeito de dist()
  circuloX = width / 2;
  circuloY = height / 2;
}

function draw() {
  // Transição de cor de fundo
  corFundo = lerpColor(corFundo, corAlvo, 0.05);
  background(corFundo);

  if (cenario === "menu") {
    botaoMenu.hide();
    mostrarMenu();
  } else {
    botaoMenu.show();

    if (cenario === "campo") {
      image(imgCampo, 0, 0, width, height);
      mostrarTextoCampo();
    } else if (cenario === "cidade") {
      image(imgCidade, 0, 0, width, height);
      mostrarTextoCidade();
    } else if (cenario === "conexao") {
      image(imgConexao, 0, 0, width, height);
      mostrarTextoConexao();
    }

    // Efeito usando dist() e map(): círculo que reage ao mouse
    desenharEfeitoDist();
  }

  // Efeito de fade-in no texto
  fade = constrain(fade + 2, 0, 255);
  fill(0, fade);
}

function mostrarMenu() {
  fill(0);
  textSize(26);
  text("🌱 Conexão Campo-Cidade 🌆", width / 2, height / 3);

  textSize(18);
  text("Explore como o Campo e a Cidade estão interligados.\nUse os botões ou o teclado:\n1 - Campo | 2 - Cidade | 3 - Conexão | m - Menu", width / 2, height / 2.2);
}

function mostrarTextoCampo() {
  desenharCaixaTexto();
  text("O campo é responsável por produzir os alimentos que abastecem a cidade.\nTecnologia e trabalho sustentam esse ciclo.", width / 2, 510);
}

function mostrarTextoCidade() {
  desenharCaixaTexto();
  text("A cidade consome, distribui e também fornece tecnologia para o campo.\nUma relação de mão dupla e colaboração.", width / 2, 510);
}

function mostrarTextoConexao() {
  desenharCaixaTexto();
  text("Campo e Cidade: juntos alimentam e desenvolvem a sociedade.\nCada ação no campo reflete na cidade e vice-versa.", width / 2, 510);
}

// Caixa de fundo para o texto de cada cenário
function desenharCaixaTexto() {
  fill(255, 230);
  stroke(180);
  rect(50, 450, 700, 120, 20);
  noStroke();
  fill(0);
  textSize(16);
}

// Efeito visual que usa dist() e map(): um círculo que muda de tamanho conforme a distância do mouse ao centro
function desenharEfeitoDist() {
  let distancia = dist(mouseX, mouseY, circuloX, circuloY);
  let tamanho = map(distancia, 0, width, 50, 10);
  fill(255, 100, 100, 150);
  noStroke();
  ellipse(mouseX, mouseY, tamanho, tamanho);
}

// Troca de cenário ao clicar com o mouse
function mousePressed() {
  if (cenario === "menu") {
    mudarCenario("campo");
  }
}

// Troca de cenário usando teclas
function keyPressed() {
  if (key === '1') {
    mudarCenario("campo");
  } else if (key === '2') {
    mudarCenario("cidade");
  } else if (key === '3') {
    mudarCenario("conexao");
  } else if (key === 'm') {
    mudarCenario("menu");
  }
}

// Função para mudar o cenário com efeitos sonoros e transição de cor
function mudarCenario(novo) {
  fade = 0;
  corFundo = color(220);
  corAlvo = color(random(255), random(255), random(255));

  if (novo === "campo") {
    somCampo.play();
  } else if (novo === "cidade") {
    somCidade.play();
  } else if (novo === "conexao") {
    somConexao.play();
  }
  cenario = novo;
}
