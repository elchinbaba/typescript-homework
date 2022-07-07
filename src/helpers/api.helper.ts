import { BASE_API_URL } from './../common/values';

const callApi = async (endpoint: string): Promise<void> => {
    const url: string = BASE_API_URL + endpoint;

    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));
}

export { callApi };