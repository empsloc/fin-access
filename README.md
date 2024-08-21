# fin-aggregate

`fin-aggregate` is a Next.js application for managing and aggregating financial data. The project uses a combination of modern libraries and tools to enhance functionality and provide a rich user experience.

## Table of Contents

- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
  - [Core Dependencies](#core-dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Configuration](#configuration)
- [Usage](#usage)
- [Additional Information](#additional-information)
- [License](#license)

## Project Setup

### Prerequisites

- **Node.js**: Version 18 or later is required. Download and install from [Node.js official website](https://nodejs.org/).
- **MySQL**: Install and configure MySQL from [MySQL official website](https://www.mysql.com/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd fin-aggregate
Install dependencies:

bash
Copy code
npm install
Scripts
Here are the available npm scripts to help with development and deployment:

dev: Starts the development server with hot reloading.

bash
Copy code
npm run dev
build: Compiles the project for production.

bash
Copy code
npm run build
start: Starts the production server.

bash
Copy code
npm run start
lint: Runs linting checks on the codebase.

bash
Copy code
npm run lint
db:push: Applies database migrations using Drizzle ORM.

bash
Copy code
npm run db:push
db:studio: Opens the Drizzle ORM studio for managing your database.

bash
Copy code
npm run db:studio
Dependencies
Core Dependencies
@clerk/nextjs:

Purpose: Provides authentication and user management for Next.js applications.
Documentation: Clerk Documentation
Setup: Follow the Clerk setup guide to configure authentication in your project. You will need to set up Clerk credentials and environment variables.
ag-grid-react:

Purpose: A powerful data grid component for displaying and manipulating data in React applications.
Documentation: AG Grid Documentation
Setup: Import the AG Grid components and styles into your React components to use the data grid features.
axios:

Purpose: A promise-based HTTP client for making requests to APIs.
Documentation: Axios Documentation
Setup: Use axios to make API requests and handle responses.
drizzle-orm:

Purpose: An ORM for TypeScript and JavaScript that integrates with MySQL databases.
Documentation: Drizzle ORM Documentation
Setup: Configure your database models and apply migrations using Drizzle ORM.
next:

Purpose: The React framework for building server-side rendered and static web applications.
Documentation: Next.js Documentation
Setup: Follow the Next.js documentation for setting up pages, routing, and server-side logic.
react:

Purpose: A JavaScript library for building user interfaces.
Documentation: React Documentation
Setup: Build your UI components using React and manage state with hooks.
react-dom:

Purpose: Provides DOM-specific methods that can be used at the top level of your app.
Documentation: React DOM Documentation
Setup: Use react-dom to render your React components into the DOM.
recharts:

Purpose: A charting library built with React components for data visualization.
Documentation: Recharts Documentation
Setup: Import Recharts components to create charts and graphs in your application.
tailwindcss:

Purpose: A utility-first CSS framework for rapidly building custom designs.
Documentation: Tailwind CSS Documentation
Setup: Configure Tailwind CSS by creating a tailwind.config.js file and importing the styles into your project.
zod:

Purpose: A TypeScript-first schema declaration and validation library.
Documentation: Zod Documentation
Setup: Use zod to define and validate schemas for your data.
Dev Dependencies
@types/node:

Purpose: Provides TypeScript type definitions for Node.js.
Documentation: DefinitelyTyped
@types/react:

Purpose: Provides TypeScript type definitions for React.
Documentation: DefinitelyTyped
@types/react-dom:

Purpose: Provides TypeScript type definitions for React DOM.
Documentation: DefinitelyTyped
drizzle-kit:

Purpose: CLI for managing Drizzle ORM migrations and database schema.
Documentation: Drizzle Kit Documentation
postcss:

Purpose: A tool for transforming CSS with JavaScript plugins.
Documentation: PostCSS Documentation
typescript:

Purpose: A strongly typed programming language that builds on JavaScript.
Documentation: TypeScript Documentation
Configuration
Environment Variables: Create a .env.local file in the root of your project and add necessary environment variables. For example:

bash
Copy code
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
DATABASE_URL=<your-database-url>
Database Setup: Configure your MySQL database and apply schema migrations using Drizzle ORM. Use the following command to apply migrations:

bash
Copy code
npm run db:push
Usage
Development: Start the development server to see changes in real-time.

bash
Copy code
npm run dev
Production: Build and start the application for production.

bash
Copy code
npm run build
npm run start
Additional Information
For more detailed information about each dependency, refer to their respective documentation linked in the Dependencies section.

License
This project is licensed under the MIT License. See the LICENSE file for details.

javascript
Copy code

You can replace `<repository-url>`, `<your-clerk-frontend-api>`, `<your-clerk
