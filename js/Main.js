import AssetManager from "./AssetManager.js";
import Mixer from "./Mixer.js";
import inputManager from "./InputManager.js";
import Game from "./Game.js";
import CenaJogo from "./CenaJogo.js";
import CenaCarregando from "./CenaCarregando.js";
import CenaFim from "./CenaFim.js";

const input = new inputManager();
const mixer = new Mixer(10);
const assets = new AssetManager(mixer);

assets.carregaImagem("garota", "assets/garota.png");
assets.carregaImagem("esqueleto", "assets/skelly.png");
assets.carregaImagem("orc", "assets/orc.png");
assets.carregaImagem("fundograma", "assets/fundograma.png");
assets.carregaImagem("parede", "assets/parede.png");
assets.carregaImagem("pedra", "assets/pedra.png");
assets.carregaImagem("piso", "assets/piso.png");
assets.carregaImagem("pisograma", "assets/pisograma.png");
assets.carregaImagem("pisograma2", "assets/pisograma2.png");
assets.carregaImagem("ceu", "assets/ceu.png");
assets.carregaImagem("barreira2", "assets/barreira2.png");
assets.carregaImagem("moeda", "assets/moeda.png");


assets.carregaAudio("moeda1", "assets/coin.wav");
assets.carregaAudio("boom", "assets/boom.wav");
assets.carregaAudio("colisao", "assets/colisao.wav");

const canvas = document.querySelector("canvas");
canvas.width = 16 * 32;
canvas.height = 12 * 32;

input.configurarTeclado({
  ArrowLeft : "MOVE_ESQUERDA",
  ArrowRight : "MOVE_DIREITA",
  ArrowUp : "MOVE_CIMA",
  ArrowDown : "MOVE_BAIXO",
  " " : "PROXIMA_CENA",

});

const game = new Game(canvas, assets, input);

const cena0 = new CenaCarregando();
const cena1 = new CenaJogo();
const cena2 = new CenaFim();
game.adicionarCena("carregando", cena0);
game.adicionarCena("jogo", cena1);
game.adicionarCena("fim", cena2);


// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vx: 10 + (Math.random()*5), vy: 10 + (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vx: 10 + (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vy: 10 + (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vy: - 10 - (Math.random()*5), vy: - 10 - (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vx: - 10 - (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vy: - 10 - (Math.random()*5), color: "red" }));
// cena1.quadroTeste(4);

game.iniciar();

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      game.iniciar();
      break;
    case "S":
      game.parar();
      break;
    case "c":
      assets.play("moeda1");
      break;
    case "b":
      assets.play("boom");
      break;
  }
});
