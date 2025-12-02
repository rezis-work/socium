# Socium

**Socium** is a modern Georgian social media platform built with cutting-edge web technologies. Connect, share, and engage with the Georgian community in a beautiful, fast, and intuitive environment.

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** >= 10.24.0 (package manager)

### Installation

From the root of the monorepo, install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

The page auto-updates as you edit files. You can start editing the page by modifying `app/page.tsx`.

## 🛠️ Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[React 19](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[React Hook Form](https://react-hook-form.com)** - Form state management
- **[Zod](https://zod.dev)** - Schema validation
- **[Radix UI](https://www.radix-ui.com)** - Accessible component primitives
- **[Turborepo](https://turbo.build)** - Monorepo build system

## 📁 Project Structure

```
apps/web/
├── app/              # Next.js App Router pages
│   ├── signin/      # Sign in page
│   └── signup/      # Sign up page
├── components/      # React components
│   ├── auth/        # Authentication components
│   └── ui/          # Reusable UI components
└── lib/             # Utilities and configurations
    ├── auth/        # Authentication schemas
    └── constants/   # App constants
```

## 🧪 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm check-types` - Type check with TypeScript

## 🎨 Features

- 🔐 **Authentication** - Secure sign in and sign up flows
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Performance** - Optimized for speed and efficiency
- ♿ **Accessibility** - Built with accessibility in mind using Radix UI
- 🎯 **Type Safety** - Full TypeScript coverage with Zod validation

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ for the Georgian community
