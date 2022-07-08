const createP = (overview: string): HTMLParagraphElement => {
    const pElement: HTMLParagraphElement = document.createElement('p');
    pElement.id = "random-movie-description";
    pElement.classList.add('lead');
    pElement.classList.add('text-white');
    pElement.innerText = overview;

    return pElement;
};

export { createP };