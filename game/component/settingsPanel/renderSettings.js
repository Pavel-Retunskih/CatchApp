import {createSizeSelect} from './sizeSelect/ceateSizeSelect.js';
import {createPointsToWinSelect} from './winPointsSelect/createPointsToWinSelect.js';
import {createCatchDelaySelect} from './catchSelect/createCatchSelect.js'
import {createMaxMissesSelect} from './missesSelect/createMissesSelect.js'

export function renderSettings() {
    const container = document.createElement('div');
    const sizeSelectElement = createSizeSelect();
    const pointsToWinSelectElement = createPointsToWinSelect();
    const catchDelayElement = createCatchDelaySelect();
    const maxMissesSelectElement = createMaxMissesSelect();
   

    container.append(sizeSelectElement);
    container.append(pointsToWinSelectElement);
    container.append(catchDelayElement);
    container.append(maxMissesSelectElement);
    return container
}