import { settings } from "../../../data/settings/settings.js";
export function createPointsToWinSelect(){
    const pontsToWinSelectElement = document.createElement('select');
    for (const points in settings.winPoints) {
        let option = document.createElement('option');
        option.append(settings.winPoints[points].title);
        pontsToWinSelectElement.append(option)
    }

    return pontsToWinSelectElement;
}