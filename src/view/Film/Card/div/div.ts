import { createP } from "./p";
import { createChildDiv } from "./child.div/div";

const createDiv = (overview: string, release_date: string): HTMLDivElement => {
    const divElement: HTMLDivElement = document.createElement('div');

    divElement.classList.add('card-body');
    divElement.append(createP(overview));
    divElement.append(createChildDiv(release_date));

    return divElement;
}


export { createDiv };