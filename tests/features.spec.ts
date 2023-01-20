import { test, expect } from '@playwright/test'

let context
let page
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext()
  await context.tracing.start({ screenshots: true, snapshots: true })
  page = await context.newPage()
})

test.afterAll(async () => {
  await context.tracing.stop({ path: 'trace-test.zip' })
})

test('gets page title', async ({ page }) => {
  await page.goto('https://onlinepiano.netlify.app/')
  await expect(page).toHaveTitle('onlinePiano | A virtual piano')
})

test('renders page header', async ({ page }) => {
  await page.goto('https://onlinepiano.netlify.app/')

  const header = await page.getByText('onlinePiano')
  expect(header).toBeTruthy()
})

test('can play note on piano', async ({ page }) => {
  await page.goto('https://onlinepiano.netlify.app/')
  await page.getByRole('button').nth(2).click()
  expect(page.getByRole('button').nth(2))
})

test('can display note names on piano', async ({ page }) => {
  await page.goto('https://onlinepiano.netlify.app/')
  await page.getByLabel('Show keyboard').check()
  expect(page.getByRole('button', { name: 'A' }).nth(2)).toBeVisible()
})
