# StackIt Website

The official website for StackIt - Your External Dev Team with In-House Drive.

## About

StackIt provides external development team services with the dedication and standards of an in-house team. We help companies build extraordinary software with a partner who shares their standards.

## Tech Stack

- **Framework**: SvelteKit 2.x
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Netlify
- **Internationalization**: Paraglide JS
- **Testing**: Playwright (E2E), Vitest (Unit)

## Development

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm (recommended package manager)

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```
   
   The site will be available at `http://localhost:5173`

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run test` - Run all tests (unit + e2e)
- `pnpm run test:unit` - Run unit tests
- `pnpm run test:e2e` - Run end-to-end tests
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with ESLint
- `pnpm run check` - Type check with svelte-check

## Features

- ⚡ Fast and modern SvelteKit application
- 🎨 Beautiful UI with Tailwind CSS
- 🌍 Internationalization support (English/Spanish)
- 📱 Responsive design
- ♿ Accessibility focused
- 🧪 Comprehensive testing setup
- 🚀 Optimized for Netlify deployment

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── i18n/          # Internationalization utilities
│   ├── stores/        # Svelte stores
│   └── types/         # TypeScript type definitions
├── routes/            # SvelteKit routes
└── app.html           # App template

static/                # Static assets
```

## Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch. The build process includes:

- Static site generation
- Asset optimization
- Internationalization compilation

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `pnpm run test`
4. Run linting: `pnpm run lint`
5. Submit a pull request

## License

Private repository - All rights reserved.
