import { createCard } from "../Film/Card/createCard";

import { BASE_API_URL, API_KEY } from "../../common/values";

const createFavorites = async (favoriteIds: any): Promise<void> => {
    // const favoriteIds: any = JSON.parse(<any>localStorage.getItem('favoritesId'));
    console.log(favoriteIds);

    const baseElement: HTMLDivElement = <HTMLDivElement>document.getElementById('favorite-movies');

    baseElement.querySelector('div')?.remove();

    const divElement: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    divElement.classList.add('col-12');
    divElement.classList.add('p-2');

    let favorites: any = [];

    let endpoint: string;
    let element: HTMLDivElement;
    if (favoriteIds) {
        for (let i = 0; i < favoriteIds.length; i++) {
            endpoint = `movie/${favoriteIds[i]}?api_key=${API_KEY}`;
            favorites.push(await fetch(BASE_API_URL + endpoint).then(res => res.json()));
            favorites[i].isFavorite = true;
            element = <HTMLDivElement>createCard(favorites[i]).querySelector('div');
            divElement.append(element);
        }
    }
    
    baseElement.append(divElement);
}

export { createFavorites };