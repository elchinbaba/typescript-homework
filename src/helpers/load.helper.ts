import { IParams } from '../common/interface';
import { reloadRequest } from './helpers';
import { createCards } from '../view/Film/createCards';

const favoriteIds: any = JSON.parse(<any>localStorage.getItem('favoriteIds'));

const loadPage = async (params: IParams) => {
    const cards: any = await reloadRequest(params);

    for (let i in cards) {
        if (favoriteIds && favoriteIds.includes(cards[i].id)) {
            cards[i].isFavorite = true;
        }
        else {
            cards[i].isFavorite = false;
        }
    }
    
    createCards(cards);

    return cards;
}

export { loadPage };