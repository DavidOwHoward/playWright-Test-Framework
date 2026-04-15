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
      expect(id, `Validate the response contains a record ID`).toBeTruthy();
      
      const titleField = response.data.sections[0].fields.find(f => f.systemName === "DocumentTitle_f");

      expect(titleField.value,`Validate the response contains the correct Document Title`).toBe(docPayload.fields[0].value);
      expect(titleField.canRead).toBe(true);
      expect(titleField.canWrite).toBe(true);
    });

    await test.step("Validate that a user without permissions cannot view the Document record", async () => {      
      const response = await apiCall.openRecordApi(users["31S1002QM"], "Documents_p", id);
      
      apiExpect.expectForbidden(response);
      expect(response.data, `Validate the response contains the correct error message`).toBe("The current user is not allowed to see this record.");
      
    });

    await test.step("Validate that a user with permissions can view the Document record", async () => {
      
      const response = await apiCall.openRecordApi(users.demo, "Documents_p", id);
      
      apiExpect.expectOk(response);

      const titleField = response.data.sections[0].fields.find(f => f.systemName === "DocumentTitle_f");

      expect(titleField.canRead).toBe(true);
    });
  },
);
