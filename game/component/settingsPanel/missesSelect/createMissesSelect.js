import { settings } from "../../../data/settings/settings.js";

export function createMaxMissesSelect(){
    const maxMissesSelectContainer = document.createElement('div');

    const labelForMaxMissesSelect = document.createElement('label');
    labelForMaxMissesSelect.setAttribute('for', 'max-misses-select')
    labelForMaxMissesSelect.setAttribute('autofocus', 'true')
    labelForMaxMissesSelect.innerText = 'Maximum misses'

    const maxMissesSelectElement = document.createElement('select');
    maxMissesSelectElement.classList.add('max-misses');
    maxMissesSelectElement.setAttribute('id', 'max-misses-select')
    for (const misses of settings.maxOfMisses) {
        let option = document.createElement('option');
        option.value = misses;
        option.append(misses);
        maxMissesSelectElement.append(option);
    }
    maxMissesSelectContainer.append(labelForMaxMissesSelect);
    maxMissesSelectContainer.append(maxMissesSelectElement);
    return maxMissesSelectContainer;
}