"use client";

import React from 'react';
import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter
} from "@/navigation";
import NavigationLink from "@/components/layout/NavigationLink";
import {cn} from "@/utils";

const Header = () => {

    const locale = useLocale();
    const t = useTranslations();
    const [isPending, startTransition] = React.useTransition();
    const router = useRouter()
    const pathName = usePathname();
    const onChange = (e) => {
        const newLocale = e.target.value;
        startTransition(() => {
            router.replace(pathName, {locale: newLocale})
        });
    }

    return (
        <header className={`p-5 flex items-center justify-between shadow-xl`}>

            <h1>
                <NavigationLink href={"/"} className={cn("text-3xl font-bold uppercase")}>Panora</NavigationLink>
            </h1>

            <nav className={`flex items-center gap-3 `}>
                <NavigationLink href={"/"}>{t("Navigation.home")}</NavigationLink>
                <NavigationLink href={"/about"}>{t("Navigation.about")}</NavigationLink>
                <NavigationLink href={"/contact"}>{t("Navigation.contact")}</NavigationLink>
            </nav>

            <select className={`p-2 rounded-sm text-sm border border-black text-black`} value={locale}
                    onChange={onChange} disabled={isPending}>
                <option value={"en"}>English</option>
                <option value={"mm"}>မြန်မာ</option>
                <option value={"jp"}>Japan</option>
                <option value={"kr"}>Korea</option>
            </select>
        </header>
    );
};

export default Header;
