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

let timeOfDay = true;
const startButton = document.querySelector('#startButton');
const feedButton = document.querySelector('#feedMeButton');
const playButton = document.querySelector('#playButton');
const sleepButton = document.querySelector('#sleepButton');
const pokePet = new Pokemon ('');

const pokeGame = {

    resetGame(){
        const startHunger = pokePet.hunger = 1;
        const startBoredom = pokePet.boredom = 1;
        const startSleepiness = pokePet.sleepiness = 1;
        const startAge = pokePet.age = 1;
        const hungerIDStat = document.querySelector('#hunger');
        hungerIDStat.innerText = `Hunger: ${startHunger}`;
        const boredomIDStat = document.querySelector('#boredom');
        boredomIDStat.innerText = `Boredom: ${startBoredom}`;
        const sleepinessIDStat = document.querySelector('#sleepiness');
        sleepinessIDStat.innerText = `Sleepiness: ${startSleepiness}`;
        const ageIDStat = document.querySelector('#age');
        ageIDStat.innerText = `Age: ${startAge}`;
        if(pokePet.age == 1){
            document.querySelector('.petImg').src = 'images/cyndaquil.png';
        }
        pokeGame.startGame();
    },

    hungerStat(){
        const hungerInt = setInterval(() => {
            const hungerIDStat = document.querySelector('#hunger');
            hungerIDStat.innerText = `Hunger: ${pokePet.hunger}`;
            pokePet.hunger += 1;

            while(pokePet.hunger >= 11){
                alert(`Oh no! ${pokePet.name} fainted from hunger, and the game is over.\nPress OK to try again!`);
                clearInterval(hungerInt);
                pokeGame.resetGame();
            }
        }, 3500)
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

            if(pokePet.boredom >= 11){
                alert(`Oh no! ${pokePet.name} fainted from boredom, and the game is over.\nPress OK to try again!`);
                clearInterval(playInt);
                pokeGame.resetGame();
            }
        }, 4500)
        playButton.addEventListener('click', () => {
            pokePet.playWithPet();
            const boredomIDStat = document.querySelector('#boredom');
            boredomIDStat.innerText = `Boredom: ${pokePet.boredom}`;
        })
    },

    setTimeofDay(){
        timeOfDay = !timeOfDay;
        if(timeOfDay){
            document.querySelector('.bg-img').src = 'images/animalcrossingbg.jpeg';
        }
        else {
            document.querySelector('.bg-img').src = 'images/animalcrossingbgnight.webp';
        }
    },

    sleepStat(){
        const sleepInt = setInterval(() => {
            const sleepinessIDStat = document.querySelector('#sleepiness');
            sleepinessIDStat.innerText = `Sleepiness: ${pokePet.sleepiness}`;
            pokePet.sleepiness += 1;

            if(pokePet.sleepiness >= 11){
                alert(`Oh no! ${pokePet.name} fainted from sleepiness, and the game is over.\nPress OK to try again!`);
                clearInterval(sleepInt);
                pokeGame.resetGame();
            }
        }, 5500)
        sleepButton.addEventListener('click', () => {
            pokeGame.setTimeofDay();
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

            if(pokePet.age == 4){
                confirm(`Wow! ${pokePet.name} reached age 3, they are evolving.`);
                document.querySelector('.petImg').src = 'images/quilava.gif';
            }

            if(pokePet.age == 8){
                confirm(`Wow! ${pokePet.name} reached age 7, they are evolving.`);
                document.querySelector('.petImg').src = 'images/typhlosion.gif';
            }

            if(pokePet.age >= 11){
                alert(`${pokePet.name} is too old to keep playing with you, and the game is over.\nPress OK to try again!`);
                clearInterval(ageInt);
                pokeGame.resetGame();
            }
        }, 10000)
    },

    setPetName(){
        pokePet.name = prompt('What will you be naming your pet?', 'Cyndaquil');
        const nameStat = document.querySelector('.gameTitle');
        nameStat.innerText = `My Pet ${pokePet.name}`;
    },

    startGame(){
        alert('Before you name your pet, here are the rules:\nYour pet gets older as time passes!\nDo not let Hunger, Boredom, or Sleepiness get to 10!\nYour pet will retire when reaching age 10.');
        pokeGame.setPetName();
        pokeGame.hungerStat();
        pokeGame.playStat();
        pokeGame.sleepStat();
        pokeGame.ageStat();
    }
}

startButton.addEventListener('click', () => {
    pokeGame.startGame();
});

