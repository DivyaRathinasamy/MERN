class Ninja {
    constructor (name,health=10){
        this.name = name;
        this.health =health;
        this.speed = 3;
        this.strength = 3;

    }

    sayName(){
        console.log(`Ninja's Name is ${this.name}`)
        return this;
        
    }

    showStats(){
        console.log(`Name : ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
       
        return this;
    }

    DrinkSake(){
        console.log(this.health+=10)
        return this;
    }

} 

const ninja = new Ninja("Divya");
ninja.sayName();
ninja.showStats();
ninja.DrinkSake();