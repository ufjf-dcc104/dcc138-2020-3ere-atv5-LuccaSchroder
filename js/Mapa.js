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
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch (this.tiles[l][c]) {
                    case 1:
                        ctx.fillStyle = "grey";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "black";
                    break;
                    case 2:
                        ctx.fillStyle = "red";
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "orange";
                    break;
                    case 3:
                        ctx.fillStyle = "cyan";
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "blue";
                    break;
                    case 4:
                        // this.fundoImg =  "assets/fundograma.png";
                    break;
                    default:
                        ctx.fillStyle = "black";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "grey";
                    }
                    ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
                    ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
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

        while(mapa[L][C]==0) {
            L = Math.floor(Math.random() * 12);
            C = Math.floor(Math.random() * 16);
        }
        sprite.x = C*SIZE + SIZE/2;
    } 
}