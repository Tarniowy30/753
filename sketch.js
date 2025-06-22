
let cenario = "menu";
let imgCampo, imgCidade, imgConexao;
let somCampo, somCidade, somConexao;
let fade = 0;
let corFundo;
let corAlvo;
let botaoMenu;

function preload() {
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

  botaoMenu = createButton('Voltar ao Menu');
  botaoMenu.position(20, 20);
  botaoMenu.mousePressed(() => mudarCenario('menu'));
  botaoMenu.hide();
}

function draw() {
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
  }

  fade = constrain(fade + 2, 0, 255);
  fill(0, fade);
}

function mostrarMenu() {
  fill(0);
  textSize(26);
  text("🌱 Conexão Campo-Cidade 🌆", width / 2, height / 3);

  textSize(18);
  text("Explore como o Campo e a Cidade estão interligados.
Use os botões ou o teclado:
1-Campo | 2-Cidade | 3-Conexão | m-Menu", width / 2, height / 2.2);
}

function mostrarTextoCampo() {
  fill(255, 230);
  stroke(180);
  rect(50, 450, 700, 120, 20);
  noStroke();
  fill(0);
  textSize(16);
  text("O campo é responsável por produzir os alimentos que abastecem a cidade.
Tecnologia e trabalho sustentam esse ciclo.", width / 2, 510);
}

function mostrarTextoCidade() {
  fill(255, 230);
  stroke(180);
  rect(50, 450, 700, 120, 20);
  noStroke();
  fill(0);
  textSize(16);
  text("A cidade consome, distribui e também fornece tecnologia para o campo.
Uma relação de mão dupla e colaboração.", width / 2, 510);
}

function mostrarTextoConexao() {
  fill(255, 230);
  stroke(180);
  rect(50, 450, 700, 120, 20);
  noStroke();
  fill(0);
  textSize(16);
  text("Campo e Cidade: juntos alimentam e desenvolvem a sociedade.
Cada ação no campo reflete na cidade e vice-versa.", width / 2, 510);
}

function mousePressed() {
  if (cenario === "menu") {
    mudarCenario("campo");
  }
}

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
