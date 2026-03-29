import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Scale, Scroll, Landmark, Award, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Quiénes Somos | Centro de Estudios AUA",
    description: "Conoce nuestra historia, misión y visión. Custodios de la ley y formadores de la élite jurídica en México desde 1999.",
    openGraph: {
        title: "Quiénes Somos | Centro de Estudios AUA",
        description: "Custodios de la legalidad, arquitectos de la justicia. Conoce al Centro de Estudios AUA.",
        url: "https://www.centrodeestudiosaua.com/nosotros",
        siteName: "Centro de Estudios AUA",
        images: [
            {
                url: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=2070&auto=format&fit=crop",
                width: 1200,
                height: 630,
                alt: "Centro de Estudios AUA - Quiénes Somos",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
};

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=2070&auto=format&fit=crop"
                        alt="Interior Legal Premium"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-16">
                    <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.3em] block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Institucional
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                        QUIENES SOMOS
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-in zoom-in duration-1000 delay-300"></div>
                    <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                        Custodios de la legalidad, arquitectos de la justicia. Una institución de vanguardia dedicada a la alta formación jurídica con rigor científico y visión global.
                    </p>
                </div>
            </section>

            {/* MISION & VISION SECTION */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Text Content */}
                        <div className="space-y-12">
                            {/* Mission */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <Landmark className="text-primary h-6 w-6" />
                                    <h2 className="text-2xl md:text-3xl font-serif text-white">Nuestra Misión</h2>
                                </div>
                                <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base border-l border-primary/20 pl-6 group-hover:border-primary transition-colors duration-500">
                                    Formar y especializar a profesionales del sector legal y corporativo, brindándoles el conocimiento más actualizado y las herramientas prácticas necesarias para ejercer un liderazgo estratégico en las materias de derecho LABORAL, CIVIL, FAMILIAR Y AMPARO. Nuestro propósito es transformar el conocimiento legal efectivo para la resolución de conflictos.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <Award className="text-primary h-6 w-6" />
                                    <h2 className="text-2xl md:text-3xl font-serif text-white">Nuestra Visión</h2>
                                </div>
                                <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base border-l border-primary/20 pl-6 group-hover:border-primary transition-colors duration-500">
                                    Ser la plataforma educativa referente a nivel Nacional e Internacional, reconocida por la excelencia de nuestra planta académica de profesorado, y por la alta calidad de nuestros participantes en cursos, talleres y diplomados. Aspiramos a ser el vínculo directo entre la práctica judicial y la especialización legal estratégica, creando un impacto positivo y duradero en la gestión corporativa.
                                </p>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="relative">
                            <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-navy-border shadow-2xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
                                    alt="Lady Justice Statue"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-90"></div>

                                <div className="absolute bottom-8 left-8">
                                    <span className="text-6xl font-serif text-primary font-bold block mb-2">25</span>
                                    <span className="text-white text-lg font-light uppercase tracking-widest block mb-4">Años de <br />Excelencia</span>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider max-w-[200px] border-t border-primary/30 pt-4">
                                        Liderazgo en Derecho Corporativo y Constitucional
                                    </p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-primary/20 -z-10"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* HISTORY TIMELINE SECTION */}
            <section className="py-20 md:py-32 bg-navy-dark relative">
                <div className="max-w-4xl mx-auto px-6 relative">

                    <div className="text-center mb-24">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">Legado y Tradición</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">NUESTRA HISTORIA</h2>
                        <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-6"></div>
                    </div>

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-48 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden md:block"></div>

                    <div className="space-y-24 relative z-10">
                        {/* Item 1: Orígenes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="md:text-right order-2 md:order-1">
                                <span className="text-primary font-bold text-lg block mb-1">Fundación da Costa</span>
                                <h3 className="text-2xl font-serif text-white mb-4">Nuestros Orígenes</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed">
                                    Nuestro Centro nace de la convicción de Abogados Acosta Urías y Asociados: que la formación legal más efectiva proviene de la experiencia directa en la consultoría y la Judicatura.
                                </p>
                            </div>
                            <div className="relative order-1 md:order-2">
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-navy-deep border-2 border-primary rounded-full hidden md:block z-20"></div>
                                <div className="aspect-video relative rounded-sm overflow-hidden border border-navy-border group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                        alt="Abstract Architecture"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-navy-deep/20"></div>
                                </div>
                            </div>
                        </div>

                        {/* Item 2: Especialización */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="relative order-1">
                                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-navy-deep border-2 border-primary rounded-full hidden md:block z-20"></div>
                                <div className="aspect-video relative rounded-sm overflow-hidden border border-navy-border group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop"
                                        alt="Modern Building"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-navy-deep/20"></div>
                                </div>
                            </div>
                            <div className="order-2">
                                <span className="text-primary font-bold text-lg block mb-1">Especialización</span>
                                <h3 className="text-2xl font-serif text-white mb-4">Estrategia Legal</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed">
                                    Vimos la necesidad de una especialización de élite que combinara el rigor académico con la visión estratégica en el sector legal y corporativo. Desde entonces, nos hemos dedicado a capacitar a profesionales con herramientas prácticas.
                                </p>
                            </div>
                        </div>

                        {/* Item 3: Visión y Liderazgo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="md:text-right order-2 md:order-1">
                                <span className="text-primary font-bold text-lg block mb-1">Hoy</span>
                                <h3 className="text-2xl font-serif text-white mb-4">Visión y Liderazgo</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed">
                                    Con la visión de democratizar el conocimiento legal de alto nivel, hoy somos un referente en la capacitación judicial y corporativa, enfocados en construir un futuro donde la prevención legal sea sinónimo de excelencia.
                                </p>
                            </div>
                            <div className="relative order-1 md:order-2">
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-navy-deep border-2 border-primary rounded-full hidden md:block z-20"></div>
                                <div className="aspect-video relative rounded-sm overflow-hidden border border-navy-border group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=2070&auto=format&fit=crop"
                                        alt="Law Library"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-navy-deep/20"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* QUOTE / CTA SECTION */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <Award className="w-12 h-12 text-primary mx-auto mb-8 animate-bounce delay-1000 duration-3000" />
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                        LA EXCELENCIA NO ES UN ACTO,<br />
                        <span className="text-primary">ES UN HÁBITO.</span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"></div>
                    <p className="text-slate-400 font-light mb-12 text-sm md:text-base">
                        Únete a la institución que está redefiniendo el estándar de la práctica legal en la región.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/" className="bg-primary text-navy-deep px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-navy-deep transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]">
                            Ver Oferta Académica
                        </Link>
                        <Link href="/contacto" className="border border-primary/50 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 group">
                            Contáctanos Hoy
                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
