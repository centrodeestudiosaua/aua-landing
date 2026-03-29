"use client";

import { Check, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section id="precios" className="w-full py-20 bg-[#0B1D3F] text-white font-sans relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                        INVERSIÓN
                    </h2>
                    <p className="text-lg text-blue-200">Invierte en tu crecimiento profesional y asegura el cumplimiento de tu empresa.</p>
                </div>

                {/* Presale Banner */}
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#EAB308]/10 border border-[#EAB308] rounded-full px-6 py-2 text-[#EAB308] font-bold uppercase tracking-wider animate-pulse">
                        <Sparkles className="h-5 w-5" /> PREVENTA: Inscríbete antes del 15 de febrero 2026
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                    {/* ONLINE PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col hover:border-blue-500/50 transition-colors relative group"
                    >
                        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-blue-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                                🖥️ EN LÍNEA
                            </h3>
                            <div className="flex items-end gap-3 mb-2">
                                <span className="text-4xl md:text-5xl font-serif font-bold text-white">$1,600</span>

                            </div>


                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" /> Acceso en vivo vía Zoom.
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" /> Grabación de la clase.
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" /> Material digital descargable.
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" /> Constancia con valor curricular.
                                </li>
                            </ul>

                            <Link
                                href="#registro"
                                className="block w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center transition-all border border-white/20"
                            >
                                SELECCIONAR ONLINE
                            </Link>
                        </div>
                    </motion.div>

                    {/* PRESENCIAL PLAN (Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative bg-gradient-to-b from-[#EAB308] to-[#ca8a04] rounded-3xl p-[2px] shadow-2xl shadow-[#EAB308]/20"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider whitespace-nowrap z-20">
                            Mejor Opción
                        </div>

                        <div className="bg-[#0f254a] rounded-[22px] p-8 h-full flex flex-col relative overflow-hidden">
                            {/* Shine effect */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/10 rotate-45 blur-xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#EAB308] uppercase tracking-widest mb-4 flex items-center gap-2">
                                    🙋🏽‍♀️ PRESENCIAL
                                </h3>
                                <div className="flex items-end gap-3 mb-2">
                                    <span className="text-4xl md:text-5xl font-serif font-bold text-white">$2,000</span>

                                </div>


                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check className="h-5 w-5 text-[#EAB308] shrink-0 mt-0.5" /> Experiencia presencial inmersiva.
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check className="h-5 w-5 text-[#EAB308] shrink-0 mt-0.5" /> Networking con expertos.
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check className="h-5 w-5 text-[#EAB308] shrink-0 mt-0.5" /> Coffee Break incluido.
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check className="h-5 w-5 text-[#EAB308] shrink-0 mt-0.5" /> Constancia física y digital.
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="h-5 w-5 text-[#EAB308] shrink-0 mt-0.5" /> Acceso a grabación posterior.
                                    </li>
                                </ul>

                                <Link
                                    href="#registro"
                                    className="block w-full py-4 rounded-xl bg-[#EAB308] hover:bg-[#d9a506] text-[#0B1D3F] font-bold text-center text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                                >
                                    APARTAR LUGAR PRESENCIAL
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
