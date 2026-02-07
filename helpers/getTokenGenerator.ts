import * as oidc from "openid-client";
import { idpUrl } from "../fixtures/constants.spec";



type TokenResult = {
    access_token: string;
    token_type?: string;
    expires_in?: number;
    scope?: string;
};

const ISSUER_BASE_URL = `${idpUrl}`;
const CLIENT_ID = "cebos.internal.api";
const CLIENT_SECRET = "fHeeOdPVDzXFTZxNST65FlKV02DaWfKKE+SeMOL3oyg=";


export async function getAccessToken(): Promise<TokenResult> {
    if (!CLIENT_ID || !CLIENT_SECRET) {
        throw new Error("Missing client_id or client_secret is missing");
    }

    const config = await oidc.discovery(
        new URL(ISSUER_BASE_URL),
        CLIENT_ID,
        CLIENT_SECRET
    );

    //  Client Credentials Grant
    const tokenSet = await oidc.clientCredentialsGrant(config);

    return tokenSet as TokenResult;

}
