const createImg = (url: string): HTMLImageElement => {
    const imgElement: HTMLImageElement = document.createElement('img');

    imgElement.src = `https://image.tmdb.org/t/p/original${url}`;

    return imgElement;
} 

export { createImg };
