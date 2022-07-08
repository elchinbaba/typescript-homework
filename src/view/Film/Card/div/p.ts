const createP = (overview: string): HTMLParagraphElement => {
    const pElement: HTMLParagraphElement = document.createElement('p');

    pElement.classList.add('card-text');
    pElement.classList.add('truncate');
    pElement.textContent = overview;

    return pElement;
}


export { createP };