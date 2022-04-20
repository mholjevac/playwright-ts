import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";

test.beforeEach(async ({ page }) => {
  const homepage = new HomePage(page);
  homepage.navigate("/");
});

test.describe("Home Page test", () => {
  test("should contain the conduit logo", async ({ page }) => {
    const homepage = new HomePage(page);
    await expect(homepage.logo).toHaveText("conduit");
  });
  test("should contain a login link", async ({ page }) => {
    const homepage = new HomePage(page);
    await expect(homepage.signInBtn).toBeVisible();
  });
  test("should contain a signup link", async ({ page }) => {
    const homepage = new HomePage(page);
    await expect(homepage.signUpBtn).toBeVisible();
  });
  test("should contain the global feed", async ({ page }) => {
    const homepage = new HomePage(page);
    await expect(homepage.globalFeedSection).toBeVisible();
  });
  test("should contain tag filtering", async ({ page }) => {
    const homepage = new HomePage(page);
    await expect(homepage.popularTagsSection).toBeVisible();
  });
});
