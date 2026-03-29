"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { createClient } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Check auth status
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);

            const { data: { subscription } } = supabase.auth.onAuthStateChange(
                (_event, session) => {
                    setUser(session?.user ?? null);
                }
            );

            return () => subscription.unsubscribe();
        };

        checkUser();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [supabase.auth]);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-navy-deep/95 backdrop-blur-md border-navy-border shadow-lg py-2" : "bg-navy-deep border-transparent py-4"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="relative h-10 w-32 md:h-12 md:w-40 block transition-all" aria-label="Inicio">
                        <Image
                            src="/logo.png"
                            alt="AUA Logo"
                            fill
                            sizes="(max-width: 768px) 150px, 200px"
                            className="object-contain object-left"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link className="text-xs font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group" href="/nosotros">
                        Nosotros
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                    <div className="relative group/nav">
                        <span className="text-xs font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer relative py-2">
                            Especialidades
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/nav:w-full"></span>
                        </span>
                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50 min-w-[220px]">
                            <div className="bg-navy-card/95 backdrop-blur-md border border-navy-border rounded-lg shadow-2xl p-4 flex flex-col gap-3">
                                <Link href="/especialidades/derecho-laboral" className="text-sm text-slate-300 hover:text-primary transition-colors">Derecho Laboral</Link>
                                <Link href="/especialidades/derecho-civil" className="text-sm text-slate-300 hover:text-primary transition-colors">Derecho Civil</Link>
                                <Link href="/especialidades/derecho-familiar" className="text-sm text-slate-300 hover:text-primary transition-colors">Derecho Familiar</Link>
                                <Link href="/especialidades/amparo-y-masc" className="text-sm text-slate-300 hover:text-primary transition-colors">Amparo y MASC</Link>
                            </div>
                        </div>
                    </div>
                    <Link className="text-xs font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group" href="/#programas">
                        Programas
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                    <Link className="text-xs font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group" href="/#metodologia">
                        Metodología
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>

                    <Link className="text-xs font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group" href="/contacto">
                        Contacto
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Desktop CTA */}
                {!loading && (
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <Link 
                                href="https://portal.centrodeestudiosaua.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 border border-primary/50 text-primary hover:bg-primary hover:text-navy-deep px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                            >
                                <LayoutDashboard className="w-3.5 h-3.5" />
                                Portal Alumno
                            </Link>
                        ) : (
                            <>
                                <Link href="https://portal.centrodeestudiosaua.com/login" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors">
                                    Iniciar Sesión
                                </Link>
                                <Link href="https://portal.centrodeestudiosaua.com/inscribirse" target="_blank" rel="noopener noreferrer" className="inline-block border border-primary/50 text-primary hover:bg-primary hover:text-navy-deep px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                                    Regístrate
                                </Link>
                            </>
                        )}
                    </div>
                )}

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-navy-deep border-b border-navy-border p-6 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-2">
                    <Link className="text-sm font-medium text-slate-200 uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)} href="/nosotros">Nosotros</Link>
                    <div className="space-y-4">
                        <p className="text-sm font-medium text-slate-200 uppercase tracking-wider">Especialidades</p>
                        <div className="flex flex-col gap-4 pl-4 border-l border-navy-border/50">
                            <Link className="text-sm text-slate-400" onClick={() => setMobileMenuOpen(false)} href="/especialidades/derecho-laboral">Derecho Laboral</Link>
                            <Link className="text-sm text-slate-400" onClick={() => setMobileMenuOpen(false)} href="/especialidades/derecho-civil">Derecho Civil</Link>
                            <Link className="text-sm text-slate-400" onClick={() => setMobileMenuOpen(false)} href="/especialidades/derecho-familiar">Derecho Familiar</Link>
                            <Link className="text-sm text-slate-400" onClick={() => setMobileMenuOpen(false)} href="/especialidades/amparo-y-masc">Amparo y MASC</Link>
                        </div>
                    </div>
                    <Link className="text-sm font-medium text-slate-200 uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)} href="/#programas">Programas</Link>
                    <Link className="text-sm font-medium text-slate-200 uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)} href="/#metodologia">Metodología</Link>

                    <Link className="text-sm font-medium text-slate-200 uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)} href="/contacto">Contacto</Link>
                    
                    {!loading && (
                        <div className="mt-4 flex flex-col gap-3">
                            {user ? (
                                <Link 
                                    href="https://portal.centrodeestudiosaua.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    onClick={() => setMobileMenuOpen(false)} 
                                    className="bg-primary text-navy-deep px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wide w-full text-center transition-all flex items-center justify-center gap-2"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    Portal Alumno
                                </Link>
                            ) : (
                                <>
                                    <Link href="https://portal.centrodeestudiosaua.com/login" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="border border-primary/50 text-primary hover:bg-primary hover:text-navy-deep px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wide w-full text-center transition-all">
                                        Iniciar Sesión
                                    </Link>
                                    <Link href="https://portal.centrodeestudiosaua.com/inscribirse" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-navy-deep px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wide w-full text-center transition-all shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                                        Regístrate
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
