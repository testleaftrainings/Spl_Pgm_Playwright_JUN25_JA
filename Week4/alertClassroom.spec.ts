import { test, expect } from '@playwright/test';

test.describe('JS Confirm Alert Handling', () => {
  
  test('Dismiss confirm alert and verify result', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Listen to the dialog before triggering it
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.dismiss(); // Simulates clicking 'Cancel'
    });

    // Trigger the confirm alert
    await page.click('text=Click for JS Confirm');

    // Verify result
    const result = await page.locator('#result').textContent();
    expect(result).toBe('You clicked: Cancel');
  });

  test('Accept confirm alert and verify result', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.accept(); // Simulates clicking 'OK'
    });

    await page.click('text=Click for JS Confirm');

    const result = await page.locator('#result').textContent();
    expect(result).toBe('You clicked: Ok');
  });

});
