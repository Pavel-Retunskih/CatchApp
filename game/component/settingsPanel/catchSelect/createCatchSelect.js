import { settings } from "../../../data/settings/settings.js";

export function createCatchDelaySelect() {
    const catchSelectContainer = document.createElement('div');
    const labelForCatchSelect = document.createElement('label');
    labelForCatchSelect.setAttribute('for', 'delay-select')
    labelForCatchSelect.setAttribute('autofocus', 'true')
    labelForCatchSelect.innerText = 'ms after the catch'


    const catchSelectElement = document.createElement('select');
    catchSelectElement.classList.add('catch-delay');
    catchSelectElement.setAttribute('id', 'delay-select')
    for (const delay in settings.catchDelay) {
        let option = document.createElement('option');
        option.append(settings.catchDelay[delay].title);
        option.value = delay;
        catchSelectElement.append(option);
    }
    catchSelectContainer.append(labelForCatchSelect);
    catchSelectContainer.append(catchSelectElement);
    return catchSelectContainer;
}