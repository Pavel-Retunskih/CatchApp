import { playTheGame } from './game/component/game.js'

function renderGame() {
    const root = document.getElementById('root');
    root.innerHTML = '';

    let game = playTheGame();
    root.append(game);
}

renderGame()

//TODO: 1. Сделать обнуление счета при рестарте игры
//TODO: 2. Исправить баг с лишним шагом оффера
//TODO: 3. Допилить логику, убрать не нужные функции, рефакторинг
//TODO: 4. Исправить баг с таймером
//TODO: 5. Верстка

