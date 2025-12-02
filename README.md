# Socium

**Socium** is a modern Georgian social media platform built with cutting-edge web technologies. This monorepo contains all the code for the Socium platform, organized using [Turborepo](https://turbo.build) for optimal development experience and build performance.

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** >= 10.24.0 (package manager)

### Installation

Install dependencies from the root of the monorepo:

```bash
pnpm install
```

## 📦 What's inside?

This Turborepo includes the following packages and apps:

### Apps

- `web`: The main [Next.js](https://nextjs.org/) web application for Socium
  - Authentication flows (sign in, sign up)
  - Modern UI built with Radix UI and Tailwind CSS
  - Type-safe forms with React Hook Form and Zod

### Packages

- `@repo/eslint-config`: Shared ESLint configurations for the monorepo
- `@repo/typescript-config`: Shared TypeScript configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has the following tools configured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Turborepo](https://turbo.build) for monorepo orchestration

## 🛠️ Build

To build all apps and packages, run the following command:

```bash
# Using pnpm (recommended)
pnpm build

# Or using turbo directly
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```bash
# Build only the web app
pnpm exec turbo build --filter=web
```

## 🧪 Develop

To develop all apps and packages, run the following command:

```bash
# Using pnpm (recommended)
pnpm dev

# Or using turbo directly
pnpm exec turbo dev
```

To develop a specific app:

```bash
# Develop only the web app
pnpm exec turbo dev --filter=web
```

The web application will be available at [http://localhost:3000](http://localhost:3000).

## 📝 Available Scripts

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Run ESLint across all packages
- `pnpm check-types` - Type check all packages
- `pnpm format` - Format code with Prettier

## 🚀 Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching, you'll need a Vercel account. If you don't have one, you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then run:

```bash
# Authenticate with Vercel
pnpm exec turbo login

# Link your Turborepo to Remote Cache
pnpm exec turbo link
```

## 🏗️ Project Structure

```
socium/
├── apps/
│   └── web/              # Main Next.js web application
├── packages/
│   ├── eslint-config/    # Shared ESLint configurations
│   └── typescript-config/# Shared TypeScript configurations
├── turbo.json            # Turborepo configuration
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

## 📚 Learn More

### Turborepo

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)

### Technologies

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Built with ❤️ for the Georgian community
