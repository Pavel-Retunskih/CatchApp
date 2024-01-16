import { playTheGame } from './game/component/game.js'

function renderGame() {
    const root = document.getElementById('root');
    root.innerHTML = '';

    let game = playTheGame();
    root.append(game);
}

renderGame()


//TODO: 3. Допилить логику, убрать не нужные функции, рефакторинг
//TODO: 5. Верстка

