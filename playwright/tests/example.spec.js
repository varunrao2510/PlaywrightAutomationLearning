// @ts-check

import { test, expect } from '@playwright/test'

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        
        await page.goto('https://playwright.dev/')
    })


test('has title', async ({ page }) => {
    //await page.goto('https://playwright.dev/')

    await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async ({ page }) => {
    //await page.goto('https://playwright.dev/')

    await page.getByRole('link', { name: 'Get started' }).click()
    
    // Expects page to have a heading with the name of Installation.
    //assertion

    await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible()
    
})
})