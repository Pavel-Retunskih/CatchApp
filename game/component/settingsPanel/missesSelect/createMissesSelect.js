import { settings } from "../../../data/settings/settings.js";

export function createMaxMissesSelect(){
    const maxMissesSelect = document.createElement('select');
    maxMissesSelect.classList.add('max-misses');
    for (const misses of settings.maxOfMisses) {
        let option = document.createElement('option');
        option.value = misses;
        option.append(misses);
        maxMissesSelect.append(option);
    }

    return maxMissesSelect;
}