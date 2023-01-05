import { test, expect } from '@playwright/test'

test('renders page header', async ({ page }) => {
  await page.goto('https://onlinepiano.netlify.app/')
  await expect(page).toHaveTitle('onlinePiano | A virtual piano')
})
