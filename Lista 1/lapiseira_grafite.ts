class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;

    constructor(calibre: number, dureza: string, tamanho: number) {
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }

    desgastePorFolha():number {
        if(this.dureza == "HB"){
            return 1;
        }
        if(this.dureza == "2B"){
            return 2;
        }
        if(this.dureza == "4B"){
            return 4;
        }
        if(this.dureza == "6B"){
            return 6;
        }
        return 0;
    }

    toString():string {
        return "[" + this.calibre + ":" + this.dureza + ":" + this.tamanho + "]";
    }
}

class Lapiseira {
    calibre: number;
    grafite: Grafite|null;

    constructor(calibre: number){
        this.calibre = calibre;
        this.grafite = null;
    }

    inserir(grafite: Grafite):void {
        if(grafite.calibre != this.calibre){
            console.log("fail: calibre incompatível");
            return;
        }
        if(this.grafite != null){
            console.log("fail: já existe grafite");
            return;
        }
        this.grafite = grafite;
    }

    remover():Grafite|null {
        let grafite_aux = this.grafite;
        this.grafite = null;
        return grafite_aux;
    }

    write(folhas: number):void {
        if(this.grafite == null){
            console.log("fail: não tem grafite");
            return;
        }
        let total_grafite_necessario = this.grafite.desgastePorFolha() * folhas;
        if(total_grafite_necessario > this.grafite.tamanho){
            let folhas_escritas = Math.floor(this.grafite.tamanho/this.grafite.desgastePorFolha());
            console.log("fail: folhas escritas completas: " + folhas_escritas);
            this.grafite = null;
            console.log("warning: grafite acabou");
            return;
        }
        this.grafite.tamanho -= total_grafite_necessario;
        if(this.grafite.tamanho == 0){
            this.grafite = null;
            console.log("warning: grafite acabou");
        }
    }

    toString():string {
        if(this.grafite == null){
            return "calibre: " + this.calibre + ", grafite: null";
        }else{
            return "calibre: " + this.calibre + ", grafite: " + this.grafite.toString();
        }
    }
}

// Bloco 1 do shell
let lapiseira1: Lapiseira = new Lapiseira(0.5);
console.log(lapiseira1.toString());

lapiseira1.inserir(new Grafite(0.7, "2B", 50));
lapiseira1.inserir(new Grafite(0.5, "2B", 50));
console.log(lapiseira1.toString());

// Bloco 2 do shell
let lapiseira2: Lapiseira = new Lapiseira(0.3);
lapiseira2.inserir(new Grafite(0.3, "2B", 50));
console.log(lapiseira2.toString());

lapiseira2.inserir(new Grafite(0.3, "4B", 70));
console.log(lapiseira2.toString());

lapiseira2.remover();
console.log(lapiseira2.toString());

lapiseira2.inserir(new Grafite(0.3, "4B", 70));
console.log(lapiseira2.toString());

// Bloco 3 - escrevendo
let lapiseira3: Lapiseira  = new Lapiseira(0.9);
lapiseira3.inserir(new Grafite(0.9, "4B", 4));
lapiseira3.write(1);
console.log(lapiseira3.toString());

lapiseira3.inserir(new Grafite(0.9, "4B", 30));
lapiseira3.write(6);
console.log(lapiseira3.toString());

lapiseira3.write(3);
console.log(lapiseira3.toString());

// Bloco 4

let lapiseira4: Lapiseira = new Lapiseira(0.9);
lapiseira4.inserir(new Grafite(0.9, "2B", 15));
console.log(lapiseira4.toString());

lapiseira4.write(4);
console.log(lapiseira4.toString());

lapiseira4.write(4);
console.log(lapiseira4.toString());
