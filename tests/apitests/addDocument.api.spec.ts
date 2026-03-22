import { test, expect } from "@playwright/test";
import { getAccessToken } from "../../helpers/getTokenApi";
import { users } from "../../config/user";
import { docPayload } from "../../testFiles/apiPayloads/addDocumentRecord";

test(
  "Add a Document record(no file) via API and validate user permissions",
  { tag: ["@Api"] },
  async ({ request }) => {
    let id: number;
    await test.step("Add a Document record via the WebAPI", async () => {
      const token = await getAccessToken(users.mgrDoc);
      const response = await request.put("process/Documents_p/0", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: docPayload,
      });

      expect(
        response.status(),
        `Expected successful 200 response, got ${response.status()}`,
      ).toBe(200);

      const body = await response.json();
      expect(body).toBeDefined();
      id = body.sections[0].fields[0].id;
    });

    await test.step("Validate that a user without permissions cannot view the Document record", async () => {
      const token = await getAccessToken(users["31S1002QM"]);
      const response = await request.get(`process/Documents_p/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      expect(
        response.status(),
        `Expected 403 response for restricted record, got ${response.status()}`,
      ).toBe(403);
    });

    await test.step("Validate that a user with permissions can view the Document record", async () => {
      const token = await getAccessToken(users.demo);
      const response = await request.get(`process/Documents_p/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      expect(
        response.status(),
        `Expected 200 response for authorized user, got ${response.status()}`,
      ).toBe(200);
    });
  },
);
