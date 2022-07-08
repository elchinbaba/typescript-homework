import { createImg } from "./img";
import { createSvg } from "./svg/svg";
import { createDiv } from "./div/div";

const createCard = (card: any): HTMLDivElement => {
    const elementCard: HTMLDivElement = document.createElement('div');
    elementCard.id = card.id;
    elementCard.classList.add('card');
    elementCard.classList.add('shadow-sm');
    elementCard.append(createImg(card.poster_path));
    elementCard.append(createSvg(card.isFavorite));
    elementCard.append(createDiv(card.overview, card.release_date));

    const baseElement: HTMLDivElement = document.createElement('div');
    baseElement.classList.add('col-lg-3');
    baseElement.classList.add('col-md-4');
    baseElement.classList.add('col-12');
    baseElement.classList.add('p-2');
    baseElement.append(elementCard);
    
    return baseElement;
}

export { createCard };