import { test, expect } from "@playwright/test";
import { getAccessToken } from "../../helpers/getTokenApi";
import { users } from "../../config/user";

test.describe("Run the Action Scheduler Service", () => {
  let token: string;

  test.beforeAll(async () => {
    token = await getAccessToken(users.mgrDoc);
   })

   test("Action Scheduler endpoint returns valid response", async ({ request }) => {

    const response = await request.get("ActionScheduler", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    expect(response.status(), 'Expect status to be 201').toBe(201);

    });
});


