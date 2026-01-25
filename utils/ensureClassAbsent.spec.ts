import { Locator, Page } from '@playwright/test';


//helper function that can be used to determine of class variable is absent in a given DOM object

type EnsureClassOptions = {
    maxRetries?: number;
    retryDelayMs?: number;
};

export async function ensureClassAbsent(
    page: Page,
    locator: Locator,
    className: string,
    onRetry?: () => Promise<void>,
    options: EnsureClassOptions = {}
) {
    const {
        maxRetries = 3,
        retryDelayMs = 200,
    } = options;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        const hasClass = await locator.evaluate(
            (el, cls) => el.classList.contains(cls),
            className
        );

        if (!hasClass) {
            return;
        }

        if (onRetry) {
            await onRetry();
        }

        await page.waitForTimeout(retryDelayMs);
    }

    throw new Error(
        `Expected element to HAVE class "${className}" after ${maxRetries} attempts`
    );

}