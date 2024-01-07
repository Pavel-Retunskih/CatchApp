import { settings } from "../../../data/settings/settings.js";

export function createCatchDelaySelect(){
    const catchSelectElement = document.createElement('select');
    for (const delay in settings.catchDelay) {
        let option = document.createElement('option');
        option.append(settings.catchDelay[delay].title);
        catchSelectElement.append(option)
    }

    return catchSelectElement;
}