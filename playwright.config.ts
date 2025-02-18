// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [
    ['html', { open: 'always' }],  //auto open html
    ['json', { outputFile: 'report.json' }]
  ],
  use: {
    baseURL: 'https://www.medirect.com.mt/invest/equities/search',
    headless: false, // Set to false for visible debugging; change as needed.
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    launchOptions: {
      slowMo: 200, // slows down each action by 200ms;
    },
  },
  
});
