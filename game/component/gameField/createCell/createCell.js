import { newGameSettings, offer } from "../../../data/settings/newGameSettings.js";
export function createCell(x,y) {
    let singleCell = document.createElement('div');
    singleCell.classList.add('cell')
    if (offer.position.curent.x === x && offer.position.curent.y === y)  {
        const offerImg = document.createElement('img');
        offerImg.src = './game/component/img/Offer_default.png'
        singleCell.append(offerImg)
    }
    if (offer.position.caugth.x === x && offer.position.caugth.y === y)  {
        const offerImg = document.createElement('img');
        offerImg.src = './game/component/img/Offer_catch.png'
        singleCell.append(offerImg)
    }
    if (offer.position.miss.x === x && offer.position.miss.y === y)  {
        const offerImg = document.createElement('img');
        offerImg.src = './game/component/img/Offer_miss.png'
        singleCell.append(offerImg)
    }
    return singleCell;
}