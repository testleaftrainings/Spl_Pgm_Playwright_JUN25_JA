import { test, expect } from '@playwright/test';

test('Multi-tab handling in Playwright', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the URL
  await page.goto('https://the-internet.herokuapp.com/windows');

  // Store the original page
  const originalPage = page;

  // Set up a listener for the new page (tab)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // wait for a new tab to open
    page.click('a[href="/windows/new"]') // trigger the new tab
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState();

  // Verify heading in the new tab
  const heading = await newPage.locator('h3').textContent();
  expect(heading).toBe('New Window');

  // Close the new tab
  await newPage.close();

  // Switch back to the original tab
  await originalPage.bringToFront(); // brings the original page to focus

  // (Optional) Validate you're back on the original tab
  await expect(originalPage).toHaveURL('https://the-internet.herokuapp.com/windows');
});
