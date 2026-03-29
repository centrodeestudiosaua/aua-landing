import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseRegistrationForm from "@/components/marketing/CourseRegistrationForm";
import InstructorSection from "@/components/marketing/InstructorSection";
import SyllabusSection from "@/components/marketing/SyllabusSection";
import TargetAudienceSection from "@/components/marketing/TargetAudienceSection";
import { Check, Shield, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: "Curso Protocolo de Inspección STPS y Subcontratación | Centro de Estudios AUA",
    description: "Domina el Protocolo de Inspección de la STPS y la normativa de subcontratación. Evita sanciones y cumple con la Ley Federal del Trabajo. Curso para Abogados y RH.",
    keywords: ["Protocolo Inspección STPS", "Subcontratación México", "REPSE", "Curso DC-3", "Normativa Laboral", "Defensa Legal STPS", "Auditoría Laboral"],
    openGraph: {
        title: "Curso Protocolo de Inspección STPS y Subcontratación | AUA",
        description: "Capacitación especializada para atender inspecciones de la STPS y gestionar la subcontratación. Dirigido a Abogados, RH y Contadores.",
        url: "https://www.centrodeestudiosaua.com/cursos/protocolo-stps-subcontratacion",
        siteName: "Centro de Estudios AUA",
        images: [
            {
                url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
                width: 1200,
                height: 630,
                alt: "Curso Protocolo STPS y Subcontratación",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
};

export default function CursoProtocoloSTPS() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep flex flex-col">
            {/* Top Bar */}
            <div className="bg-urgent-red text-white text-[10px] md:text-xs font-bold py-2 px-6 text-center uppercase tracking-widest relative z-[60]">
                Últimos días de bonificación del 15% - Cierre de inscripciones: 20 de Marzo
            </div>

            <Header />

            {/* Hero Section */}
            <section className="relative bg-navy-deep pt-16 pb-20 border-b border-navy-border overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                    alt="Firma de Contratos y Protocolos"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none z-0"></div>
                <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-urgent-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 rounded-sm shadow-md">
                            Taller de Alta Especialidad
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
                            Protocolo de Inspección <br />
                            <span className="text-primary">STPS y Subcontratación</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light drop-shadow-md">
                            Domina las herramientas legales para atender inspecciones de la STPS, gestionar el REPSE y cumplir con la normativa de subcontratación laboral.
                        </p>
                    </div>
                </div>
            </section>

            {/* Info Bar */}
            <div className="bg-white border-b border-slate-200 relative z-20">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="pt-4 md:pt-0">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Inicio</span>
                            <p className="text-navy-deep font-bold text-lg">24 de Marzo de 2026</p>
                        </div>
                        <div className="pt-4 md:pt-0 md:pl-8">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Duración</span>
                            <p className="text-navy-deep font-bold text-lg">24 Horas</p>
                        </div>
                        <div className="pt-4 md:pt-0 md:pl-8">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Precio (Presencial)</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-slate-400 line-through text-sm font-medium">$2,500</span>
                                <span className="text-urgent-red font-bold text-lg">$2,000 MXN</span>
                            </div>
                        </div>
                        <div className="pt-4 md:pt-0 md:pl-8 flex items-center">
                            <div>
                                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Modalidad Online</span>
                                <span className="text-navy-deep font-bold text-sm block">$1,600 MXN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="bg-white">

                {/* Top Content: Description & Objectives */}
                <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column content */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Description */}
                            <div>
                                <h2 className="text-3xl font-bold text-navy-deep mb-6">
                                    Blinda tu empresa ante la autoridad laboral
                                </h2>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
                                    <p>
                                        Las inspecciones laborales son cada vez más rigurosas. Este programa te prepara para enfrentar cualquier revisión de la STPS con la documentación y protocolos correctos.
                                    </p>
                                    <p>
                                        Analizaremos a profundidad el nuevo protocolo de inspección laboral, los requisitos para el registro en el REPSE y las estrategias para evitar multas millonarias por incumplimiento en materia de subcontratación.
                                    </p>
                                </div>
                            </div>

                            {/* Key Benefits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-navy-deep/10 flex items-center justify-center mb-4 text-navy-deep">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-navy-deep mb-2">Prevención de Multas</h4>
                                    <p className="text-sm text-slate-600">Evita sanciones económicas por incumplimiento normativo.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-navy-deep/10 flex items-center justify-center mb-4 text-navy-deep">
                                        <TrendingUp className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-navy-deep mb-2">Seguridad Jurídica</h4>
                                    <p className="text-sm text-slate-600">Opera bajo un marco de legalidad y confianza.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sticky Form */}
                        <div className="lg:col-span-5 relative">
                            <div className="lg:sticky lg:top-28">
                                <CourseRegistrationForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Target Audience Section */}
                <TargetAudienceSection />

                {/* Syllabus Section */}
                <SyllabusSection />

                {/* Instructor Section */}
                <InstructorSection />

            </div>

            <Footer />
        </main>
    );
}
