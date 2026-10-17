import { test, expect } from '@playwright/test';

test('user can log in with valid info', async ({ page }) => {
  await page.goto('/login/index.html');

  await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
  await page
    .locator('input[name="password"]')
    .fill(process.env.TEST_USER_PASSWORD);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('http://localhost:5173/');
});

test('user cant log in with invalid info', async ({ page }) => {
  await page.goto('/login/index.html');

  await page.locator('input[name="email"]').fill('invalid@stud.noroff.no');

  await page.locator('input[name="password"]').fill('wrongpassword234');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#message-container [role="alert"]')).toBeVisible();
});
