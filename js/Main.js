import Cena from "./Cena.js";
import Sprite from "./Sprite.js";
import AssetManager from "./AssetManager.js";
import Mixer from "./Mixer.js";
import Mapa from "./Mapa.js";
import modeloMapa1 from "../maps/mapa1.js";

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


assets.carregaAudio("moeda", "assets/coin.wav");
assets.carregaAudio("boom", "assets/boom.wav");
assets.carregaAudio("colisao", "assets/colisao.wav");

const canvas = document.querySelector("canvas");
canvas.width = 16 * 32;
canvas.height = 12 * 32;
const cena1 = new Cena(canvas, assets);

const mapa1 = new Mapa(10, 14, 32);
mapa1.carregaMapa(modeloMapa1);
// mapa1.spriteAleatorio(modeloMapa1);
cena1.configuraMapa(mapa1);

const pc = new Sprite({ x: 50, y:150, vx: 10});
cena1.quandoCriar = function(dt) {
  let nmx = Math.floor(Math.random()*(this.mapa.tiles[0].length - 2)) + 1;
  let nmy = Math.floor(Math.random()*(this.mapa.tiles.length - 2)) + 1;
  while(this.mapa.tiles[nmy][nmx] !== 0) {
    nmx = Math.floor(Math.random()*(this.mapa.tiles[0].length - 2)) + 1;
    nmy = Math.floor(Math.random()*(this.mapa.tiles.length - 2)) + 1;
  }
  const en1 = new Sprite({ x: nmx * this.mapa.SIZE + this.mapa.SIZE/2, y: nmy * this.mapa.SIZE + this.mapa.SIZE/2, vx: -10, vy:20, color: "yellow" });
  this.adicionar(en1);
  en1.passo(0);
  this.spawn = 2;

};

cena1.adicionar(pc);
cena1.adicionar(new Sprite({ x: 115, y: 70, vy: 10, color: "red" }));
cena1.adicionar(new Sprite({ x: 115, y: 160, vy: -10, color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vx: 10 + (Math.random()*5), vy: 10 + (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vx: 10 + (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vy: 10 + (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vy: - 10 - (Math.random()*5), vy: - 10 - (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vx: - 10 - (Math.random()*5), color: "red" }));
// cena1.adicionar(new Sprite({ x: (Math.random()*512), y: (Math.random()*384), vy: - 10 - (Math.random()*5), color: "red" }));
// cena1.quadroTeste(4);

cena1.iniciar();

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      cena1.iniciar();
      break;
    case "S":
      cena1.parar();
      break;
    case "c":
      assets.play("moeda");
      break;
    case "b":
      assets.play("boom");
      break;
  }
});
