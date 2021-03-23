export default class Mapa {
  constructor(linhas = 8, colunas = 12, tamanho = 32) {
    this.LINHAS = linhas;
    this.COLUNAS = colunas;
    this.SIZE = tamanho;
    this.tiles = [];
    for (let l = 0; l < this.LINHAS; l++) {
      this.tiles[l] = [];
      for (let c = 0; c < this.COLUNAS; c++) {
        this.tiles[l][c] = 0;
      }
    }
    this.cena = null;
    var fundoImg = new Image();
  }

  desenhar(ctx) {
    let imagem = null;
    for (let l = 0; l < this.LINHAS; l++) {
      for (let c = 0; c < this.COLUNAS; c++) {
        imagem = this.cena.assets.img("piso");
        switch (this.tiles[l][c]) {
          case 1:
            imagem = this.cena.assets.img("piso");
            ctx.fillStyle = "grey";
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            ctx.drawImage(
              imagem,
              c * this.SIZE,
              l * this.SIZE,
              this.SIZE,
              this.SIZE
            );
            break;
          case 2:
            imagem = this.cena.assets.img("pisograma2");
            ctx.drawImage(
              imagem,
              c * this.SIZE,
              l * this.SIZE,
              this.SIZE,
              this.SIZE
            );
            break;
          case 3:
            imagem = this.cena.assets.img("pisograma");
            ctx.drawImage(
              imagem,
              c * this.SIZE,
              l * this.SIZE,
              this.SIZE,
              this.SIZE
            );
            break;
          case 4:
            imagem = this.cena.assets.img("pedra");
            ctx.fillStyle = "black";
            ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            ctx.drawImage(
              imagem,
              c * this.SIZE,
              l * this.SIZE,
              this.SIZE,
              this.SIZE
            );

            break;
            case 5:
            imagem = this.cena.assets.img("ceu");
            ctx.drawImage(
              imagem,
              c * this.SIZE,
              l * this.SIZE,
              this.SIZE,
              this.SIZE
            );
            break;
            case 6:
            imagem = this.cena.assets.img("moeda");
            ctx.drawImage(
                imagem,
                c * this.SIZE,
                l * this.SIZE,
                this.SIZE,
                this.SIZE
            );
            break;
            
          default:
            ctx.fillStyle = "black";
            ctx.lineWidth = 1;
            ctx.strokeStyle = "grey";
            ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
        }
      }
    }
  }
  carregaMapa(modelo) {
    this.LINHAS = modelo.length;
    this.COLUNAS = modelo[0]?.length ?? 0;

    this.tiles = [];
    for (let l = 0; l < this.LINHAS; l++) {
      this.tiles[l] = [];
      for (let c = 0; c < this.COLUNAS; c++) {
        this.tiles[l][c] = modelo[l][c];
      }
    }
  }
  spriteAleatorio(modelo) {
    let L = this.LINHAS;
    let C = this.COLUNAS;

    L = Math.floor(Math.random() * 12);
    C = Math.floor(Math.random() * 16);

    while (mapa[L][C] == 0) {
      L = Math.floor(Math.random() * 12);
      C = Math.floor(Math.random() * 16);
    }
    sprite.x = C * SIZE + SIZE / 2;
  }
}
