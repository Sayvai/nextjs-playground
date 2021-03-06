This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js Playground

The mini app is just a personal hobby in which I explore the capabilities and features that [Next.js ](https://nextjs.org/) has to offer in the ever-evolving JavaScipt space.

I intend to build put additional self-contained React components / pages within the Next.js framework for self-research purposes (SSR, SSG, ISR, CSR, etc).

Next.js is particulaly interesting as it builds on top and works with [React](https://reactjs.org/), a very popular library today.

But with Next.js, it is considered a pretty much almost a full-stack framework. Providing built-in routing capabilities, static site generation out-of-the-box, as well as server-side rendering. All with the intention of boosting app / site performance (including SEO) 🤯

## Getting Started

⚠️ The local development server is overridden and configured run against the HTTPS protocol (default was HTTP). This is merely to simulate and be on parity with remotely deployed production environments. Please follow the external [instructions](https://dev.to/nakib/using-https-on-next-js-local-development-server-bcd) on first installing a local Certificate Authority (CA) on your system as a prerequisite.

After following the above CA instructions, install the project dependencies, and run the development server:

```bash
npm install
```

```bash
npm run dev
# or
yarn dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

## Predominant Texh Stack And Environment
- ReactJS `^17.0.2`
- TypeScript `^4.5.5`
- SASS `^1.49.8`
- Node `16.14.0`
- NPM `8.3.1`

## Tests: E2E and Component Tests [WIP] ⚠️

There is currently work in place to integrate Cypress [Cypress](https://www.cypress.io/) to leverage E2E and Component Testing at version 10.

You may view the current progress on the branch [cypress-integration](https://github.com/Sayvai/nextjs-playground/tree/cypress-integration).

There is currently a small blocker preventing the Cypress integration work from being merged into the `main` branch, where you may read up on the GitHub issue ([#22525](https://github.com/cypress-io/cypress/issues/22525)) that i have raised with the Cypress team, for the full context.

## Browsers

The following browsers were successfully tested on:

- Chrome `98.0.4758.109`
- Edge `98.0.1108.62`
- Firefox `97.0.1`
- Safari `15.3`

## What To Expect

![Next.js Playground_GIF Demo](https://user-images.githubusercontent.com/7581546/155977165-bdeebcab-8c78-4167-a00c-a6054ff9a5b3.gif)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
