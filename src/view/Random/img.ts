const createImg = (backdrop_path: string): HTMLImageElement => {
    const imgElement: HTMLImageElement = document.createElement('img');
    imgElement.src = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return imgElement;
};

export { createImg };