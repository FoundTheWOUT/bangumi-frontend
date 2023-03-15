import type { Page } from '@playwright/test';

const login = async (page: Page) => {
  await page.getByRole('link', { name: '登录' }).click();
  await page.getByPlaceholder('你的 Email 地址').click();
  await page.getByPlaceholder('你的 Email 地址').fill('treeholechan@gmail.com');
  await page.getByPlaceholder('你的登录密码').click();
  await page.getByPlaceholder('你的登录密码').fill('lovemeplease');
  await page.waitForTimeout(5 * 1000);
  await page.getByRole('button', { name: '登录' }).click();
};

export { login };
