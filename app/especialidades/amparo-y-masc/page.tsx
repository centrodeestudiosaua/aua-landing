import { ArrowRight, BookOpen, Shield, Gavel, FileText, CheckCircle2, ShieldAlert, Check, FileSearch, MessagesSquare, Scale, Users, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Especialidad en Amparo y MASC | Centro de Estudios AUA",
    description: "Formación en Juicio de Amparo (Directo e Indirecto) y Mecanismos Alternativos de Solución de Controversias (MASC) en México.",
    keywords: ["Juicio de Amparo", "Amparo Indirecto", "Amparo Directo", "MASC", "Mediación", "Conciliación", "Cursos Jurídicos", "Control Constitucional"],
};

export default function AmparoYMascPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-navy-deep z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/90"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                        <Shield className="h-4 w-4" />
                        <span>Control Constitucional y Negociación</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
                        Defensa Suprema y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                            Solución de Controversias
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                        El Juicio de Amparo es la frontera máxima contra actos de autoridad. Los MASC son la evolución de la justicia expedita. Domina las dos vías más poderosas del derecho mexicano.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/cursos/taller-practico-amparo" className="bg-primary hover:bg-white text-navy-deep font-bold px-8 py-4 rounded transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                            Taller Práctico de Amparo <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dual approach section */}
            <section className="py-20 bg-navy-card border-y border-navy-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Amparo Side */}
                        <div className="bg-navy-deep border border-navy-border p-10 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Gavel className="w-40 h-40 text-primary" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Defensa Constitucional</span>
                                <h2 className="text-3xl font-bold text-white mt-2 mb-6">Juicio de Amparo</h2>
                                <p className="text-slate-300 font-light leading-relaxed mb-8">
                                    El medio de control constitucional por excelencia en el sistema jurídico mexicano y la última línea de defensa contra actos inconstitucionales, omisiones legislativas y resoluciones jurisdiccionales. Con las reformas en materia de derechos humanos y la jurisprudencia en evolución constante, la técnica jurídica para estructurar conceptos de violación resulta en la diferencia absoluta entre el éxito y la confirmación de la sanción.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="bg-primary/20 p-1.5 rounded text-primary shrink-0"><FileSearch className="w-5 h-5" /></div>
                                        <div>
                                            <p className="font-bold text-white">Amparo Indirecto</p>
                                            <p className="text-sm text-slate-400">Contra normas generales, actos fuera de juicio o que afecten derechos sustantivos. Suspensión del acto reclamado e incidente respectivo.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="bg-primary/20 p-1.5 rounded text-primary shrink-0"><Scale className="w-5 h-5" /></div>
                                        <div>
                                            <p className="font-bold text-white">Amparo Directo</p>
                                            <p className="text-sm text-slate-400">Contra sentencias definitivas y laudos (materia laboral). Suplencia de la queja deficiente y valoración probatoria en Tribunales Colegiados.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* MASC Side */}
                        <div className="bg-gradient-to-b from-navy-deep to-[#112340] border border-navy-border p-10 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MessagesSquare className="w-40 h-40 text-primary" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Justicia Alternativa</span>
                                <h2 className="text-3xl font-bold text-white mt-2 mb-6">Mecanismos Alternativos (MASC)</h2>
                                <p className="text-slate-300 font-light leading-relaxed mb-8">
                                    Los Mecanismos Alternativos de Solución de Controversias (MASC) dejaron de ser una herramienta secundaria para convertirse en el mandato constitucional primario conforme al artículo 17 de nuestra Constitución ("las leyes preverán mecanismos alternativos..."). La Ley General de MASC posiciona a la mediación y conciliación como requisitos de procedibilidad ineludibles en múltiples materias.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="bg-primary/20 p-1.5 rounded text-primary shrink-0"><Users className="w-5 h-5" /></div>
                                        <div>
                                            <p className="font-bold text-white">Mediación y Conciliación</p>
                                            <p className="text-sm text-slate-400">Técnicas de negociación Harvard y herramientas de comunicación empática aplicadas al conflicto familiar, civil y mercantil.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="bg-primary/20 p-1.5 rounded text-primary shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                                        <div>
                                            <p className="font-bold text-white">Convenios y Ejecución</p>
                                            <p className="text-sm text-slate-400">Elaboración de convenios de mediación con calidad de cosa juzgada, superando la efectividad e incertidumbre de un juicio tradicional.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 bg-navy-deep">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Técnica Jurídica Impecable
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Nuestra metodología te permite aplicar la teoría constitucional y las estrategias de negociación en tus asuntos del día a día, de forma concreta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors">
                            <ShieldAlert className="h-10 w-10 text-urgent-red mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">La Suspensión del Acto</h3>
                            <p className="text-slate-400 font-light text-sm">
                                Aprende a formular y demostrar la "apariencia del buen derecho" y el "peligro en la demora" para lograr suspensiones provisionales y definitivas que paralicen ordenes de aprehensión, embargos o clausuras ilegales de manera inmediata.
                            </p>
                        </div>

                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors">
                            <FileText className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Conceptos de Violación</h3>
                            <p className="text-slate-400 font-light text-sm">
                                Estructuración sistemática mediante la técnica del silogismo jurídico y test de proporcionalidad. Despídete de formatos obsoletos. Construirás demandas que combatan específicamente la inconstitucionalidad por violación a derechos humanos.
                            </p>
                        </div>

                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors">
                            <ShieldCheck className="h-10 w-10 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Facilitador Certificado</h3>
                            <p className="text-slate-400 font-light text-sm">
                                Al dominar los MASC, se abre la puerta para la obtención de certificaciones gubernamentales que te permiten actuar como mediador privado con fe pública, monetizando la prevención del conflicto y no sólo su etapa procesal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-tertiary opacity-90 mix-blend-multiply"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <BookOpen className="h-16 w-16 text-navy-deep mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-6">
                        Eleva tus Casos a Instancias Federales
                    </h2>
                    <p className="text-navy-deep/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                        La técnica de Amparo te blinda contra actos arbitrarios. Los MASC te convierten en un negociador implacable. Inscríbete a nuestros programas formativos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/cursos/taller-practico-amparo" className="bg-navy-deep hover:bg-slate-800 text-white font-bold px-8 py-4 rounded transition-colors shadow-2xl flex items-center justify-center gap-2 group">
                            Explorar Oferta Académica <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
