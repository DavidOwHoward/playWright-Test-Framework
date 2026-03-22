import { test, expect } from "@playwright/test";
import { getAccessToken } from "../../helpers/getTokenApi";
import { users } from "../../config/user";

test.describe("Validating access to the WebApi's add record endpoint", () => {
  let token: string;

  test.beforeAll(async () => {
    token = await getAccessToken(users.mgrDoc);
  });

  test(
    "Add record endpoint returns valid response",
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
    "Add record endpoint returns 401 for unauthenticated requests",
    { tag: ["@Api"] },
    async ({ request }) => {
      const response = await request.get(
        "process/Documents_p/0?skipAdminFilter=true",
      );
      expect(response.status(), "Assert HTTP response status").toBe(403);
    },
  );

  test(
    "Add record endpoint returns 400 for invalid endpoint",
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
    "Add record endpoint returns 404 for missing required parameters",
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
});

test.describe("Unauthorized user", () => {
  test("User with valid credentials cannot access add record endpoint for a process they do not have access to", async ({
    request,
  }) => {
    const token = await getAccessToken(users["ls-buy"]);

    const response = await request.get(
      "process/Documents_p/0?skipAdminFilter=true",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    expect(response.status(), "Assert HTTP response status").toBe(400);
  });
});
