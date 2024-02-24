import {createSharedPathnamesNavigation} from "next-intl/navigation";

export const locales = ["en", "mm", "jp", "kr"];
export const localePrefix = "always";

export const {Link, usePathname, useRouter, redirect} = createSharedPathnamesNavigation({locales, localePrefix})