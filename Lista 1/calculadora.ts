class Calculadora {

    battery: number;
    batteryMax: number;
    display: number;

    constructor(batteryMax: number) {
        this.battery = 0;
        this.batteryMax = batteryMax;
        this.display = 0;
    }

    chargeBattery(value: number):void {
        // Checando de carga mais bateria passa do máximo
        if(this.battery + value > this.batteryMax) {
            this.battery = this.batteryMax;
            return;
        }
        this.battery += value;
    }

    division(a: number, b: number):void {
        // Verificando divisao por zero
        if(b==0){
            console.log("fail: divisao por zero");
            // diminui uma bateria mesmo assim
            this.battery --;
            return;
        }
        // Verificando se tem bateria
        if(this.battery <= 0){
            console.log("fail: bateria insuficiente");
            return;
        }
        // Colocando a divisão no display
        this.display = a/b;
        // Diminuindo uma bateria
        this.battery --;
    }

    sum(a: number, b: number):void {
        // Verificando se tem bateria
        if(this.battery <= 0){
            console.log("fail: bateria insuficiente");
            return;
        }
        // Colocando a divisão no display
        this.display = a+b;
        // Diminuindo uma bateria
        this.battery --;
    }

    toString():string {
        return "display = " + this.display + ", battery = " + this.battery;
    }

}


// Primeiro bloco do shell
let calculadora1: Calculadora = new Calculadora(5);
console.log(calculadora1.toString());

calculadora1.chargeBattery(3);
console.log(calculadora1.toString());

calculadora1.chargeBattery(1);
console.log(calculadora1.toString());

calculadora1.chargeBattery(2);
console.log(calculadora1.toString());

let calculadora2: Calculadora = new Calculadora(4);
calculadora2.chargeBattery(2);
console.log(calculadora2.toString());

calculadora2.chargeBattery(3);
console.log(calculadora2.toString());

// Segundo bloco do shell
let calculadora3: Calculadora = new Calculadora(2);
calculadora3.chargeBattery(2);
calculadora3.sum(4, 3);
console.log(calculadora3.toString());

calculadora3.sum(2, 3);
console.log(calculadora3.toString());

calculadora3.sum(-4, -1);
console.log(calculadora3.toString());

calculadora3.chargeBattery(1);
console.log(calculadora3.toString());

calculadora3.sum(-4, -2);
console.log(calculadora3.toString());

// Bloco 3 do shell
let calculadora4: Calculadora = new Calculadora(3);
calculadora4.chargeBattery(3);
calculadora4.division(6,3);
calculadora4.division(7,0);
console.log(calculadora4.toString());

calculadora4.division(7,2);
calculadora4.division(10,2);
console.log(calculadora4.toString());
