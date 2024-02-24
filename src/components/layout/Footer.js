"use client";

import React from 'react';
import {Link, usePathname} from "@/navigation";

const countries = [
    {
        name: "မြန်မာ",
        code: "mm"
    },
    {
        name: "English",
        code: "en"
    },
    {
        name: "Japan",
        code: "jp"
    },
    {
        name: "Korea",
        code: "kr"
    }
]

const Footer = () => {

    const pathName = usePathname();

    return (
        <footer className={`py-10 bg-gray-800`}>
            <div className={`flex items-center justify-around`} >
                {
                    countries.map((country, index) => (
                        <Link key={index} href={pathName} locale={country.code} className={`flex items-center gap-2 px-2 text-white`} >
                            <span className={`fi fi-${country.code === "en" ? "us" : country.code}`}></span> {country.name}
                        </Link>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;
