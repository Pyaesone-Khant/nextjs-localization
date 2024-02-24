"use client";

import React from 'react';
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

const Header = () => {

    const locale = useLocale();
    const t = useTranslations();
    const [isPending, startTransition] = React.useTransition();
    const router = useRouter()
    const pathName = usePathname();
    console.log(pathName)

    const onChange = (e) => {
        const newLocale = e.target.value;
        startTransition(() => {
            router.replace(newLocale)
        });
    }

    return (
        <header className={`p-5 flex items-center justify-between shadow-xl`}>
            <nav className={`flex items-center gap-3 `}>
                <Link href={`/${locale}`}>
                    {t("Navigation.home")}
                </Link>
                <Link href={`/${locale}/about`}>
                    {t("Navigation.about")}
                </Link>
                <Link href={`/${locale}/contact`}>
                    {t("Navigation.contact")}
                </Link>
            </nav>

            <select className={`p-2 rounded-sm text-sm border border-black text-black`} value={locale} onChange={onChange} disabled={isPending}>
                <option value={"en"}>English</option>
                <option value={"mm"}>မြန်မာ</option>
            </select>
        </header>
    );
};

export default Header;
