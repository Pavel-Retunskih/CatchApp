import {score} from '../../data/score/score.js';
export function renderGameScore(){
    let container = document.createElement('div');
    container.append(`Catch:${score.catch} Miss: ${score.miss}`);
    return container;
}