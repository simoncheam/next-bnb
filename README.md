````markdown
# Next BnB

[![MIT License][license-shield]][license-url]

A modern, feature-rich vacation rental platform built with Next.js, integrating dynamic user interfaces, authentication, and seamless deployment on Vercel.

![Project Screenshot](https://github.com/simoncheam/next-bnb/blob/main/path/to/your/screenshot.png)

## Live Demo

Explore the app live: [Next BnB](https://next-bnb.vercel.app)

<a id="readme-top"></a>

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## Features

- **Dynamic Categories**: Explore listings by categories like cabins, airstreams, tents, and more.
- **Shadcn Components**: Beautiful and reusable components powered by Shadcn/UI.
- **Dark Mode**: A fully integrated theme toggle for improved user experience.
- **Authentication**: Secure and seamless login via Clerk.
- **Reviews**: View and interact with user reviews for listings.
- **PostgreSQL Database**: Reliable and fast database integration using Prisma and Supabase.

---

## Technologies Used

- **Next.js**: The React framework for building modern web apps.
- **TailwindCSS**: For responsive and modern styling.
- **Shadcn/UI**: Custom UI components for a polished interface.
- **Prisma**: ORM for efficient database interaction.
- **Supabase**: For file storage (images) and PostgreSQL integration.
- **Clerk**: Authentication solution for secure sign-ins.
- **Stripe**: Payment processing (ready for implementation).

---

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed
- A PostgreSQL database
- Supabase, Clerk, and Stripe accounts for API keys

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/simoncheam/next-bnb.git
   cd next-bnb
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   You need **two separate environment files** for proper configuration:

   #### `.env.local`

   This file contains variables for client-side configuration and authentication:

   ```env
   # Clerk (Authentication)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/profile/create
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile/create

   # Website URL
   NEXT_PUBLIC_WEBSITE_URL=https://next-bnb.vercel.app
   ```

   #### `.env`

   This file contains variables for backend configuration:

   ```env
   # Prisma and Database
   DATABASE_URL=
   DIRECT_URL=

   # Supabase
   SUPABASE_URL=
   SUPABASE_KEY=

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   ```

   > **Note**: Ensure these files are created in the root directory of your project and not committed to version control (add them to `.gitignore`).

4. Initialize Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser at `http://localhost:3000`.

---

## Usage

- **Explore Listings**: Browse vacation rentals by category and location.
- **Dark Mode Toggle**: Switch themes effortlessly using the dark mode toggle in the navbar.
- **Authentication**: Log in securely with Clerk.

---

## Contact

Simon Cheam - [LinkedIn](https://www.linkedin.com/in/simoncheam/)

---

## Acknowledgements

- Special thanks to [John Smilga](https://johnsmilga.com/) for project inspiration and guidance.
- [Shadcn/UI](https://shadcn.dev/) for providing an amazing UI component library.
- [Clerk](https://clerk.dev/) for simplifying authentication integration.
- [Prisma](https://www.prisma.io/) and [Supabase](https://supabase.com/) for excellent database solutions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

```

---

```
