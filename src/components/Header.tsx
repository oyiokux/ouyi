'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && (pathname || '').startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
                <div className="max-w-[1440px] w-full mx-auto px-6 h-[72px] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-lg rounded-sm">
                            OK
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight hidden sm:block">OKX</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${isActive(item.href)
                                        ? 'text-white bg-zinc-900'
                                        : 'text-zinc-500 hover:text-white hover:bg-zinc-900/50'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 hover:bg-zinc-900 rounded"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black pt-20 px-6">
                    <div className="flex flex-col space-y-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-4 rounded-lg text-lg font-medium border-b border-zinc-900 ${isActive(item.href)
                                        ? 'text-white'
                                        : 'text-zinc-500'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
