import { settings } from "./settings.js"
import {score} from '../score/score.js'
export const OFFER_STATUSES = {
    default: 'default',
    miss: 'miss',
    caught: 'caught'
}

export const newGameSettings={
    grid:{
        x: null,
        y: null,
    },
    winPoints: null,
    cathDelay:{
        max: null,
        min: null,
    },
    misses: null
}

export let offer = {
    position:{
        curent:{
            x: 0,
            y: 0,
        },
        previous:{
            x: 0,
            y: 0,
        }
    },
    status: 'default'
}

export function getNewGameSettigs(){
    let fieldSize = document.querySelector('.grid-size');
    let winPoints = document.querySelector('.points-to-win');
    let catchDelay = document.querySelector('.catch-delay');
    let maxMisses = document.querySelector('.max-misses');
    console.clear()

    newGameSettings.grid.x = settings.gridSize[fieldSize.value].width;
    newGameSettings.grid.y = settings.gridSize[fieldSize.value].height;
    newGameSettings.winPoints = settings.winPoints[winPoints.value].points;
    newGameSettings.cathDelay.min = settings.catchDelay[catchDelay.value].min;
    newGameSettings.cathDelay.max = settings.catchDelay[catchDelay.value].max;
    newGameSettings.misses = +maxMisses.value;
    return newGameSettings;
}

let subscribers = [];


function notify() {
    subscribers.forEach(subscriber => subscriber())
}


export function subscribe(newSubscriber){
    subscribers.push(newSubscriber);
}

let stepIntervalId;

export function runOffer() {
    stepIntervalId = setInterval(() => {
        missOffer()
        moveOfferToRandomPosition()
        notify()
    }, 1000);
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
    } while ( newGameSettings.grid.x === newX && newGameSettings.grid.y === newY)

    offer.position.curent.x = newX;
    offer.position.curent.y = newY;
}
function missOffer() {
    
    offer.status = OFFER_STATUSES.miss;
    score.missCount++

    offer.position.previous = {
        ...offer.position.curent
    };
    setTimeout(() => {
        offer.status = OFFER_STATUSES.default;
        notify();
    }, 200);
}

export function catchOffer() {
    if(score.catchCount === newGameSettings.winPoints){
        console.log('Win');
    }
    offer.status = OFFER_STATUSES.caught;
    score.catchCount++;
    offer.position.previous = {
        ...offer.position.curent
    };
    setTimeout(() => {
        offer.status = OFFER_STATUSES.default;
        notify();
    }, getRandomInt(newGameSettings.cathDelay.min, newGameSettings.cathDelay.max));

    moveOfferToRandomPosition();
    notify()
    clearInterval(stepIntervalId);
    runOffer();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function newGame(){
    getNewGameSettigs()
    runOffer()
   
}