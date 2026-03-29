"use client";

import { Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function Benefits() {
    return (
        <section id="beneficios" className="w-full py-20 bg-white relative overflow-hidden font-sans rounded-[2.5rem] shadow-2xl">
            <div className="container px-4 md:px-6 mx-auto relative z-10">

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1D3F] mb-8">
                        Beneficios del Curso
                    </h2>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                        Adquirirás conocimientos críticos para asegurar el cumplimiento de las normas laborales,
                        <span className="font-semibold text-[#0B1D3F]"> evitando sanciones y problemas legales. </span>
                        Al cumplir con las leyes del trabajo, no solo proteges a tu empresa, proteges también a sus empleados,
                        lo que contribuye a un ambiente de trabajo justo, seguro y saludable, lo que se traduce en una
                        <span className="font-semibold text-[#0B1D3F] italic"> excelente reputación corporativa y un mayor éxito a largo plazo.</span>
                    </p>
                </motion.div>

                {/* Benefits List */}
                <div className="mb-12 text-center">
                    <h3 className="text-3xl font-serif font-bold text-[#0B1D3F] inline-block border-b-4 border-[#EAB308] pb-2">
                        Beneficios para ti
                    </h3>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {/* Card 1 */}
                    <motion.div variants={item} className="group relative p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-full bg-[#EAB308]/10 flex items-center justify-center mb-6 text-[#EAB308]">
                            <TrendingUp className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#0B1D3F] mb-4">Desarrollo de Habilidades</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Adquirirás nuevas habilidades y conocimientos que te permitirán destacarte en tu perfil profesional,
                            abriendo puertas a nuevas oportunidades laborales y de crecimiento.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={item} className="group relative p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-6 text-blue-600">
                            <Shield className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#0B1D3F] mb-4">Incremento de la Confianza</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Al dominar las normativas y procedimientos, te sentirás más seguro y empoderado en el desempeño de tu trabajo,
                            lo que te permitirá manejar inspecciones y desafíos con mayor confianza y eficacia.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl md:text-2xl font-bold text-[#0B1D3F] italic">
                        "¡No pierdas esta oportunidad! Inscríbete ahora y asegura tu lugar."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
