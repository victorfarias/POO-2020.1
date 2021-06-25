class Fone {
    private id: string;
    private number: string;

    public constructor(id:string, number:string){
        this.id = id;
        this.number = number;
    }

    public static validate(number: string):boolean{
        let permitidos:string[] = ["1","2","3","4","5","6","7","8","9","0",")","(","."];
        for(let c of number){
            if(!permitidos.includes(c)){
                return false; 
            }
        }
        return true;
    }

    public getId(){
        return this.id;
    }

    public getNumber(){
        return this.number;
    }

    public setId(id:string){
        this.id = id;
    }

    public setNumber(number:string){
        this.number = number;
    }

}

class Contact{
    private name:string;
    private fones:Fone[];
    private prefix:string = "-"

    public constructor(name:string, fones:Fone[]){
        this.name = name;
        this.fones = fones;
    }

    public addFone(fone: Fone):void{
        if(Fone.validate(fone.getNumber())==true){
            this.fones.push(fone);
        }else{
            console.log("fail: invalid number");
        }
    }

    public rmFone(index: number){
        this.fones.splice(index,1);
    }

    public toString(){
        let resultado = this.prefix + " " + this.name + " ";
        for(let i in this.fones){
            resultado += ("["+i+":"+this.fones[i].getId()+":"+this.fones[i].getNumber()+"] ");
        }
        return resultado;
    }

}

let contato:Contact = new Contact("david", []);
console.log(contato.toString());

contato.addFone(new Fone("oi", "88"));
contato.addFone(new Fone("tim", "99"));
contato.addFone(new Fone("tim", "98"));
contato.addFone(new Fone("vivo", "83"));
console.log(contato.toString());

contato.rmFone(2);
console.log(contato.toString());

contato.rmFone(0);
console.log(contato.toString());

contato.addFone(new Fone("vivo", "9a9"));
contato.addFone(new Fone("vivo", "(85)99.99"));
console.log(contato.toString());