// import axios from "axios";

// const config = {
//   headers: {
//     // "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//   },
// };
// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   headers: config.headers
// });

// instance.get('search/movie?api_key=fd565cd2fac1a728709a40658316eb32&query=fight')
//     .then(res => console.log(res));

import { createCard } from './view/createCard';
import { API_KEY } from './common/values';

import { IParams } from './common/interface';

import { reloadRequest } from './helpers/helpers';

const params: IParams = {
    api_key: API_KEY,
    api_route: '',
    page: 1,
    query: ''
}

let data: any;

const addEventListeners = (): void => {
    {
        const popularClickHandler = (): void => {
            params.api_route = 'movie/popular';
    
            data = reloadRequest(params);
        }
        document.getElementById('popular')?.addEventListener('click', popularClickHandler);
    
        const upcomingClickHandler = (): void => {
            params.api_route = 'movie/upcoming';
    
            data = reloadRequest(params);
        }
        document.getElementById('upcoming')?.addEventListener('click', upcomingClickHandler);
    
        const topRatedClickHandler = (): void => {
            params.api_route = 'movie/top_rated';
    
            data = reloadRequest(params);
        }
        document.getElementById('top_rated')?.addEventListener('click', topRatedClickHandler);
    
        const searchClickHandler = (): void => {
            params.api_route = 'search/movie';
            params.query = (<HTMLInputElement>document.getElementById('search')).value;
    
            data = reloadRequest(params);
        }
        document.getElementById('submit')?.addEventListener('click', searchClickHandler);

        const loadMoreClickHandler = (): void => {
            params.page += 1;
    
            data = reloadRequest(params);
        }
        document.getElementById('load-more')?.addEventListener('click', loadMoreClickHandler);
    }
}

export async function render(): Promise<void> {
    // TODO render your app here

    addEventListeners();

    // document.getElementById('film-container')?.append(createCard());
}
