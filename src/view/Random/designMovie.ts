import { createP } from "./p";
import { createH1 } from "./h1";

const designMovie = (original_title: string, overview: string): HTMLDivElement => {
    const divElement: HTMLDivElement = document.createElement('div');
    divElement.classList.add('col-lg-6');
    divElement.classList.add('col-md-8');
    divElement.classList.add('mx-auto');
    divElement.style.backgroundColor = "#2525254f";
    divElement.append(createH1(original_title));
    divElement.append(createP(overview));

    const baseElement: HTMLDivElement = document.createElement('div');
    baseElement.classList.add('row');
    baseElement.classList.add('py-lg-5');
    baseElement.append(divElement);

    return baseElement;
};

export { designMovie };