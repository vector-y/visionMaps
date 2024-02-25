import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MapIcon } from '@heroicons/react/16/solid';
import { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/shop' },
]

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="bg-white font-inter">
            <header className="absolute inset-x-0 top-0 z-50 bg-[#FFFFFF]">
                <nav className="flex items-center justify-between p-6 lg:px-8 mx-auto" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Vision Maps</span>
                            <MapIcon className="h-8 w-8 text-blue-500" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">

                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
                        {navItems.map((item) => {
                            if (item.name === 'Featured') {
                                return (
                                    <DropdownMenu key={item.name}>
                                        <DropdownMenuTrigger asChild>
                                            <button className="text-black block px-3 py-2 rounded-lg hover:bg-blue-500 transition-all">{item.name}</button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuContent className="bg-white rounded-lg">
                                                {/* Add DropdownMenuItems here */}
                                                <DropdownMenuItem className="text-black px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
                                                    <Link href='/shopAnchovy' className="text-black block">
                                                        Anchovy Studio
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenu>
                                );
                            } else {
                                return (
                                    <Link key={item.name} href={item.href} className="text-black block px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                                        {item.name}
                                    </Link>
                                );
                            }
                        })}

                    </div>
                </nav>
                <Dialog.Root open={mobileMenuOpen} onOpenChange={(open) => setMobileMenuOpen(open)}>
                    <Dialog.Overlay className="fixed inset-0 z-50" />
                    <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Sleeve</span>
                                <img src="./blackLogo.png" className="h-8 w-auto" alt="sleeve logo" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                </div>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>

            </header>
        </div>
    )
};
