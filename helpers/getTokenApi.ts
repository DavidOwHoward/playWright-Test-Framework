import { request, expect } from '@playwright/test'
import { webApi  } from "../fixtures/constants.spec";



type TokenResponse = {
    access_token: string;
    token_type?: string;
    expires_in?: number;
    scope?: string;
};

export async function getAccessToken(): Promise<string> {
    const requestContext = await request.newContext({

    });

    // create our urlencoded parameters
    const form = new URLSearchParams({
        grant_type: "password",
        username: process.env.username,
        password: process.env.password,

    });

    //send the request to webApi url including headers and makes sure we send a raw string
    const res = await requestContext.post(webApi, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: form.toString(),
    });

    expect(res.ok()).toBeTruthy();

    //converts the response to a json object and casts it to the Typescript type created at the top
    const json = (await res.json()) as TokenResponse;

    if (!json.access_token) {
        throw new Error(`Token response missing access_token: ${JSON.stringify(json)}`);
    }

    return json.access_token;
}
