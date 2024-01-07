import { settings } from "../../../data/settings/settings.js";
export function createPointsToWinSelect(){
    const pontsToWinSelectElement = document.createElement('select');
    pontsToWinSelectElement.classList.add('points-to-win')
    for (const points in settings.winPoints) {
        let option = document.createElement('option');
        option.value = points;
        option.append(settings.winPoints[points].title);
        pontsToWinSelectElement.append(option)
    }

    return pontsToWinSelectElement;
}