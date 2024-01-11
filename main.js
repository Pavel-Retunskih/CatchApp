import { playTheGame } from './game/component/game.js'

function renderGame() {
    const root = document.getElementById('root');
    root.innerHTML = '';

    let game = playTheGame();
    root.append(game);
}

renderGame()

