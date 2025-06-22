let cenario = "menu";
let imgCampo, imgCidade, imgConexao;
let somCampo, somCidade, somConexao;

function preload() {
  imgCampo = loadImage('campo.jpg');
  imgCidade = loadImage('cidade.jpg');
  imgConexao = loadImage('conexao.jpg');

  // Carregar sons
  soundFormats('mp3', 'ogg');
  somCampo = loadSound('somCampo.mp3');
  somCidade = loadSound('somCidade.mp3');
  somConexao = loadSound('somConexao.mp3');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(16);

  let botaoMenu = createButton('Voltar ao Menu');
  botaoMenu.position(37, 20);
  botaoMenu.mousePressed(() => mudarCenario('menu'));
}

function draw() {
  background(220);

  if (cenario === "menu") {
    background(180, 220, 255);
    fill(0);
    textSize(24);
    text("🌎 Conexão Campo e Cidade", width / 2, height / 2 - 60);
    textSize(16);
    text("Escolha uma opção nos botões acima para explorar os cenários.", width / 2, height / 2 + 10, 300, 30);

  } else if (cenario === "campo") {
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

function mudarCenario(novo) {
  // Parar todos os sons antes de tocar o novo
  somCampo.stop();
  somCidade.stop();
  somConexao.stop();

  cenario = novo;

  // Tocar o som do novo cenário
  if (cenario === "campo") {
    somCampo.loop();
  } else if (cenario === "cidade") {
    somCidade.loop();
  } else if (cenario === "conexao") {
    somConexao.loop();
  }
}

function mostrarTextoCampo() {
  fill(255, 230);
  stroke(100);
  strokeWeight(1);
  rect(50, height - 220, width - 100, 180, 15);
  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text("🌿 O Campo", width / 2, height - 210);

  textSize(16);
  textAlign(LEFT, TOP);
  textLeading(22);
  text(
    "Berço da produção de alimentos, biodiversidade e cultura.\n\n" +
    "No campo, a vida acontece em harmonia com a natureza.\n" +
    "Alimentos, recursos naturais e tradições culturais são preservados para abastecer as cidades.",
    70, height - 180, width - 140
  );
}

function mostrarTextoCidade() {
  fill(255, 230);
  stroke(100);
  strokeWeight(1);
  rect(50, height - 220, width - 100, 180, 15);
  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text("🏙️ A Cidade", width / 2, height - 210);

  textSize(16);
  textAlign(LEFT, TOP);
  textLeading(22);
  text(
    "Centro de consumo, inovação e serviços.\n\n" +
    "Nas cidades, os produtos do campo são transformados, distribuídos e consumidos.\n" +
    "Tecnologia e educação apoiam o desenvolvimento rural, criando uma ligação essencial com o campo.",
    70, height - 180, width - 140
  );
}

function mostrarTextoConexao() {
  fill(255, 230);
  stroke(100);
  strokeWeight(1);
  rect(50, height / 2 - 100, width - 100, 200, 15);
  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text("🌱 Conexão Campo-Cidade", width / 2, height / 2 - 90);

  textSize(16);
  textAlign(LEFT, TOP);
  textLeading(22);
  text(
    "Uma relação de equilíbrio e sustentabilidade.\n\n" +
    "🌾 O campo depende da cidade para inovação e mercado.\n" +
    "🏙️ A cidade depende do campo para o abastecimento de alimentos e recursos.\n\n" +
    "Juntas, constroem um futuro sustentável.",
    70, height / 2 - 50, width - 140
  );
}
