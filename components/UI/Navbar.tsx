'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// Icons
import { Bookmarks, Gear, Sun } from "@phosphor-icons/react";

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
    const pathname = usePathname();

    // Links data array
    const navLinks = [
        { href: "/", label: "Dashboard" },
        { href: "/courses", label: "Courses" },
        { href: "/help", label: "Help" },
    ];

    // Function to determine if a link is active
    const isActive = (href: string) => pathname === href;

    return (
        <nav className="w-full h-16 px-2 flex justify-between items-center fixed bg-background border-b border-b-black/20 dark:border-b-white/20">
            {/* Brand */}
            <Link href="/" className="font-semibold text-lg flex items-center gap-x-1">
                <Bookmarks size={25} weight="bold" className="text-primary" />
                <span>Textuva</span>
            </Link>

            {/* Nav Items */}
            <section className="flex items-center gap-x-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${isActive(link.href) ? 'border-b border-b-primary' : 'opacity-75'}`}
                    >
                        {link.label}
                    </Link>
                ))}

                {/* Vertical divider */}
                <section className="min-h-[2em] inline-block w-0.5 bg-black/10 dark:bg-white/10" />

                {/* Icon Elements */}
                <section className="flex gap-x-5 items-center">
                    <Link href="/settings" className={`${isActive('/settings') ? 'text-primary' : ''}`}>
                        <Gear size={25} weight="bold" />
                    </Link>

                    {/* 
                        More to come
                        That's the reason for this containing parent element
                    */}
                </section>
            </section>
        </nav>
    );
};

export default Navbar;
