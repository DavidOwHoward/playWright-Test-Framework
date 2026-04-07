import { expect } from "@playwright/test";

export function expectStatus(response: { status: number }, expectedStatus: number) {
  expect(
    response.status,
    `Expected HTTP ${expectedStatus}, got ${response.status}`
  ).toBe(expectedStatus);
}

export function expectOk(response: { status: number; data: unknown }) {
  expect(
    response.status,
    `Expected successful 200 response, got ${response.status}`
  ).toBe(200);

  expect(response.data).toBeDefined();
}

export function expectForbidden(response: { status: number }) {
  expect(
    response.status,
    `Expected 403 response, got ${response.status}`
  ).toBe(403);
}

export function expectUnauthorized(response: { status: number }) {
  expect(
    response.status,
    `Expected 401 response, got ${response.status}`
  ).toBe(401);
}

export function expectBadRequest(response: { status: number }) {
  expect(
    response.status,
    `Expected 400 response, got ${response.status}`
  ).toBe(400);
}