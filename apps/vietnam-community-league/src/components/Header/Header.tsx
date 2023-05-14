"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { useScrollPosition } from "@/hooks";

const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Member Tournaments",
        href: "/member-tournaments",
    },
    {
        title: "Affiliate Tournaments",
        href: "/affiliate-tournaments",
    },
    {
        title: "Staff",
        href: "/staff",
    },
    {
        title: "Donate",
        href: "/donate",
    },
];

export default function Header() {
    const pathname = usePathname();
    const { y: scrollPositionY } = useScrollPosition();

    return (
        <>
            <Sidebar />
            <div
                className={
                    "fixed left-0 top-0 w-full px-0 md:px-4 transition-colors duration-300 z-10" +
                    (scrollPositionY > 20 ? " bg-white" : " bg-transparent")
                }
            >
                <div className="flex justify-between items-center h-16 text-base">
                    <div className="pl-12 sm:pl-14 md:pl-10 lg:pl-4 select-none">
                        <div className="flex items-center justify-between gap-1.5 sm:gap-x-3">
                            <Link href="/" className="text-white font-bold">
                                <div className="flex justify-between items-center gap-x-2">
                                    <div>
                                        <div className="relative w-8 sm:w-10 h-8 sm:h-10">
                                            <Image
                                                src="/assets/images/logo/vietnam_community_league.png"
                                                alt="VCL Logo"
                                                fill
                                                sizes="100vw"
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            "text-lg sm:text-xl font-medium tracking-wider transition-colors duration-300" +
                                            (scrollPositionY > 20 ? " text-[#e6765f]" : "")
                                        }
                                    >
                                        Vietnam Community League
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <nav
                            className={
                                "text-lg select-none transition-colors duration-300" +
                                (scrollPositionY > 20 ? " text-black/75" : " text-white/75")
                            }
                        >
                            <ul className="flex gap-3">
                                {links.map((link, index) => {
                                    return (
                                        <>
                                            <li key={link.title}>
                                                <Link
                                                    href={link.href}
                                                    className={
                                                        "px-2 py-1 text-center transition-colors duration-200" +
                                                        (pathname === link.href
                                                            ? " font-bold" +
                                                              (scrollPositionY > 20 ? " text-black" : " text-white")
                                                            : scrollPositionY > 20
                                                            ? " hover:text-black"
                                                            : " hover:text-white")
                                                    }
                                                    scroll={false}
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                            {index < links.length - 1 && (
                                                <li>
                                                    <div className="inline-block w-0.5 h-0.5 align-middle bg-zinc-400"></div>
                                                </li>
                                            )}
                                        </>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
