import { Browser, BrowserContextOptions } from '@playwright/test';
import { ActorSession } from './ActorSession';
import { LoginUser } from '../../config/user';

export class ActorsManager {
    private readonly browser: Browser;
    private readonly sessions = new Map<string, ActorSession>();
    private readonly contextOptions: BrowserContextOptions;

    constructor(browser: Browser) {
        this.browser = browser;

        // Standardize browser context settings for every actor session.
        this.contextOptions = {
            viewport: { width: 1920, height: 1080 },
        };
    }

    async as(user: LoginUser): Promise<ActorSession> {
        const key = user.username;

        const existing = this.sessions.get(key);
        if (existing) return existing;

        const actor = await new ActorSession(
            this.browser,
            user,
            this.contextOptions
        ).init();

        this.sessions.set(key, actor);
        return actor;
    }

    async dispose(): Promise<void> {
        for (const actor of this.sessions.values()) {
            await actor.close();
        }

        this.sessions.clear();
    }
}