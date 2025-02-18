import { test, expect } from '@playwright/test';
import { MedirectInvestPage } from '../pages/MedirectInvestPage';

test.describe('Medirect Invest Equities Search Tests', () => {
  let investPage: MedirectInvestPage;

  test.beforeEach(async ({ page }) => {
    investPage = new MedirectInvestPage(page);
    await investPage.navigate();

  });

  test('Navigate and Search Popular Equity', async ({ page }) => {
    await investPage.selectSecurityType('Funds');
    await investPage.selectSecurityType('Bonds');
    await investPage.selectSecurityType('ETFs');
    await investPage.selectSecurityType('Equities');

    await expect(investPage.tableRows.first()).toBeVisible();

    const popularEquity = '1-800-Flowers.com Inc';

    await investPage.searchEquity(popularEquity);


  });
});
