"use client";

import { Facebook, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#050e1f] text-white pt-16 pb-8 border-t border-white/5 font-sans rounded-[2.5rem] shadow-2xl overflow-hidden mb-8">
            <div className="container px-4 md:px-6 mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">CENTRO DE ESTUDIOS AUA A.C.</h3>


                        <div className="space-y-4">
                            <Link
                                href="tel:6648000011"
                                className="flex items-center gap-4 text-gray-200 hover:text-[#EAB308] transition-colors group"
                            >
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#EAB308]/20 transition-colors">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <span className="text-lg font-medium">664-800-00-11</span>
                            </Link>



                            <Link
                                href="https://www.facebook.com/centrodeestudiosaua?locale=es_LA"
                                target="_blank"
                                className="flex items-center gap-4 text-gray-200 hover:text-blue-500 transition-colors group"
                            >
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </div>
                                <span className="text-lg font-medium">Más información en Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 text-center italic">
                        <div className="text-4xl text-[#EAB308] absolute top-4 left-6 opacity-30">"</div>
                        <p className="text-xl md:text-2xl text-gray-200 font-serif leading-relaxed mb-4 relative z-10">
                            La suerte es cuando la preparación, se encuentra con la oportunidad.
                        </p>
                        <div className="w-12 h-1 bg-[#EAB308] mx-auto mb-3" />
                        <span className="text-sm font-bold text-[#EAB308] uppercase tracking-widest">SÉNECA</span>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm text-center md:text-left">
                    <div>
                        <p>&copy; {new Date().getFullYear()} Centro de Estudios AUA A.C. Todos los derechos reservados.</p>
                        <p className="mt-1">Centro de Estudios AUA es operado por Jesus Acosta Urias.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-white transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">
                            Términos y Condiciones
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
