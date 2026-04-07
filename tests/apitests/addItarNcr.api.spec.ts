import { test, expect } from "@playwright/test";
import { getAccessToken } from "../../helpers/getTokenApi";
import { users } from "../../config/user";
import { itarNCRPayload } from "../../testFiles/apiPayloads/itarNCR";

test("Itar Security Workflow", { tag: ["@Api", "@Smoke"] }, async ({ request }) => {
  let id: number;
  await test.step("Add an ITAR restricted record to Non-Conformances via the WebAPI", async () => {
    const token = await getAccessToken(users.itar);
    const response = await request.put("process/Nonconformances_p/0", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: itarNCRPayload,
    });

    expect(
      response.status(),
      `Expected successful 200 response, got ${response.status()}`,
    ).toBe(200);

    const body = await response.json();
    expect(body).toBeDefined();

    id = body.sections[0].fields[0].id;
  });

  await test.step("Validate that a non-Itar user cannot access an ITAR restricted record", async () => {
    const token = await getAccessToken(users.demo);

    const response = await request.get(`process/Nonconformances_p/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(
      response.status(),
      `Expected 403 response for ITAR restricted record, got ${response.status()}`,
    ).toBe(403);
  });
});
