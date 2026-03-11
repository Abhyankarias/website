// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Home page navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/website');
  });

  test('home page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Abhyankar/);
  });

  test('Learn More in Courses section links to /courses', async ({ page }) => {
    const coursesLearnMore = page.locator('a[href="/website/courses"]').first();
    await expect(coursesLearnMore).toBeVisible();
    await coursesLearnMore.click();
    await expect(page).toHaveURL(/website\/courses/);
  });

  test('Learn More in Testimonials section links to /testimonials', async ({
    page,
  }) => {
    const testimonialsLearnMore = page
      .locator('a[href="/website/testimonials"]')
      .first();
    await expect(testimonialsLearnMore).toBeVisible();
    await testimonialsLearnMore.click();
    await expect(page).toHaveURL(/\/website\/testimonials/);
  });

  test('home page shows truncated testimonials', async ({ page }) => {
    // On home page, testimonial text should be truncated (ends with ".....")
    const testimonialText = page
      .locator('section')
      .filter({ hasText: 'Success stories' })
      .locator('p.font-regular')
      .first();
    await expect(testimonialText).toBeVisible();
    const text = await testimonialText.textContent();
    expect(text.length).toBeLessThanOrEqual(200);
  });
});

test.describe('Testimonials page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/website/testimonials');
  });

  test('page content is NOT wrapped in a self-referencing link', async ({
    page,
  }) => {
    // There should be no <a> tag wrapping the page container that links to /testimonials
    const selfLink = page.locator(
      'a[href="/testimonials"] > div.container'
    );
    await expect(selfLink).toHaveCount(0);
  });

  test('testimonial text is selectable (not inside a full-page link)', async ({
    page,
  }) => {
    // The main content area should not be a descendant of a self-referencing <a>
    const mainContent = page.locator('div.container').first();
    const parentLink = mainContent.locator('xpath=ancestor::a[@href="/testimonials"]');
    await expect(parentLink).toHaveCount(0);
  });

  test('shows full testimonial text (not truncated)', async ({ page }) => {
    // On the dedicated page, testimonials should show full text with "Thank you" sign-off
    const thankYouText = page.getByText('Thank you,');
    await expect(thankYouText.first()).toBeVisible();
  });
});

test.describe('Courses page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/website/courses');
  });

  test('page content is NOT wrapped in a self-referencing link', async ({
    page,
  }) => {
    const selfLink = page.locator(
      'a[href="/courses"] > div.container'
    );
    await expect(selfLink).toHaveCount(0);
  });

  test('courses detail page renders Foundation Program', async ({ page }) => {
    const heading = page.locator('text=Foundation Program').first();
    await expect(heading).toBeAttached();
  });

  test('courses detail page renders Master In Social Studies', async ({
    page,
  }) => {
    const heading = page.getByRole('heading', {
      name: /Master In Social Studies/i,
    });
    // May be in a carousel slide, so check it exists in DOM
    await expect(heading).toBeAttached();
  });
});
