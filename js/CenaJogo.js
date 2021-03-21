import Cena from "./Cena.js";
import Sprite from "./Sprite.js";
import Mapa from "./Mapa.js";
import modeloMapa1 from "../maps/mapa1.js";

export default class CenaJogo extends Cena {
  quandoColidir(a, b) {
    if (!this.aRemover.includes(a)) {
      this.aRemover.push(a);
    }
    if (!this.aRemover.includes(b)) {
      this.aRemover.push(b);
    }
    if (a.tags.has("pc") && b.tags.has("enemy")) {
      this.game.selecionaCena("fim");
    }
  }
  preparar() {
    super.preparar();
    const mapa1 = new Mapa(10, 14, 32);
    mapa1.carregaMapa(modeloMapa1);
    // mapa1.spriteAleatorio(modeloMapa1);
    this.configuraMapa(mapa1);

    const pc = new Sprite({ x: 50, y: 150 });
    pc.tags.add("pc");
    const cena = this;
    pc.controlar = function (dt) {
      if (cena.input.comandos.get("MOVE_ESQUERDA")) {
        this.vx = -50;
      } else if (cena.input.comandos.get("MOVE_DIREITA")) {
        this.vx = +50;
      } else {
        this.vx = 0;
      }
      if (cena.input.comandos.get("MOVE_CIMA")) {
        this.vy = -50;
      } else if (cena.input.comandos.get("MOVE_BAIXO")) {
        this.vy = +50;
      } else {
        this.vy = 0;
      }
    };

    this.quandoCriar = function (dt) {
      let nmx = Math.floor(Math.random() * (this.mapa.tiles[0].length - 2)) + 1;
      let nmy = Math.floor(Math.random() * (this.mapa.tiles.length - 2)) + 1;
      while (this.mapa.tiles[nmy][nmx] !== 0) {
        nmx = Math.floor(Math.random() * (this.mapa.tiles[0].length - 2)) + 1;
        nmy = Math.floor(Math.random() * (this.mapa.tiles.length - 2)) + 1;
      }
      const en1 = new Sprite({
        x: nmx * this.mapa.SIZE + this.mapa.SIZE / 2,
        y: nmy * this.mapa.SIZE + this.mapa.SIZE / 2,
        vx: Math.floor(Math.random() * 50) - 50,
        vy: Math.floor(Math.random() * 50) - 50,
        color: "yellow",
        controlar: perseguePC,
        tags: ["enemy"],
      });
      this.adicionar(en1);
      en1.passo(0);
      this.spawn = 2;
    };

    function perseguePC(dt) {
      this.vx = 25 * Math.sign(pc.x - this.x);
      this.vy = 25 * Math.sign(pc.y - this.x);
    }

    this.adicionar(pc);
    this.adicionar(
      new Sprite({
        x: 115,
        y: 70,
        vy: 10,
        color: "red",
        controlar: perseguePC,
        tags: ["enemy"],
      })
    );
    this.adicionar(
      new Sprite({
        x: 115,
        y: 160,
        vy: -10,
        color: "red",
        controlar: perseguePC,
        tags: ["enemy"],
      })
    );
  }
}
