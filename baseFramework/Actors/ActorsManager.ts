import { Browser } from "@playwright/test";
import { ActorSession } from "./ActorSession";
import { LoginUser } from "../../config/user";

export class ActorsManager {
  private readonly browser: Browser;
  private readonly sessions = new Map<string, ActorSession>();

  constructor(browser: Browser) {
    this.browser = browser;
  }

  // Use username as a unique key to identify this user's session
  async as(user: LoginUser): Promise<ActorSession> {
    const key = user.username;

    // Check if we already created a session for this user. If it exists, reuse it
    const existing = this.sessions.get(key);
    if (existing) return existing;

    // Create a new session (new context + page) and initialize shared objects
    const actor = await new ActorSession(this.browser, user).init();
    // Store the session so future calls reuse it instead of creating another
    this.sessions.set(key, actor);
    return actor;
  }

  // Loop through all created sessions for this test and Close each session's browser context and finally clear the map
  async dispose(): Promise<void> {
    for (const actor of this.sessions.values()) {
      await actor.close();
    }
    this.sessions.clear();
  }
}
