class Pet{
    private energyMax:number;
    private hungryMax:number;
    private cleanMax:number;
    private energy:number;
    private hungry:number 
    private shower_:number;
    private diamonds:number;
    private age:number;
    private alive:boolean;

    constructor(energy: number, hungry: number, shower:number){
        this.energy = energy;
        this.energyMax = energy;
        this.hungry = hungry;
        this.hungryMax = hungry;
        this.shower_ = shower;
        this.cleanMax = shower;
        this.age = 0;
        this.diamonds = 0;
        this.alive = true;
    }

    public toString(){
        return "E:"+this.energy+"/"+this.energyMax+", S:"+this.hungry+"/"+this.hungryMax+", L:"+this.shower_+"/"+this.cleanMax+", D:"+this.diamonds+", I:"+this.age;
    }

    public play(){
        if(pet.alive == false){
            console.log("fail: pet esta morto")
            return;
        }
        this.setEnergy(this.getEnergy()-2);
        this.setHungry(this.getHungry()-1);
        this.setClean(this.getClean() -3);
        this.diamonds ++;
        this.age ++;
    }

    public eat(){
        if(pet.alive == false){
            console.log("fail: pet esta morto")
            return;
        }
        this.setEnergy(this.getEnergy()-1);
        this.setHungry(this.getHungry()+4);
        this.setClean(this.getClean()-2);
        this.age ++;
    }

    public sleep(){
        if(pet.alive == false){
            console.log("fail: pet esta morto")
            return;
        }
        if(this.getEnergy()>(this.getEnergyMax()-5)){
            console.log("fail: nao esta com sono");
            return;
        }
        this.age +=  this.getEnergyMax() - this.getEnergy();
        // obs: a saciedade ficou ambígua na atividade
        this.setHungry(this.getHungry()-1);
        this.setEnergy(this.getEnergyMax());        
    }

    public shower(){
        if(pet.alive == false){
            console.log("fail: pet esta morto")
            return;
        }
        this.setEnergy(this.getEnergy()-3);
        this.setHungry(this.getHungry()-1);
        this.setClean(this.getCleanMax());
        this.age += 2;
    }

    public getHungry(){
        return this.hungry;        
    }

    public getHungryMax(){
        return this.hungryMax;
    }

    public getClean(){
        return this.shower_;
    }

    public getCleanMax(){
        return this.cleanMax;
    }

    public getEnergy(){
        return this.energy;
    }

    public getEnergyMax(){
        return this.energyMax;
    }

    public setHungry(hungry: number){
        if(hungry>= this.hungryMax){
            this.hungry = this.hungryMax;
        }else if(hungry <= 0){
            this.hungry = 0;
            this.alive = false
            console.log("fail: pet morreu de fome");
        }else{
            this.hungry = hungry;
        }
    }

    public setClean(clean: number){
        if(clean>= this.cleanMax){
            this.shower_ = this.cleanMax;
        }else if(clean <= 0){
            this.shower_ = 0;
            this.alive = false
            console.log("fail: pet morreu de sujeira");
        }else{
            this.shower_ = clean;
        }
    }

    public setEnergy(energy: number){
        if(energy >= this.energyMax){
            this.energy = this.energyMax;
        }else if(energy <= 0){
            this.energy = 0;
            this.alive = false
            console.log("fail: pet morreu de fraqueza");
        }else{
            this.energy = energy;
        }
    }
    
}

let pet:Pet = new Pet(20, 10, 15);
console.log(pet.toString());
//E:20/20, S:10/10, L:15/15, D:0, I:0
pet = new Pet(10, 20, 50);
console.log(pet.toString());
//E:10/10, S:20/20, L:50/50, D:0, I:0

//case play - Brincar 
pet = new Pet(20, 10, 15);
pet.play();
console.log(pet.toString());
//E:18/20, S:9/10, L:12/15, D:1, I:1
pet.play();
console.log(pet.toString());
//E:16/20, S:8/10, L:9/15, D:2, I:2

//case comer 
pet.eat();
console.log(pet.toString());
//E:15/20, S:10/10, L:7/15, D:2, I:3

//case dormir
pet.sleep();
console.log(pet.toString());
//E:20/20, S:9/10, L:7/15, D:2, I:8

//case tomar banho
pet.shower();
console.log(pet.toString());
//E:17/20, S:8/10, L:15/15, D:2, I:10

//case dormir sem sono
pet.sleep();
//fail: nao esta com sono

//case morrer
pet.play();
pet.play();
pet.play();
pet.play();
console.log(pet.toString());
//E:9/20, S:4/10, L:3/15, D:6, I:14
pet.play();
//fail: pet morreu de sujeira
console.log(pet.toString());
//E:7/20, S:3/10, L:0/15, D:7, I:15
pet.play();
//fail: pet esta morto
pet.eat();
//fail: pet esta morto
pet.shower();
//fail: pet esta morto
pet.sleep();
//fail: pet esta morto

//case exemplo2
pet = new Pet(5, 10, 10);
pet.play();
pet.play();
pet.play();
//fail: pet morreu de fraqueza
pet.play();
//fail: pet esta morto
console.log(pet.toString());
//E:0/5, S:7/10, L:1/10, D:3, I:3

//case exemplo3
pet = new Pet(10, 3, 10);
pet.play();
pet.play();
pet.play();
//fail: pet morreu de fome
pet.play();
//fail: pet esta morto
console.log(pet.toString());
//E:4/10, S:0/3, L:1/10, D:3, I:3