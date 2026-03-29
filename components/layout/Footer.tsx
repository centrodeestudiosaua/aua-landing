"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Phone, ArrowRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-deep border-t border-navy-border pt-16 pb-8 mt-auto z-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="relative h-12 w-48 block">
                            <Image
                                src="/logo.png"
                                alt="AUA Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                            Referente en formación jurídica de alto nivel.
                            Impulsamos la excelencia y el liderazgo en el sector legal a través de programas ejecutivos de vanguardia.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/centrodeestudiosaua?locale=es_LA"
                                target="_blank"
                                aria-label="Visitar página de Facebook"
                                className="w-9 h-9 bg-navy-card border border-navy-border rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-navy-deep hover:border-primary transition-all duration-300 group"
                            >
                                <Globe className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="tel:6648000011"
                                aria-label="Llamar por teléfono"
                                className="w-9 h-9 bg-navy-card border border-navy-border rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-navy-deep hover:border-primary transition-all duration-300 group"
                            >
                                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="mailto:contacto@centrodeestudiosaua.com"
                                aria-label="Enviar correo electrónico"
                                className="w-9 h-9 bg-navy-card border border-navy-border rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-navy-deep hover:border-primary transition-all duration-300 group"
                            >
                                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns (2 cols each) */}
                    <div className="lg:col-span-2">
                        <h3 className="font-serif font-bold text-white mb-6 text-lg">Especialidades</h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-light">
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/especialidades/derecho-laboral">Derecho Laboral</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/especialidades/derecho-civil">Derecho Civil</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/especialidades/derecho-familiar">Derecho Familiar</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/especialidades/amparo-y-masc">Amparo y MASC</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-serif font-bold text-white mb-6 text-lg">Institución</h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-light">
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/nosotros">Sobre AUA</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/#metodologia">Metodología</Link></li>

                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" href="/contacto">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact Card (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="bg-navy-card/50 border border-navy-border p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="font-serif font-bold text-white mb-2">Mantente Actualizado</h3>
                            <p className="text-xs text-slate-300 mb-4 font-light">
                                Recibe análisis de nuevas reformas y convocatorias exclusivas.
                            </p>
                            <div className="relative mb-6">
                                <input
                                    className="w-full bg-navy-deep/80 border border-navy-border rounded-lg py-2.5 px-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 outline-none text-white transition-all"
                                    placeholder="email@legalfirn.com"
                                    type="email"
                                    aria-label="Correo electrónico para boletín"
                                />
                                <button aria-label="Suscribirse" className="absolute right-1 top-1 bg-primary text-navy-deep p-1.5 rounded hover:bg-white transition-colors">
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-start gap-3 pt-4 border-t border-navy-border/50">
                                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <p className="text-xs text-slate-500 font-light leading-relaxed">
                                    Blvd. Díaz Ordaz 12649 9 A, El Paraíso<br />
                                    Tijuana, Baja California 22106
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-navy-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-wider font-medium text-center md:text-left">
                    <div>
                        <p>© {new Date().getFullYear()} AUA Centro de Estudios.</p>
                        <p className="mt-1">Centro de Estudios AUA es operado por Jesus Acosta Urias.</p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
