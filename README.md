# AGIOS Project

The fastest way to build apps with Next.js, Supabase, and Paddle.jsThe fastest way to build apps with Next.js, Supabase, and Paddle.js



**Features** · **Demo** · **Deploy to Vercel** · **Clone and run locally** · **Feedback and issues** **More Examples**



## Overview

AGIOS is a web application project that integrates with Paddle.js for handling online payments and checkout flows. The primary objective of this project is to provide a seamless user experience for purchasing products or subscriptions through a modern and minimalist 3D button design.



## Tech Stack and Technologies

The AGIOS project is built using the following technologies:

- **Next.js**: A React framework for building server-rendered and static websites.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds optional static typing.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Paddle.js**: A JavaScript SDK provided by Paddle for integrating online payments and checkout flows.
- **Supabase**: An open-source Firebase alternative that provides authentication, database, and storage services.



## Knowledge Base and Sources

The following resources were used as a knowledge base and reference during the development process:

- [Paddle.js Documentation](command:_cody.vscode.open?"https%3A%2F%2Fpaddle.com%2Fdocs%2Fpaddle-js%2F")
- [Next.js Documentation](command:_cody.vscode.open?"https%3A%2F%2Fnextjs.org%2Fdocs")
- [React Documentation](command:_cody.vscode.open?"https%3A%2F%2Freactjs.org%2Fdocs%2Fgetting-started.html")
- [TypeScript Documentation](command:_cody.vscode.open?"https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2F")
- [Tailwind CSS Documentation](command:_cody.vscode.open?"https%3A%2F%2Ftailwindcss.com%2Fdocs%2Finstallation")
- [Supabase Documentation](command:_cody.vscode.open?"https%3A%2F%2Fsupabase.com%2Fdocs")



## Development Process

1. **Initial Setup**: The project was set up using Next.js, with TypeScript and Tailwind CSS configured for styling and type safety.
2. **Implementing Paddle.js Integration**: The Paddle.js integration was implemented by creating a custom hook called `usePaddle`. This hook loads the Paddle.js script asynchronously and sets up the Paddle instance with the provided Vendor ID.
3. **Creating the Checkout Button Component**: A reusable `ClientCheckoutButton` component was created to render the "Buy Now" button with the desired 3D design and handle the checkout flow initiation.
4. **Integrating the Checkout Button**: The `ClientCheckoutButton` component was integrated into the `ProtectedPage` component, which represents a protected route accessible only to authenticated users.
5. **Resolving TypeScript Errors**: During the integration process, several TypeScript errors were encountered, primarily related to the `children` prop expected by the `ClientCheckoutButton` component. These errors were resolved by updating the component's prop types and rendering the button element directly within the component.
6. **Handling the Checkout Flow**: The `openCheckout` function within the `ClientCheckoutButton` component was implemented to initiate the Paddle.js checkout flow when the "Buy Now" button is clicked. This function opens the Paddle checkout modal with the specified product or subscription details.
7. **Testing and Troubleshooting**: The application was thoroughly tested, and issues were encountered, such as a 404 Not Found error when clicking

Certainly, here's the continuation of the updated README file:

1. **Testing and Troubleshooting**: The application was thoroughly tested, and issues were encountered, such as a 404 Not Found error when clicking the "Buy Now" button. Troubleshooting steps were taken, including inspecting network requests, checking the Paddle.js documentation, and considering potential CORS issues.
2. **Configuring Paddle Environment and Authentication**: Based on the specific requirements and guidance from the Paddle.js documentation, the `usePaddle` hook was updated to allow configuring the Paddle environment (sandbox or production) and providing additional authentication credentials, if needed.



## Issues Encountered

During the development process, the following issues were encountered:

1. **TypeScript Error: Property 'children' is missing**: This error occurred when the `ClientCheckoutButton` component expected a `children` prop, but none was provided. It was resolved by updating the component's prop types and rendering the button element directly within the component.
2. **404 Not Found Error on Button Click**: When clicking the "Buy Now" button, a 404 Not Found error was encountered, likely due to an issue with the Paddle.js integration or the way the checkout flow was being initiated. Troubleshooting steps were taken, including inspecting network requests, checking the Paddle.js documentation, and considering potential CORS issues.



## Paddle Integration Changes

The primary changes related to the Paddle.js integration were:

1. **Creating the `usePaddle` Hook**: A custom hook called `usePaddle` was created to load the Paddle.js script asynchronously and set up the Paddle instance with the provided Vendor ID.
2. **Configuring Paddle Environment and Authentication**: The `usePaddle` hook was updated to allow configuring the Paddle environment (sandbox or production) and providing additional authentication credentials, if needed.
3. **Implementing the `ClientCheckoutButton` Component**: A reusable `ClientCheckoutButton` component was created to render the "Buy Now" button with the desired 3D design and handle the checkout flow initiation using the `usePaddle` hook.
4. **Integrating the Checkout Button**: The `ClientCheckoutButton` component was integrated into the `ProtectedPage` component, representing a protected route accessible only to authenticated users.



## Project Structure and Architecture

The AGIOS project follows a typical Next.js project structure, with the following key directories and files:

```
agios-project/
├── app/
│   ├── components/
│   │   ├── AuthButton.tsx
│   │   ├── ClientCheckoutButton.tsx
│   │   ├── DeployButton.tsx
│   │   ├── Header.tsx
│   │   └── tutorial/
│   │       └── FetchDataSteps.tsx
│   ├── protected/
│   │   └── page.tsx
│   └── utils/
│       ├── paddle.tsx
│
```



## Features

- Works across the entire Next.js stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](command:_cody.vscode.open?"https%3A%2F%2Ftailwindcss.com")
- Optional deployment with Supabase Vercel Integration and Vercel deploy
  - Environment variables automatically assigned to Vercel project



## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](command:_cody.vscode.open?"https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F").



## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[]([https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fw](command:_cody.vscode.open?"https%3A%2F%2Fvercel.com%2Fnew%2Fclone%3Frepository-url%3Dhttps%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fw")ith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user's%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, follow the steps below.



## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](command:_cody.vscode.open?"https%3A%2F%2Fdatabase.new")

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app -e with-supabase
   ```

   

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

   

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](command:_cody.vscode.open?"https%3A%2F%2Fapp.supabase.com%2Fproject%2F_%2Fsettings%2Fapi")

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   

   The starter kit should now be running on [localhost:3000](command:_cody.vscode.open?"http%3A%2F%2Flocalhost%3A3000%2F").

> Check out [the docs for Local Development](command:_cody.vscode.open?"https%3A%2F%2Fsupabase.com%2Fdocs%2Fguides%2Fgetting-started%2Flocal-development") to also run Supabase locally.



## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](command:_cody.vscode.open?"https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Fissues%2Fnew%2Fchoose").



## More Supabase examples

- [Next.js Subscription Payments Starter](command:_cody.vscode.open?"https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments")
- [Cookie-based Auth and the Next.js 13 App Router (free course)](command:_cody.vscode.open?"https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF")
- [Supabase Auth and the Next.js App Router](command:_cody.vscode.open?"https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Ftree%2Fmaster%2Fexamples%2Fauth%2Fnextjs")