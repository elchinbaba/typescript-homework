import { IParams } from "../common/interface";

const resetEndpoint = (params: IParams): string => `${params.api_route}?api_key=${params.api_key}&page=${params.page}&query=${params.query}`;

export { resetEndpoint };
