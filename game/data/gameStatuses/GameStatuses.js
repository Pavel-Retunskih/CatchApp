export const GAME_STATUSES = {
    start: 'start',
    play: 'play',
    lose: 'lose',
    win: 'win',
    curent: 'start'
}

let subscribers = [];

export function changeGameStatus(newStatus){
    GAME_STATUSES.curent = newStatus;
    notifySubscribersOfGameStatus()
}

function notifySubscribersOfGameStatus(){
    subscribers.forEach((subscriber) => { subscriber()});
}

export function subscribeToGameStatus(newSubscriber){
    subscribers.push(newSubscriber)
}

