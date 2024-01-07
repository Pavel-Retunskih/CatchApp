import { settings } from "../../../data/settings/settings.js";

export function createCatchDelaySelect() {
    const catchSelectElement = document.createElement('select');
    catchSelectElement.classList.add('catch-delay')
    for (const delay in settings.catchDelay) {
        let option = document.createElement('option');
        option.append(settings.catchDelay[delay].title);
        option.value = delay;
        catchSelectElement.append(option);
    }

    return catchSelectElement;
}