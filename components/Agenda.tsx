"use client";

import { Calendar, MapPin, Clock, Video, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Agenda() {
    return (
        <section id="agenda" className="w-full py-20 bg-white relative font-sans rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1D3F] mb-4">
                        Fechas y Sedes
                    </h2>
                    <p className="text-lg text-slate-600">Elige la modalidad que mejor se adapte a ti.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* PRESENCIAL */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
                    >
                        <div className="bg-[#0B1D3F] p-6 text-white text-center">
                            <h3 className="text-2xl font-bold uppercase tracking-wide flex items-center justify-center gap-2">
                                <MapPin className="text-[#EAB308]" /> PRESENCIAL
                            </h3>
                            <p className="text-[#EAB308] text-sm font-bold mt-2">Cupo Limitado</p>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="h-6 w-6 text-[#0B1D3F]" />
                                <div>
                                    <span className="block font-bold text-[#0B1D3F]">Viernes 06 y Sábado 07</span>
                                    <span className="text-sm text-slate-500">Marzo 2026</span>
                                </div>
                            </div>

                            <div className="space-y-4 border-l-2 border-slate-100 pl-6 ml-2 mb-8">
                                <div>
                                    <h4 className="font-bold text-[#0B1D3F]">Viernes 06 de Marzo</h4>
                                    <p className="text-slate-600 flex items-center gap-2 text-sm">
                                        <Clock className="h-4 w-4 text-[#EAB308]" /> 04:00 p.m. a 08:30 p.m.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0B1D3F]">Sábado 07 de Marzo</h4>
                                    <p className="text-slate-600 flex items-center gap-2 text-sm">
                                        <Clock className="h-4 w-4 text-[#EAB308]" /> 08:30 a.m. a 01:00 p.m.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <h5 className="font-bold text-[#0B1D3F] flex items-center gap-2 mb-2">
                                    <MapPin className="h-5 w-5 text-red-500" /> UBICACIÓN
                                </h5>
                                <p className="text-sm text-slate-600">
                                    Centro Comercial Plaza Patria, Salón de eventos. <br />
                                    <span className="font-semibold">5to piso.</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* EN LINEA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
                    >
                        <div className="bg-[#1e40af] p-6 text-white text-center">
                            <h3 className="text-2xl font-bold uppercase tracking-wide flex items-center justify-center gap-2">
                                <Video className="text-[#EAB308]" /> EN LÍNEA
                            </h3>
                            <p className="text-blue-200 text-sm font-bold mt-2">Plataforma ZOOM</p>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="h-6 w-6 text-blue-600" />
                                <div>
                                    <span className="block font-bold text-[#0B1D3F]">Transmisión en Vivo</span>
                                    <span className="text-sm text-slate-500">Mismos días: 06 y 07 de Marzo</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                {/* BC Time */}
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <h4 className="font-bold text-[#0B1D3F] text-sm mb-3 border-b border-slate-200 pb-2">Horario Baja California</h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <span className="text-xs font-semibold block text-slate-500">06 Marzo</span>
                                            <span className="text-sm font-bold text-[#0B1D3F]">04:00 PM - 08:30 PM</span>
                                        </li>
                                        <li>
                                            <span className="text-xs font-semibold block text-slate-500">07 Marzo</span>
                                            <span className="text-sm font-bold text-[#0B1D3F]">08:30 AM - 01:00 PM</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* CDMX Time */}
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 text-sm mb-3 border-b border-blue-200 pb-2">Horario CDMX</h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <span className="text-xs font-semibold block text-blue-500">06 Marzo</span>
                                            <span className="text-sm font-bold text-blue-900">06:00 PM - 10:30 PM</span>
                                        </li>
                                        <li>
                                            <span className="text-xs font-semibold block text-blue-500">07 Marzo</span>
                                            <span className="text-sm font-bold text-blue-900">10:30 AM - 03:00 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
