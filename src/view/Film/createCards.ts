import { createCard } from "./Card/createCard"

const createCards = (cards: any, change: boolean = true): void => {
    let container: HTMLDivElement = <HTMLDivElement>document.getElementById('film-container');

    if (change) {
        container.remove();

        container = document.createElement('div');

        container.id = "film-container";
        container.className = "row";
    }

    let card: HTMLDivElement;
    for (let i in cards) {
        card = createCard(cards[i]);
        container.append(card);
    }

    const album = document.querySelector('.album > .container');
    album?.append(container);
}

export { createCards };