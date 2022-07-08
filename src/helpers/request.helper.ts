import { IParams } from "../common/interface";
import { resetEndpoint } from "./endpoint.helper";
import { callApi } from "./api.helper";

const reloadRequest = async (params: IParams): Promise<void> => {
    const endpoint: string = resetEndpoint(params);

    const data: any = await callApi(endpoint);

    return data.results;
}

export { reloadRequest };