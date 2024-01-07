import { settings } from "./settings.js"
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

    console.log(newGameSettings);
    return newGameSettings;
}

let subscribers = null;



export function notifySubscriber(newSubscriber){
    subscribers = newSubscriber;
   console.log(subscribers);
}