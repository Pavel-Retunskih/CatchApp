import { settings } from "../../../data/settings/settings.js";

export function createMaxMissesSelect(){
    const maxMissesSelect = document.createElement('select');
    for (const misses of settings.maxOfMisses) {
        let option = document.createElement('option');
        option.append(misses);
        maxMissesSelect.append(option)
    }

    return maxMissesSelect;
}