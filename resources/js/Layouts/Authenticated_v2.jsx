import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import {
    LogoutIcon,
    HomeIcon,
    UserIcon,
    DocumentIcon,
    CubeIcon,
} from "@heroicons/react/outline";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-zinc-900 flex">
            <nav className="bg-zinc-800 border-b border-gray-100 basis-20 py-24">
                <div className="flex flex-col gap-y-4">
                    <a
                        // method="post"
                        href={route("dashboard")}
                        className="w-full flex justify-center"
                    >
                        <HomeIcon className="h-8 text-violet-500 hover:text-violet-300" />
                    </a>
                    <a
                        // method="post"
                        href={route("dashboard")}
                        className="w-full flex justify-center"
                    >
                        <UserIcon className="h-8 text-violet-500 hover:text-violet-300" />
                    </a>
                    <a
                        // method="post"
                        // href={route("category")}
                        href="category"
                        className="w-full flex justify-center"
                    >
                        <DocumentIcon className="h-8 text-violet-500 hover:text-violet-300" />
                    </a>
                    <a
                        // method="post"
                        // href={route("category")}
                        href="category"
                        className="w-full flex justify-center"
                    >
                        <CubeIcon className="h-8 text-violet-500 hover:text-violet-300" />
                    </a>
                    {/* <a
                        method="post"
                        href={route(`logout`)}
                        className="w-full flex justify-center"
                    >
                        <LogoutIcon className="h-8 text-violet-500 hover:text-violet-300" />
                    </a> */}
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </nav>

            <main className="basis-auto px-10 py-5">{children}</main>
        </div>
    );
}
