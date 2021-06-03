import axios from "axios";
import { githubToken } from "./apiConsts";

export type RequestOptions = {
    dataParser?: (data: any) => any,
};

export const simpleGetRequest = async <T extends unknown>(path: string, options?: RequestOptions): Promise<T> => {
    return axios.get(`${path}`, {
        headers: {
            "Authorization": githubToken ? `token ${githubToken}` : undefined,
        },
    }).then(res => {
        if (!res || res.status !== 200)
            return { error: 'error' };

        let parsedData = res.data;
        if (options?.dataParser)
            parsedData = options.dataParser(res.data);

        return parsedData;
        // return { data: parsedData };
    });
};