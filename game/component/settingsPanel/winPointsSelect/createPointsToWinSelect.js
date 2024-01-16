import { settings } from "../../../data/settings/settings.js";
export function createPointsToWinSelect(){
    const pontsToWinSelectContainer = document.createElement('div');

    const labelForPontsToWinSelect = document.createElement('label');
    labelForPontsToWinSelect.setAttribute('for', 'points-to-win-select')
    labelForPontsToWinSelect.setAttribute('autofocus', 'true')
    labelForPontsToWinSelect.innerText = 'Points to winh'

    const pontsToWinSelectElement = document.createElement('select');
    pontsToWinSelectElement.setAttribute('id', 'points-to-win-select')
    pontsToWinSelectElement.classList.add('points-to-win')
    for (const points in settings.winPoints) {
        let option = document.createElement('option');
        option.value = points;
        option.append(settings.winPoints[points].title);
        pontsToWinSelectElement.append(option)
    }
    pontsToWinSelectContainer.append(labelForPontsToWinSelect);
    pontsToWinSelectContainer.append(pontsToWinSelectElement);
    return pontsToWinSelectContainer;
}