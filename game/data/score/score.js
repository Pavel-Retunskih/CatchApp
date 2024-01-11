import { newGameSettings } from "../settings/newGameSettings.js"

export let score ={
    catchCount: 0,
    missCount: 0
}

export function scoreMissCountIncrement(){
    score.missCount++
    notify()
}
export function scoreCatchCountIncrement(){
    score.catchCount++
    notify()
}

let subscribers = [];


function notify() {
    console.log(subscribers);
    subscribers.forEach(subscriber => subscriber())
}


export function subscribeToScore(newSubscriber) {
    subscribers.push(newSubscriber)
}

function stopGame(score) {
    if (score.catchCount == newGameSettings.winPoints.points) {
        const title = 'You Win!';
        const messadge = 'Congratulations';
        newGameSettings.gameStatus = GAME_STATUSES.win;
        setEndGameStatistic(endGameStatistic, title, messadge)
        console.log(stepIntervalId);
        clearInterval(stepIntervalId)

    } else if (score.missCount == newGameSettings.misses) {
        const title = 'You Lose!';
        const messadge = 'You\'ll be lucky next time';
        newGameSettings.gameStatus = GAME_STATUSES.lose;
        setEndGameStatistic(endGameStatistic, title, messadge)
        clearInterval(stepIntervalId)
    }
}

function setEndGameStatistic(obj, title, messadge) {
    obj.fullGameTime = getFullGameTime(timeInSeconds);
    obj.score = { ...score }
    obj.title = title
    obj.subtitle = messadge
    return obj
}