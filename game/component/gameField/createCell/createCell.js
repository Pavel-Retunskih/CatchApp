import { OFFER_STATUSES, catchOffer, offer, subscribe } from "../../../data/settings/newGameSettings.js";

export function createCell(x, y) {

    subscribe(() => {
        update(x, y, cellEl);
    })

    const cellEl = document.createElement('div');

    update(x, y, cellEl);


    return cellEl;
}
export function update(x, y, singleCell) {
    singleCell.innerHTML = '';

    singleCell.classList.add('cell')
    if (offer.status === OFFER_STATUSES.default && offer.position.curent.x === x && offer.position.curent.y === y) {
        const offerImg = document.createElement('img');
        offerImg.classList.add('offer-img');
        offerImg.src = './game/component/img/Offer_default.png';
        offerImg.addEventListener('click', catchOffer)
        singleCell.append(offerImg)
    }
    if (offer.status === OFFER_STATUSES.caught && offer.position.previous.y === y && offer.position.previous.x === x) {
        const offerImg = document.createElement('img');
        offerImg.classList.add('offer-img');
        offerImg.src = './game/component/img/Offer_catch.png'
        singleCell.append(offerImg)
    }
    if (offer.status === OFFER_STATUSES.miss && offer.position.previous.x === x && offer.position.previous.y === y) {
        const offerImg = document.createElement('img');
        offerImg.classList.add('offer-img');
        offerImg.src = './game/component/img/Offer_miss.png'
        singleCell.append(offerImg)
    }
    return singleCell;
}