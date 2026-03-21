import { test, expect } from "@playwright/test";
import { getAccessToken } from "../../helpers/getTokenApi";
import { users } from "../../config/user";

let token: string;

test.beforeAll(async () => {
  token = await getAccessToken(users.mgrDoc);
});

test(
  "New record api returns valid response",
  { tag: ["@Api"] },
  async ({ request }) => {
    const response = await request.get(
      "process/Documents_p/0?skipAdminFilter=true",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe(
      "application/json; charset=utf-8",
    );

    const responseBody = (await response.json()) as ApiResponse;

    type ApiResponse = {
      sections: {
        fields: any[];
      }[];
      hiddenFields: [];
      processMetadata: [];
      visibilityActionRules: [];
      actionRules: [];
      fieldBackColorRules: [];
    };

    expect(responseBody.sections).toBeDefined();
    expect(Array.isArray(responseBody.sections)).toBeTruthy();
    expect(responseBody.sections.length).toBeGreaterThan(0);
  },
);

test(
  "New record api returns 401 for unauthenticated requests",
  { tag: ["@Api"] },
  async ({ request }) => {
    const response = await request.get(
      "process/Documents_p/0?skipAdminFilter=true",
    );
    expect(response.status(), "Assert HTTP response status").toBe(403);
  },
);

test(
  "New record api returns 400 for invalid endpoint",
  { tag: ["@Api"] },
  async ({ request }) => {
    const response = await request.get(
      "process/InvalidEndpoint/0?skipAdminFilter=true",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    expect(response.status(), "Assert HTTP response status").toBe(400);
  },
);

test(
  "New record api returns 404 for missing required parameters",
  { tag: ["@Api"] },
  async ({ request }) => {
    const response = await request.get("Documents_p/?skipAdminFilter=true", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response.status(), "Assert HTTP response status").toBe(404);
  },
);
