import { test, expect } from '@playwright/test';

test('user can navigate to venue details', async ({ page }) => {
  await page.goto('/');

  const firstVenue = page.locator('a[href*="/venue"]').first();
  await expect(firstVenue).toBeVisible();

  await firstVenue.click();

  await expect(
    page.getByRole('heading', { name: /venue details/i }),
  ).toBeVisible();
});
