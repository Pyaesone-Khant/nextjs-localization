'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {Link} from '@/navigation';
import {cn} from "@/utils";

export default function NavigationLink({href, ...rest}){
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            href={href}
            className={cn("text-gray-500 duration-200 hover:text-black", {"font-bold text-black underline underline-offset-2 ": isActive})}
            {...rest}
        />
    );
}