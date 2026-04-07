import { getAccessToken } from "../../helpers/getTokenApi";
import { LoginUser, users } from "../../config/user";
import axios from "axios"
import { webApi } from "../../fixtures/constants";

  const apiRequest = axios.create({
    baseURL: webApi,
    timeout: 5000,
    validateStatus: () => true, // Allow handling of all status codes in tests
  });

export async function addRecordApi(user: LoginUser, process: string, payload: object) {


  const token = await getAccessToken(user);

  return await apiRequest.put(`process/${process}/0`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function openRecordApi(user: LoginUser, process: string, id: number) {

  const token = await getAccessToken(user);

  return await apiRequest.get(`process/${process}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
