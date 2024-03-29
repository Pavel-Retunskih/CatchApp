import { settings } from "./settings.js"
import { scoreCatchCountIncrement, scoreMissCountIncrement } from '../score/score.js'
import { GAME_STATUSES } from "../gameStatuses/GameStatuses.js";

//****************** Selected settings for a new game *****************/
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
    misses: null,
    gameStatus: null,
}
//****************** Getting settings for a new game ******************/
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
//****************** Start of a new game ******************************/
export function newGame() {
    getNewGameSettigs()
    let randomIntOfferCoordinatesX = getRandom(newGameSettings.grid.x - 1);
    let randomIntOfferCoordinatesY = getRandom(newGameSettings.grid.y - 1);
    offer.position.curent.x = randomIntOfferCoordinatesX;
    offer.position.curent.y = randomIntOfferCoordinatesY;
    runOffer()
    gameTimerStart()
}
//****************** Offer DATA ***************************************/
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
export const OFFER_STATUSES = {
    default: 'default',
    miss: 'miss',
    caught: 'caught'
}
//*********************************************************************/


//******************* Subsribe ****************************************/
let subscribers = [];

function notify() {
    subscribers.forEach(subscriber => subscriber())
}

export function subscribe(newSubscriber) {
    subscribers.push(newSubscriber);
}
//*********************************************************************/


export let stepIntervalId;

export function runOffer() {
    stepIntervalId = setInterval(() => {
        missOffer()
        moveOfferToRandomPosition()
        notify()
    }, 2000)

};


function moveOfferToRandomPosition() {
    let newX = getRandom(newGameSettings.grid.x - 1);
    let newY = getRandom(newGameSettings.grid.y - 1);

    if (offer.position.curent.x === newX && offer.position.curent.y === newY) {
        moveOfferToRandomPosition()
    } else {
        offer.position.curent.x = newX;
        offer.position.curent.y = newY;
    }

}
function missOffer() {
    if (GAME_STATUSES.curent == GAME_STATUSES.lose || GAME_STATUSES.curent == GAME_STATUSES.win) {
        clearInterval(stepIntervalId);
    };
    offer.status = OFFER_STATUSES.miss;
    scoreMissCountIncrement()
    offer.position.previous = {
        ...offer.position.curent
    };
    setTimeout(() => {
        offer.status = OFFER_STATUSES.default;
        notify();
    }, 200);
    console.log('miss');

}

export function catchOffer() {
    offer.status = OFFER_STATUSES.caught;
    scoreCatchCountIncrement()
    offer.position.previous = {
        ...offer.position.curent
    };
    setTimeout(() => {
        offer.status = OFFER_STATUSES.default;
        notify();
    }, 200);
    moveOfferToRandomPosition();
    clearInterval(stepIntervalId);
    if (GAME_STATUSES.curent == GAME_STATUSES.play){
        runOffer();
    }    
    notify();
    console.log('caugth');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//**************************Game time cuonter in sec */
let gameTimerIntervalId;
let gameTimeInSec = 0;
function gameTimerStart() {
    gameTimerIntervalId = setInterval(() => {
        gameTimeInSec++
    }, 1000);

}

export function getFullGameTime() {
    let time = gameTimeInSec;
    console.log(`Game time in sec: ${time}`);
    let fullGameTime = `${Math.floor(time / 60)}m ${time - (Math.floor(time / 60) * 60)}s`
    clearInterval(gameTimerIntervalId);
    return fullGameTime;
}
//***************************************************/
export function stopGame() {
    clearInterval(stepIntervalId)
}
function getRandom(N) {
    return Math.floor(Math.random() * (N + 1));
}