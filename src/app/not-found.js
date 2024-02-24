"use client";

import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <html>
            <body>
            <div className={`min-h-screen flex flex-col gap-2 items-center justify-center`}>
                <h1 className={`text-xl font-medium`}>Something went wrong!</h1>
                <Link href={`/`} className={`px-4 py-2 bg-blue-500 text-white rounded-md`}>
                    Go Back
                </Link>
            </div>
            </body>
        </html>
    )
};

export default NotFound;
