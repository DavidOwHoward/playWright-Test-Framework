import { request, expect } from "@playwright/test";
import { tokenApi } from "../fixtures/constants";
import { LoginUser } from "../config/user";

// supports getting a bearer token for access to the WebApi. The function can be called with either a LoginUser object or with a username and password as separate arguments. It makes a POST request to the token API endpoint, sending the credentials in the request body as form data. 
// The response is expected to contain an access token, which is extracted and returned by the function. 

type TokenResponse = {
  access_token: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
};

export async function getAccessToken(user: LoginUser): Promise<string>;
export async function getAccessToken(
  username: string,
  password: string,
): Promise<string>;

export async function getAccessToken(
  userOrUsername: LoginUser | string,
  password?: string,
): Promise<string> {
  const username =
    typeof userOrUsername === "string"
      ? userOrUsername
      : userOrUsername.username;

  const resolvedPassword =
    typeof userOrUsername === "string" ? password : userOrUsername.password;

  if (!resolvedPassword) {
    throw new Error(
      "Password is required when username is passed as a string.",
    );
  }

  const requestContext = await request.newContext();

  try {
    const form = new URLSearchParams({
      grant_type: "password",
      username,
      password: resolvedPassword,
    });

    const response = await requestContext.post(tokenApi, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: form.toString(),
    });

    expect(response.ok(), `Assert token response`).toBeTruthy();

    //converts the response to a json object and casts it to the Typescript type created at the top
    const json = (await response.json()) as TokenResponse;

    if (!json.access_token) {
      throw new Error(
        `Token response missing access_token: ${JSON.stringify(json)}`,
      );
    }
      
    return json.access_token;
    
  } finally {
    await requestContext.dispose();
  }
}
