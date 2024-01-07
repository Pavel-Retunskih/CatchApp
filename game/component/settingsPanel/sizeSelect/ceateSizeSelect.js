import { settings } from "../../../data/settings/settings.js";
export function createSizeSelect() {
    const gridSizeSelectElement = document.createElement('select');   
    for (const size in settings.gridSize) {
        let option = document.createElement('option');
        option.append(settings.gridSize[size].title);
        gridSizeSelectElement.append(option)
    }

    return gridSizeSelectElement;
}