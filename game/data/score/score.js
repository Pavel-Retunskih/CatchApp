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


