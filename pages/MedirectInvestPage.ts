import { Page, Locator, expect } from '@playwright/test';

export class MedirectInvestPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly equitiesList: Locator;
  readonly noResultsMessage: Locator;
  readonly securityDetails: Locator;
  readonly tableRows: Locator;
  readonly moreInfoButton: Locator;
  readonly lockIcons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Enter name, ISIN, or ticker' });
    this.searchButton = page.locator('button', { name: 'More information' });
    this.equitiesList = page.locator('.equities-list-item');
    this.noResultsMessage = page.locator('.no-results-message');
    this.securityDetails = page.locator('.security-details');
    this.tableRows = page.locator('tr[data-t^="table-row"]');
    this.moreInfoButton = page.getByRole('button', { name: 'More information' });
    this.lockIcons = page.locator('span:has(svg[data-icon="lock"])');
  }

  async navigate() {
    await this.page.goto('https://www.medirect.com.mt/invest/equities/search');

    await this.page.getByRole('button', { name: 'Accept' }).click();
  }

  async selectSecurityType(type: 'Bonds' | 'Equities' | 'Funds' | 'ETFs') {
    const locator = this.page.locator('p[data-t="text"].me-text').getByText(type, { exact: true });
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async assertEquitiesListNotEmpty() {
    await this.tableRows.first().waitFor({ state: 'visible'});
  }

  async searchEquity(equityName: string) {
    await this.searchInput.waitFor({ state: 'visible' });
    await this.searchInput.fill(equityName);
    await this.searchButton.click();
  }
  async clickMoreInformationForEquity() {
    await this.page.getByRole('button', { name: 'More information' }).click();
  }

  
  }


