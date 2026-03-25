import { test as base } from '@playwright/test';
import { ActorsManager } from '../BaseFramework/Actors/ActorsManager';

type MyFixtures = {
    actors: ActorsManager;
};

// Extend the base test with our custom fixtures. 
export const test = base.extend<MyFixtures>({
    actors: async ({ browser }, use) => {
        const actors = new ActorsManager(browser);
        await use(actors);
        await actors.dispose();
    },
});

export { expect } from '@playwright/test';