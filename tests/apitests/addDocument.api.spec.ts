import { test, expect } from "@playwright/test";
import { users } from "../../config/user";
import { docPayload } from "../../testFiles/apiPayloads/addDocumentRecord";
import * as apiCall from "../../helpers/api/AddRecordApi";
import * as apiExpect from "../../helpers/api/ApiAssertions";

test(
  "Add a Document record(no file) via API and validate user permissions",
  { tag: ["@Api", "@Smoke"] },
  async ({ request }) => {
    let id: number;
    await test.step("Add a Document record via the WebAPI", async () => {
      const response = await apiCall.addRecordApi(users.mgrDoc, "Documents_p", docPayload);
      
      apiExpect.expectOk(response);
      id = response.data.sections[0].fields[0].id;      
    });

    await test.step("Validate that a user without permissions cannot view the Document record", async () => {      
      const response = await apiCall.openRecordApi(users["31S1002QM"], "Documents_p", id);
      
      apiExpect.expectForbidden(response);
    });

    await test.step("Validate that a user with permissions can view the Document record", async () => {
      
      const response = await apiCall.openRecordApi(users.demo, "Documents_p", id);
      
      apiExpect.expectOk(response);
    });
  },
);
