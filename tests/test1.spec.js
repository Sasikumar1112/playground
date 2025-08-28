import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:52078/html/fonts');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Font/);
});