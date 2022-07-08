import { API_KEY } from './common/values';

import { IParams } from './common/interface';

import { reloadRequest, loadPage } from './helpers/helpers';

import { createCards, chooseRandomMovie, createFavorites } from './view/views';

const params: IParams = {
    api_key: API_KEY,
    api_route: 'movie/popular',
    page: 1,
    query: ''
}

let cards: any;

let favoriteIds: any = JSON.parse(<any>localStorage.getItem('favoriteIds'));

const addEventListeners = (): void => {
    {
        const popularClickHandler = async (): Promise<void> => {
            if (params.api_route !== 'movie/popular') {
                params.page = 1;
                params.api_route = 'movie/popular';

                cards = await loadPage(params);
            }
        }
        document.getElementById('popular')?.addEventListener('click', popularClickHandler);
    
        const upcomingClickHandler = async (): Promise<void> => {
            if (params.api_route !== 'movie/upcoming') {
                params.page = 1;
                params.api_route = 'movie/upcoming';

                cards = await loadPage(params);
            }
        }
        document.getElementById('upcoming')?.addEventListener('click', upcomingClickHandler);
    
        const topRatedClickHandler = async (): Promise<void> => {
            if (params.api_route !== 'movie/top_rated') {
                params.page = 1;
                params.api_route = 'movie/top_rated';

                cards = await loadPage(params);
            }
        }
        document.getElementById('top_rated')?.addEventListener('click', topRatedClickHandler);
    
        const searchClickHandler = async (): Promise<void> => {
            const query: string = (<HTMLInputElement>document.getElementById('search')).value;
            if ( params.api_route !== 'search/movie' || params.query !== query) {
                params.page = 1;
                params.api_route = 'search/movie';
                params.query = query;

                cards = await loadPage(params);
            }
        }
        document.getElementById('submit')?.addEventListener('click', searchClickHandler);

        const loadMoreClickHandler = async (): Promise<void> => {
            params.page += 1;
    
            const moreCards: any = await reloadRequest(params);
            for (let i in moreCards) {
                if (favoriteIds && favoriteIds.includes(cards[i].id)) {
                    moreCards[i].isFavorite = true;
                }
                else {
                    moreCards[i].isFavorite = false;
                }
            }
            cards = cards.concat(moreCards);

            createCards(moreCards, false);
        }
        document.getElementById('load-more')?.addEventListener('click', loadMoreClickHandler);
    }

    {
        const inputChangeHandler = (): void => {
            const element: any = <any>document.getElementById('submit');

            if ((<HTMLInputElement>document.getElementById('search')).value === '') {
                element.disabled = true;
            }
            else if (element.disabled === true) {
                element.disabled = false;
            }
        }
        document.getElementById('search')?.addEventListener('input', inputChangeHandler);
    }

    {
        const navbarClickHandler = (): void => {
            favoriteIds = JSON.parse(<any>localStorage.getItem('favoriteIds'));
            createFavorites(favoriteIds);
        }
        document.querySelector('button.navbar-toggler')?.addEventListener('click', navbarClickHandler);

        const favoritesCloseClickHandler = (): void => {
            favoriteIds = JSON.parse(<any>localStorage.getItem('favoriteIds'));

            for (let i in cards) {
                if (favoriteIds && favoriteIds.includes(cards[i].id)) {
                    cards[i].isFavorite = true;
                }
                else {
                    cards[i].isFavorite = false;
                }
            }

            createCards(cards);
        }
        document.querySelector('#offcanvasRight > .offcanvas-header > button')?.addEventListener('click', favoritesCloseClickHandler);

        let mouseOut = false;
        let bodyClick = false;
        document.getElementById('offcanvasRight')?.addEventListener('mouseout', (): void => { mouseOut = true; });
        document.getElementById('offcanvasRight')?.addEventListener('mouseenter', (): void => { mouseOut = false; });
        document.body.addEventListener('click', (): void => { bodyClick = true; });
        document.getElementById('offcanvasRight')?.addEventListener('click', (): void => { bodyClick = false; });
        document.body.addEventListener('click', (): void => {
            // console.log(mouseOut, bodyClick);
            if (mouseOut && bodyClick) favoritesCloseClickHandler();

            mouseOut = false;
            bodyClick = false;
        });
    }
}

export async function render(): Promise<void> {
    // TODO render your app here

    addEventListeners();

    (<any>document.getElementById('submit')).disabled = true;

    cards = await loadPage(params);

    chooseRandomMovie(cards);
}
