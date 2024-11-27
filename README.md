# Next BnB

[![MIT License][license-shield]][license-url]

A modern, feature-rich vacation rental platform built with Next.js, integrating dynamic user interfaces, authentication, and seamless deployment on Vercel.

[![Product Screenshot][product-screenshot]](https://next-bnb.vercel.app)

## Live Demo

Explore the app live: [Next BnB](https://next-bnb.vercel.app)

<a id="readme-top"></a>

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## About The Project

[![Product Thumbnail][product-thumbnail]](https://next-bnb.vercel.app)

Next BnB is an engaging and interactive project designed to help developers build proficiency in web development using Next.js 14. This platform serves as a fully functional vacation rental application, showcasing key concepts in front-end and back-end development.

This project teaches:

- Building a responsive and dynamic user interface with **TailwindCSS** and **Shadcn/UI**.
- Developing structured and maintainable backend logic with **Next.js Server Actions**, **Prisma ORM**, and **Supabase**.
- Understanding the differences between server and client components, fetching data, managing states, and handling nested layouts.
- Implementing robust user authentication and account management with **Clerk**.
- Adding interactivity through CRUD operations and ensuring data validation with the **Zod library**.
- Uploading and managing images with **Supabase storage**.
- Deploying a production-ready application using **Vercel**.

This hands-on project provides practical challenges and solutions, empowering you to create sophisticated web applications confidently.

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

- [![Next.js][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![Prisma][Prisma]][Prisma-url]
- [![Supabase][Supabase]][Supabase-url]
- [![Clerk][Clerk]][Clerk-url]
- [![Vercel][Vercel]][Vercel-url]

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

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   You need **two separate environment files** for proper configuration:

   #### `.env.local`

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

Simon Cheam - [LinkedIn][linkedin-url]

---

## Acknowledgements

- Special thanks to [John Smilga](https://johnsmilga.com/) for project inspiration and guidance.
- [Shadcn/UI](https://shadcn.dev/) for providing an amazing UI component library.
- [Clerk](https://clerk.dev/) for simplifying authentication integration.
- [Prisma](https://www.prisma.io/) and [Supabase](https://supabase.com/) for excellent database solutions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/simoncheam/next-bnb.svg?style=for-the-badge
[license-url]: https://github.com/simoncheam/next-bnb/blob/main/LICENSE
[product-screenshot]: https://github.com/simoncheam/next-bnb/blob/main/public/images/nextBnB_thumbnail.png
[product-thumbnail]: https://github.com/simoncheam/next-bnb/blob/main/public/images/nextBnB_thumbnail.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[Clerk]: https://img.shields.io/badge/Clerk-6173F3?style=for-the-badge&logo=clerk&logoColor=white
[Clerk-url]: https://clerk.dev/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
[linkedin-url]: https://www.linkedin.com/in/simoncheam/
