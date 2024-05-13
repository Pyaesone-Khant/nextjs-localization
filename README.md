# Localization in Next.js using next-intl(i18n)

This project demonstrates how to implement localization in a Next.js project using next-intl package.


## Getting Started

First, install the necessary packages:

```bash
npm install
```

Run the project & the app will start at [http://localhost:3000](http://localhost:3000) :

```bash
npm run dev
```

# Brief Explanation of how I implement localization in Next JS 

## Setting Up i18next, middleware & navigation

Create a new file named `i18n.js`, `middleware.js` & `navigation.js` in the `src` directory, at the same level as `app` directory which is also located in `src` directory: 

```js
// i18n.js
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from "@/navigation";

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});

// middleware.js
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from "@/navigation";
export default createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'en'
});

export const config = {
    matcher: ['/', '/(mm|en|jp|kr)/:path*']
};

//navigation.js
import {createSharedPathnamesNavigation} from "next-intl/navigation";

export const locales = ["en", "mm", "jp", "kr"];
export const localePrefix = "always";

export const {Link, usePathname, useRouter, redirect} = createSharedPathnamesNavigation({locales, localePrefix})

```

## Accessing locale & translation files

Create a dynamic route named `locale` in the `app` directory, the folder structure will be seen as `src/app/[locale]`. Create a `layout.js` in that `locale` directory, and get `locale` from params & applied both `locale` param & `messages` folder which contain translation files in `layout.js` as below: 

```js
// app/[locale]/layout.js

import { Inter } from "next/font/google";
import {NextIntlClientProvider, useMessages} from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: {locale} }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

## Using i18next in pages

Import & use the `useTranslations` from `next-intl` by passing the key of the translation file `json` as the arguemnt shown in the code below. For a better explanation, `Index` is one of the key from your translation file & the keys like `title`, `desc` & `intro` are the children of the key `Index` and each child keys stored the translated text as value.

```js
// app/[locale]/page.js

import {useTranslations} from "next-intl";

export default function Home() {
      const t = useTranslations("Index")

    return (
        <section>
            <h2>{t("title")}</h2>
            <p> {t("desc")} </p>
            <p> {t("intro")} </p>
        </section>
    );
}

```

## Adding Translation Files

First create a directory named `messages` at the same level as src directory. And then, add your translation files as `filename.json` into the `messages` directory. You can separate each translation by using nested obj in the translation file. For example, `messages/en.json` could be:

```json
{
  "Index": {
    "title": "Hello!",
    "desc": "Welcome to the NextJS Internationalization Example!",
    "intro": "Welcome to the next-intl docs! In this guide you will learn how to set up internationalization (i18n) in your Next.js app. With Next.js 13, the App Router along with support for React Server Components was introduced and announced as stable with version 13.4. Following the lead of Next.js, next-intl also recommends this paradigm since it increases both simplicity as well as flexibility when it comes to i18n."
  },
"NotFound": {
    "title": "404",
    "desc": "Oops! It seems that the page you are looking for does not exist."
  },
  "Navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
}
```
