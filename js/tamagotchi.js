class Pet {
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}

// Pet Class created

class Pokemon extends Pet {
    constructor(name, hunger, sleepiness, boredom, age){
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
    feedPet(){
        this.hunger += 1;
    }
    petSleeps(){
        this.sleepiness -= 1;
    }
    playWithPet(){
       this.boredom -= 1;
    }
}

console.log(Pet);

console.log(Pokemon);

const startButton = document.querySelector('#startButton');
const feedButton = document.querySelector('#feedMeButton');
const playButton = document.querySelector('#playButton');
const sleepButton = document.querySelector('#sleepButton');
const pokePet = new Pokemon ('');

