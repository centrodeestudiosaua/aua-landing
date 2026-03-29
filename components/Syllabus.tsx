"use client";

import { CheckCircle2, BookOpen, Scale, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export default function Syllabus() {
    return (
        <section id="temario" className="w-full py-20 bg-[#0B1D3F] text-white font-sans relative rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center justify-center gap-3">
                        <BookOpen className="h-10 w-10 text-[#EAB308]" />
                        LO QUE APRENDERÁS
                    </h2>
                    <div className="h-1 w-32 bg-[#EAB308] mx-auto rounded-full" />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {/* Module 1 */}
                    <motion.div variants={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308] text-[#0B1D3F] font-bold text-lg">1</span>
                            <h3 className="text-xl font-bold text-white">Contratos de Trabajo</h3>
                        </div>
                        <ul className="space-y-2 pl-12 text-gray-300 text-sm">
                            <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" /> Elaboración: Estructura y redacción efectiva</li>
                            <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" /> Cláusulas esenciales y adendas</li>
                        </ul>
                    </motion.div>

                    {/* Module 2 */}
                    <motion.div variants={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308] text-[#0B1D3F] font-bold text-lg">2</span>
                            <h3 className="text-xl font-bold text-white">Reglamento Interior (RIT)</h3>
                        </div>
                        <ul className="space-y-2 pl-12 text-gray-300 text-sm">
                            <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" /> Comprensión y aplicación</li>
                            <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" /> Comisiones Mixtas obligatorias</li>
                        </ul>
                    </motion.div>

                    {/* Module 3 */}
                    <motion.div variants={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308] text-[#0B1D3F] font-bold text-lg">3</span>
                            <h3 className="text-xl font-bold text-white">Formatos DC1 - DC5</h3>
                        </div>
                        <p className="text-gray-300 text-sm pl-12 mb-2 leading-relaxed">
                            Esenciales para obligaciones legales de capacitación y adiestramiento ante STPS.
                        </p>
                        <ul className="space-y-2 pl-12 text-gray-300 text-sm">
                            <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" /> Uso y requerimientos legales</li>
                        </ul>
                    </motion.div>

                    {/* Module 4 */}
                    <motion.div variants={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308] text-[#0B1D3F] font-bold text-lg">4</span>
                            <h3 className="text-xl font-bold text-white">Normas Oficiales</h3>
                        </div>
                        <ul className="space-y-2 pl-12 text-gray-300 text-sm">
                            <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" /> Guía para cumplir con las normativas</li>
                        </ul>
                    </motion.div>

                    {/* Module 5 */}
                    <motion.div variants={item} className="md:col-span-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308] text-[#0B1D3F] font-bold text-lg">5</span>
                            <h3 className="text-xl font-bold text-white">Superación de Inspecciones Laborales</h3>
                        </div>
                        <div className="pl-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle2 className="h-4 w-4 text-green-400" /> Estrategias de preparación</div>
                            <div className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle2 className="h-4 w-4 text-green-400" /> Protocolo de Subcontratación</div>
                            <div className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle2 className="h-4 w-4 text-green-400" /> Ley Silla</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Why Attend Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 text-[#0B1D3F]">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/3 text-center md:text-left">
                            <h3 className="text-3xl font-serif font-bold mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
                                <span className="text-[#EAB308]">🔍</span> ¿POR QUÉ ASISTIR?
                            </h3>
                            <div className="h-1 w-20 bg-[#EAB308] mx-auto md:mx-0 rounded-full" />
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl">
                                <Scale className="h-8 w-8 text-[#EAB308] mb-3" />
                                <h4 className="font-bold mb-1">Formación Práctica</h4>
                                <p className="text-sm text-slate-600">Curso interactivo para aplicar conocimientos.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl">
                                <Award className="h-8 w-8 text-[#EAB308] mb-3" />
                                <h4 className="font-bold mb-1">Expertos</h4>
                                <p className="text-sm text-slate-600">Instructora con amplia experiencia.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl">
                                <Users className="h-8 w-8 text-[#EAB308] mb-3" />
                                <h4 className="font-bold mb-1">Networking</h4>
                                <p className="text-sm text-slate-600">Conecta con profesionales del sector.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
