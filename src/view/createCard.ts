const createCard = ():HTMLDivElement => {
    const imgElement: HTMLImageElement = document.createElement('img');
    imgElement.src = "https://image.tmdb.org/t/p/original//rTh4K5uw9HypmpGslcKd4QfHl93.jpg";

    var svgNS = "http://www.w3.org/2000/svg";

    const pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute("d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z");

    const svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("stroke", "red");
    svgElement.setAttribute("fill", "#ff000078");
    svgElement.setAttribute("width", "50");
    svgElement.setAttribute("height", "50");
    svgElement.classList.add('bi');
    svgElement.classList.add('bi-heart-fill');
    svgElement.classList.add('position-absolute');
    svgElement.classList.add('p-2');
    svgElement.setAttribute("viewBox", "0 -2 18 22");
    svgElement.append(pathElement);

    const pElement: HTMLParagraphElement = document.createElement('p');
    pElement.classList.add('card-text');
    pElement.classList.add('truncate');
    pElement.textContent = "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella."

    const smallElement: HTMLElement = document.createElement('small');
    smallElement.classList.add('text-mute');
    smallElement.textContent = "2021-05-26";

    const childDivElement: HTMLDivElement = document.createElement('div');
    childDivElement.classList.add('d-flex');
    childDivElement.classList.add('justify-content-between');
    childDivElement.classList.add('align-items-center');
    childDivElement.append(smallElement);

    const divElement: HTMLDivElement = document.createElement('div');
    divElement.classList.add('card-body');
    divElement.append(pElement);
    divElement.append(childDivElement);

    const elementCard: HTMLDivElement = document.createElement('div');
    elementCard.classList.add('card');
    elementCard.classList.add('shadow-sm');
    elementCard.append(imgElement);
    elementCard.append(svgElement);
    elementCard.append(divElement);

    const baseElement: HTMLDivElement = document.createElement('div');
    baseElement.classList.add('col-lg-3');
    baseElement.classList.add('col-md-4');
    baseElement.classList.add('col-12');
    baseElement.classList.add('p-2');

    baseElement.append(elementCard);
    
    return baseElement;
}

export { createCard };