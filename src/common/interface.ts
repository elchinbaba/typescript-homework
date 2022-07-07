import { API_ROUTE } from './type';

interface IParams {
    api_key: string,
    api_route: API_ROUTE,
    page: number,
    query?: string
}

export { IParams };