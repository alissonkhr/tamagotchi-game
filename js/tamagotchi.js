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
        this.hunger -= 1;
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

const tamaGame = {
    hungerStat(){
        const hungerInt = setInterval(() => {
            const hungerIDStat = document.querySelector('#hunger');
            hungerIDStat.innerText = `Hunger: ${pokePet.hunger}`;
            pokePet.hunger += 1;

            if(pokePet.hunger >= 10){
                alert(`Oh no! ${pokePet.name} fainted, and the game is over.`);
                clearInterval(hungerInt);
            }
        }, 5000)
        feedButton.addEventListener('click', () => {
            pokePet.feedPet();
            const hungerIDStat = document.querySelector('#hunger');
            hungerIDStat.innerText = `Hunger: ${pokePet.hunger}`;
        })
    },

    playStat(){
        const playInt = setInterval(() => {
            const boredomIDStat = document.querySelector('#boredom');
            boredomIDStat.innerText = `Boredom: ${pokePet.boredom}`;
            pokePet.boredom += 1;

            if(pokePet.boredom >= 10){
                alert(`Oh no! ${pokePet.name} fainted, and the game is over.`);
                clearInterval(playInt);
            }
        }, 5000)
    }
}