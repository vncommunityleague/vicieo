"use client";

import Link from "next/link";
import { useState, useEffect, forwardRef } from "react";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "../../hooks";

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

const Sidebar = forwardRef<HTMLDivElement>(function Sidebar(props, ref) {
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const pathname = usePathname();
    const { y: scrollPositionY } = useScrollPosition();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code === "Escape") {
                setIsOpenSidebar(false);
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <aside className="block lg:hidden fixed top-0 left-0 w-64 z-20">
            <div className="relative">
                <div className="absolute left-0 top-0 px-3 py-4 z-10">
                    <div
                        className="p-1.5 pt-0.5 select-none cursor-pointer transition-colors hover:bg-white/20 duration-300"
                        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                    >
                        <span
                            className={
                                "p-0.5 font-anicons text-xl sm:text-2xl transition-fontvariationsettings duration-500 ease-in-out" +
                                (isOpenSidebar
                                    ? " anicons-end text-black"
                                    : " anicons-start " + (scrollPositionY > 20 ? " text-black" : " text-white"))
                            }
                        >
                            A
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className={
                            "absolute left-0 top-0 w-screen h-screen transition-all duration-300" +
                            (isOpenSidebar ? "  bg-black/60 block" : " bg-black/0 hidden")
                        }
                        onClick={() => setIsOpenSidebar(false)}
                    ></div>
                    <div
                        className={
                            "fixed h-screen px-8 pt-16 bg-white transition-transform z-0" +
                            (isOpenSidebar ? " translate-x-0" : " -translate-x-full")
                        }
                    >
                        <nav className="text-lg text-black select-none transition-colors duration-300">
                            <ul className="flex flex-col gap-4">
                                {links.map((link) => {
                                    return (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className={
                                                    "px-2 py-1 font-normal transition-colors duration-300" +
                                                    (pathname === link.href
                                                            ? " text-black"
                                                            : " text-zinc-400 hover:text-black/90"
                                                    )
                                                }
                                                scroll={false}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    );
});

export default Sidebar;
