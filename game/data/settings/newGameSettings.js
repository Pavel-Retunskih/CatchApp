import { settings } from "./settings.js"
import { score } from '../score/score.js'
export const OFFER_STATUSES = {
    default: 'default',
    miss: 'miss',
    caught: 'caught'
}

export let GAME_STATUSES = {
    start: 'start',
    play: 'play',
    lose: 'lose',
    win: 'win',
    curent: 'start'
}

export const newGameSettings = {
    grid: {
        x: null,
        y: null,
    },
    winPoints: null,
    cathDelay: {
        max: null,
        min: null,
    },
    misses: null
}

export let offer = {
    position: {
        curent: {
            x: getRandomInt(newGameSettings.grid.x, newGameSettings.grid.x),
            y: getRandomInt(newGameSettings.grid.y, newGameSettings.grid.y),
        },
        previous: {
            x: 0,
            y: 0,
        }
    },
    status: 'default'
}



export function getNewGameSettigs() {
    let fieldSize = document.querySelector('.grid-size').value;
    let winPoints = document.querySelector('.points-to-win').value;
    let catchDelay = document.querySelector('.catch-delay').value;
    let maxMisses = document.querySelector('.max-misses');
    console.clear()

    newGameSettings.grid = { ...settings.gridSize[fieldSize] };
    newGameSettings.winPoints = { ...settings.winPoints[winPoints] };
    newGameSettings.cathDelay = { ...settings.catchDelay[catchDelay] };
    newGameSettings.misses = +maxMisses.value;
    return newGameSettings;
}

let subscribers = [];


function notify() {
    subscribers.forEach(subscriber => subscriber())
}


export function subscribe(newSubscriber) {
    subscribers.push(newSubscriber);
}

let stepIntervalId;

export function runOffer() {
    stepIntervalId = setInterval(() => {
        missOffer()
        moveOfferToRandomPosition()
        notify()
    }, 2000);
}


function getRandom(N) {
    return Math.floor(Math.random() * (N + 1));
}
function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;
    do {
        newX = getRandom(newGameSettings.grid.x - 1);
        newY = getRandom(newGameSettings.grid.y - 1);
    } while (newGameSettings.grid.x === newX && newGameSettings.grid.y === newY)

    offer.position.curent.x = newX;
    offer.position.curent.y = newY;
}
function missOffer() {
    offer.status = OFFER_STATUSES.miss;
    score.missCount++
    console.log(score.missCount == newGameSettings.misses)
    offer.position.previous = {
        ...offer.position.curent
    };
    setTimeout(() => {
        offer.status = OFFER_STATUSES.default;
        notify();
    }, 200);
}

export function catchOffer() {
    offer.status = OFFER_STATUSES.caught;
    score.catchCount++;
    console.log(score.catchCount == newGameSettings.winPoints.points);
    offer.position.previous = {
        ...offer.position.curent
    };
    setTimeout(() => {
        offer.status = OFFER_STATUSES.default;
        notify();
    }, getRandomInt(newGameSettings.cathDelay.min, newGameSettings.cathDelay.max));
    moveOfferToRandomPosition();
    clearInterval(stepIntervalId);
    runOffer();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function newGame() {
    getNewGameSettigs()
    let randomIntOfferCoordinatesX = getRandom(newGameSettings.grid.x - 1);
    let randomIntOfferCoordinatesY = getRandom(newGameSettings.grid.y - 1);
    offer.position.curent.x = randomIntOfferCoordinatesX;
    offer.position.curent.y = randomIntOfferCoordinatesY;
    runOffer()
    gameTimerStart()
}

let gameIntervalId;
let timeInSeconds = 0;
function gameTimerStart() {
    gameIntervalId = setInterval(() => {
        timeInSeconds++
    }, 1000);

}

function gameTime(time) {
    let gameTimeMinutes = (time/60).toFixed(2).split('.')[0];
    let gameTimeSeconds = (time/60).toFixed(2).split('.')[1];
    newGameSettings.fullGameTime = `${gameTimeMinutes}m ${gameTimeSeconds}s`;
    clearInterval(gameIntervalId)
}


function stopGame(sco){
    console.log(score);
    if(sco == newGameSettings.winPoints){
        gameTime(timeInSeconds);
         return console.log('Win');
        
    }else if (sco == newGameSettings.misses){
        gameTime(timeInSeconds);
         return console.log('Lose');
        }
}