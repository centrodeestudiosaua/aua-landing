"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-[1352px] z-50 transition-all duration-300 rounded-full border ${isScrolled
                ? "bg-[#0B1D3F]/90 backdrop-blur-xl border-white/10 shadow-2xl py-2"
                : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="px-4 md:px-6 h-16 flex items-center justify-between">
                <Link className="flex items-center justify-center shrink-0" href="#">
                    <div className="relative h-12 w-32 md:w-40 overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="AUA Logo"
                            fill
                            className="object-contain object-left"
                            priority
                            sizes="(max-width: 768px) 128px, 160px"
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex gap-8 items-center">
                    {["Beneficios", "Agenda", "Precios", "Instructor"].map((item) => (
                        <Link
                            key={item}
                            className="text-sm font-medium hover:text-yellow-400 transition-colors relative group py-1"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#registro"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-[#0B1D3F] font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20"
                    >
                        REGISTRARME
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white bg-white/10 p-2 rounded-lg"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-0 right-0 bg-[#0B1D3F] border border-white/10 p-6 flex flex-col gap-4 rounded-xl shadow-2xl animate-in slide-in-from-top-4">
                        {["Beneficios", "Agenda", "Precios", "Instructor"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg font-medium text-white hover:text-yellow-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#registro"
                            className="bg-yellow-500 text-[#0B1D3F] font-bold py-3 text-center rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            REGISTRARME
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
