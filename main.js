import { Game } from './game/component/game.js'

function renderGame() {
    const root = document.getElementById('root');
    root.innerHTML = '';

    let renderGame = Game();
    root.append(renderGame);
}

renderGame()

