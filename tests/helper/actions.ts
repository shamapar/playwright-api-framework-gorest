import { APIRequestContext } from "@playwright/test";
import { IUserCreate } from "../customType/user";
import { env } from "./env";

export async function postApiRequest(endpoint: string, payload: IUserCreate, request: APIRequestContext) {
    const response = await request.post(env.baseurl.concat(endpoint), {
        headers: env.Headers,
        data: payload
    })
    return response;
};

export async function getApiRequest(endpoint: string, request: APIRequestContext) {
    const response = await request.get(env.baseurl.concat(endpoint), {
        headers: env.Headers
    })
    return response;
}

export async function patchApiRequest(endpoint: string, request: APIRequestContext, payload: object) {
    const response = await request.patch(env.baseurl.concat(endpoint), {
        headers: env.Headers,
        data: payload
    })
    return response;
}

export async function deleteApiRequest(endpoint: string, request: APIRequestContext) {
    const response = await request.delete(env.baseurl.concat(endpoint), {
        headers: env.Headers
    })
    return response;
}