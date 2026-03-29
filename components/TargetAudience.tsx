"use client";

import { Users, Gavel, Building2, Calculator, Scale } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function TargetAudience() {
    return (
        <section className="w-full py-16 bg-white font-sans rounded-[2.5rem] shadow-2xl relative overflow-hidden">

            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0B1D3F] via-[#EAB308] to-[#0B1D3F]" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1D3F] uppercase tracking-wide inline-flex items-center gap-3">
                                <Users className="h-8 w-8 text-[#EAB308]" /> Dirigido A:
                            </h2>
                            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                                Este programa está diseñado para profesionales que buscan excelencia y cumplimiento en materia laboral.
                            </p>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {/* Item 1 */}
                            <motion.div variants={item} className="group flex flex-row items-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#EAB308] transition-all gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0B1D3F] flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                                    <Gavel className="h-6 w-6 text-white group-hover:text-[#0B1D3F] transition-colors" />
                                </div>
                                <h3 className="font-bold text-[#0B1D3F] text-base leading-tight">
                                    Abogados Postulantes
                                </h3>
                            </motion.div>

                            {/* Item 2 */}
                            <motion.div variants={item} className="group flex flex-row items-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#EAB308] transition-all gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0B1D3F] flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                                    <Building2 className="h-6 w-6 text-white group-hover:text-[#0B1D3F] transition-colors" />
                                </div>
                                <h3 className="font-bold text-[#0B1D3F] text-base leading-tight">
                                    Colegios y Barras
                                </h3>
                            </motion.div>

                            {/* Item 3 */}
                            <motion.div variants={item} className="group flex flex-row items-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#EAB308] transition-all gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0B1D3F] flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                                    <Users className="h-6 w-6 text-white group-hover:text-[#0B1D3F] transition-colors" />
                                </div>
                                <h3 className="font-bold text-[#0B1D3F] text-base leading-tight">
                                    Recursos Humanos
                                </h3>
                            </motion.div>

                            {/* Item 4 */}
                            <motion.div variants={item} className="group flex flex-row items-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#EAB308] transition-all gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0B1D3F] flex items-center justify-center group-hover:bg-[#EAB308] transition-colors">
                                    <Calculator className="h-6 w-6 text-white group-hover:text-[#0B1D3F] transition-colors" />
                                </div>
                                <h3 className="font-bold text-[#0B1D3F] text-base leading-tight">
                                    Contadores
                                </h3>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Image / Graphic Feature */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl bg-[#0B1D3F] flex items-center justify-center group"
                    >
                        {/* Abstract Background Decoration */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />

                        {/* Central Graphic */}
                        <div className="relative z-10 text-center p-8">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_-5px_rgba(234,179,8,0.2)]">
                                <Scale className="h-16 w-16 text-[#EAB308] drop-shadow-md" />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-2">
                                Excelencia Jurídica
                            </h3>
                            <div className="w-12 h-1 bg-[#EAB308] mx-auto mb-4 rounded-full" />
                            <p className="text-blue-100 max-w-xs mx-auto text-sm leading-relaxed">
                                Espacio reservado para imagen institucional.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
