class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }

    sayName() {
        console.log(`Ninja's Name is ${this.name}`)
        return this;

    }

    showStats() {
        console.log(`Name : ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);

        return this;
    }

    DrinkSake() {
        console.log(this.health += 10)
        return this;
    }


}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        this.wisdom=wisdom;


    }

    speakwisdom() {
        super.DrinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")

    }

    showStats() {
        super.showStats();
    }

}

const SuperSensei = new Sensei("Master Splinter");
SuperSensei.speakwisdom();
SuperSensei.showStats();
