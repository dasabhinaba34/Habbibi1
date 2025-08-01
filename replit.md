# Overview

This is a Fenix Restaurants website built as a full-stack web application showcasing modern Greek-Mediterranean cuisine. The project implements a restaurant website with sections for dining, drinking, menus, events, and reservations. It features a luxurious brand identity with gold and dark color schemes, responsive design, and interactive components like modals and newsletter signup functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for brand colors (Fenix gold, bronze, dark themes)
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Development**: Hot module replacement (HMR) integration between Vite and Express
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Storage Interface**: Abstracted storage layer with in-memory implementation and database-ready interface

## Component Architecture
- **Modular Design**: Feature-based component organization with reusable UI components
- **Responsive Layout**: Mobile-first design with responsive breakpoints
- **Brand Integration**: Custom color scheme implementation with CSS variables
- **Accessibility**: ARIA-compliant components using Radix UI primitives

## Development Environment
- **Monorepo Structure**: Shared TypeScript configurations and schema definitions
- **Path Aliases**: Configured import aliases for clean code organization (@/, @shared/, @assets/)
- **Development Tools**: ESBuild for server bundling, PostCSS with Autoprefixer for CSS processing

## Key Features Implementation
- **Restaurant Sections**: Hero, dining, drinking, menus, gallery, events, and reservations
- **Interactive Elements**: Graduation modal with timed display, newsletter signup with validation
- **External Integration**: SevenRooms reservation system integration
- **Content Management**: Static content with external asset support

# Deployment Configuration

## Build Process & Static Deployment Fix ✅ RESOLVED
**Issue**: Due to Vite configuration constraints, the build output was created in `dist/public/` instead of the expected `dist/` directory, causing deployment failures in Replit's static deployment system.

**Root Cause**: The `vite.config.ts` file had `outDir: path.resolve(import.meta.dirname, "dist/public")` while Replit's static deployment expects files directly in `dist/`.

**Solution Applied**: Created automated deployment scripts that fix the build output structure:

### Available Deployment Scripts:
1. **`./fix-deployment.sh`** - Original bash-based solution
2. **`./deploy-build.sh`** - Enhanced deployment script with detailed logging and validation
3. **`scripts/fix-build-output.js`** - Node.js alternative for file movement

### Deployment Process:
```bash
# Recommended approach - use the enhanced script
./deploy-build.sh
```

**What the scripts do**:
1. Run the standard build process (`npm run build`)
2. Move all files from `dist/public/` to `dist/` 
3. Remove the empty `public` subdirectory
4. Verify `index.html` is in the correct location for static deployment
5. Validate both client and server files are present

### Current Status: ✅ FIXED
- `index.html` is now correctly located at `dist/index.html`
- Static assets are properly organized in `dist/assets/`
- Server file is at `dist/index.js`
- Deployment structure matches Replit's requirements

### Deployment Notes:
- Always run one of the deployment scripts before deploying
- The `.replit` configuration is set to `publicDir = "dist"` which now matches the actual output
- Works around locked configuration files (`vite.config.ts`, `.replit`, `package.json`)

# External Dependencies

## Database & ORM
- **Neon Database**: Serverless PostgreSQL database via @neondatabase/serverless
- **Drizzle ORM**: Type-safe database operations with migration support
- **Database Schema**: User management with username/password authentication

## UI & Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling

## Frontend Libraries
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form handling with validation via @hookform/resolvers
- **Wouter**: Lightweight routing solution
- **Date-fns**: Date manipulation and formatting

## Development & Build Tools
- **Vite**: Frontend build tool with React plugin support
- **ESBuild**: Fast JavaScript bundler for server-side code
- **TypeScript**: Static typing across the entire application
- **Replit Integration**: Development environment plugins for Replit platform

## Third-Party Services
- **SevenRooms**: Restaurant reservation management system
- **External Assets**: Image hosting via Unsplash, Pixabay, and other CDNs
- **Menu PDFs**: Hosted menu documents for different dining options