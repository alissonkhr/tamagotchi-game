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

const pokeGame = {
    hungerStat(){
        const hungerInt = setInterval(() => {
            const hungerIDStat = document.querySelector('#hunger');
            hungerIDStat.innerText = `Hunger: ${pokePet.hunger}`;
            pokePet.hunger += 1;

            if(pokePet.hunger >= 10){
                alert(`Oh no! ${pokePet.name} fainted from hunger, and the game is over.`);
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
                alert(`Oh no! ${pokePet.name} fainted from boredom, and the game is over.`);
                clearInterval(playInt);
            }
        }, 5000)
        playButton.addEventListener('click', () => {
            pokePet.playWithPet();
            const boredomIDStat = document.querySelector('#boredom');
            boredomIDStat.innerText = `Boredom: ${pokePet.boredom}`;
        })
    },

    sleepStat(){
        const sleepInt = setInterval(() => {
            const sleepinessIDStat = document.querySelector('#sleepiness');
            sleepinessIDStat.innerText = `Sleepiness: ${pokePet.sleepiness}`;
            pokePet.sleepiness += 1;

            if(pokePet.sleepiness >= 10){
                alert(`Oh no! ${pokePet.name} fainted from sleepiness, and the game is over.`);
                clearInterval(sleepInt);
            }
        }, 5000)
        sleepButton.addEventListener('click', () => {
            pokePet.petSleeps();
            const sleepinessIDStat = document.querySelector('#sleepiness');
            sleepinessIDStat.innerText = `Sleepiness: ${pokePet.sleepiness}`;
        })
    },

    ageStat(){
        const ageInt = setInterval(() => {
            const ageIDStat = document.querySelector('#age');
            ageIDStat.innerText = `Age: ${pokePet.age}`;
            pokePet.age += 1;

            if(pokePet.age === 3){
                confirm(`Wow! ${pokePet.name} reached age 3, they are evolving.`);
                document.querySelector('.petImg').src = 'images/quilava.gif';
            }

            if(pokePet.age === 5){
                confirm(`Wow! ${pokePet.name} reached age 5, they are evolving.`);
                document.querySelector('.petImg').src = 'images/typhlosion.gif';
            }

            if(pokePet.age >= 10){
                alert(`${pokePet.name} is too old to keep playing with you, and the game is over.`);
                clearInterval(ageInt);
            }
        }, 8000)
    },

    setPetName(){
        pokePet.name = prompt('What will you be naming your pet?', 'Cyndaquil');
        const nameStat = document.querySelector('.gameTitle');
        nameStat.innerText = `My Pet ${pokePet.name}`;
    },

    startGame(){
        pokeGame.setPetName();
        pokeGame.hungerStat();
        pokeGame.playStat();
        pokeGame.sleepStat();
        pokeGame.ageStat();
    }
}

