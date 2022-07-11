This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

-   Install all dependencies:

    ```bash
    yarn install
    ```

-   Setup or check `.env.production` or `.env.development` according to environment or overwrite them by creating `.env.production.local` or `.env.development.local`.

-   For development server, run:

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

-   For production, build with:

    ```bash
    yarn build
    ```

    Then, to serve application:

    ```bash
    yarn start
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## what's included ?

-   nextjs 12
-   react 18
-   i18n
    -   with next-i18next
    -   ssr handling
    -   sample translations
-   redux toolkit
    -   store setup
    -   sample slice & structure, definition & consuming
    -   next-redux-wrapper for ssr handling (+setup)
    -   data fetching
        -   with rtk query
        -   setup with sample endpoints, definition & consuming (in components/thunks/getServerSideProps)(query & mutations)
        -   type definition
-   [mantine](https://github.com/mantinedev/mantine)
    -   as a bootstrap replacement
    -   ssr/rtl handled
    -   emotion styling (with stylis rtl plugin)
    -   theme context
-   sass module
-   prettier & eslint
-   vazirmatn as default font
-   working with cookies with cookies-next
