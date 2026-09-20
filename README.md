This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Analytics and search setup

- The root layout includes Vercel Web Analytics. Enable **Analytics** in the
  Vercel project dashboard, then deploy and visit the production site to start
  collecting page views: https://vercel.com/docs/analytics/quickstart.
- The canonical production URL is `https://paulemas.dev`, configured in
  `app/site.ts`. Redirect alternate domains to this domain in the hosting settings.
- Verify this domain in [Google Search Console](https://search.google.com/search-console).
  Use DNS verification, or set `GOOGLE_SITE_VERIFICATION` to the HTML verification
  token and redeploy if using URL-prefix verification.
- Submit `https://paulemas.dev/sitemap.xml` and request indexing of the homepage.
- Link this portfolio from your LinkedIn, GitHub, and author profiles to help
  people and search engines connect your work with your name.
- The site includes canonical metadata, robots.txt, a sitemap, social preview
  images, and Person, WebSite, and ProfilePage structured data. Search rankings
  and indexing are controlled by search engines and cannot be guaranteed.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
