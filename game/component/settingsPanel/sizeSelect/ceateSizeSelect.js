import { settings } from "../../../data/settings/settings.js";
export function createSizeSelect() {
    const gridSizeSelectContainer = document.createElement('div');
    
    const labelForGridsize = document.createElement('label')
    labelForGridsize.setAttribute('for', 'grid-select')
    labelForGridsize.setAttribute('autofocus', 'true')
    labelForGridsize.innerText = 'Grid size'

    const gridSizeSelectElement = document.createElement('select');
    gridSizeSelectElement.classList.add('grid-size');
    gridSizeSelectElement.setAttribute('id', 'grid-select')
    for (const size in settings.gridSize) {
        let option = document.createElement('option');
        option.value = size;
        option.append(settings.gridSize[size].title);
        gridSizeSelectElement.append(option)
    }
    gridSizeSelectContainer.append(labelForGridsize);
    gridSizeSelectContainer.append(gridSizeSelectElement);
    return gridSizeSelectContainer;
}