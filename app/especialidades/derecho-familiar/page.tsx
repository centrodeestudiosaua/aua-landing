import { ArrowRight, Users, Heart, Scale, Home, FileText, CheckCircle2, ShieldAlert, BookOpen, UserPlus, Baby } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Especialidad en Derecho Familiar | Centro de Estudios AUA",
    description: "Formación especializada en Derecho de Familia. Domina divorcios, guarda y custodia, alimentos, sucesiones y técnicas de litigio oral familiar en México.",
    keywords: ["Derecho Familiar", "Juicio de Divorcio", "Guarda y Custodia", "Pension Alimenticia", "Sucesiones", "Cursos Derecho Familiar", "AUA", "Abogado Familiar"],
};

export default function DerechoFamiliarPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-navy-deep z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-navy-deep/70"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="max-w-2xl flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                            <Heart className="h-4 w-4" />
                            <span>Rama Sensible y Vital</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Expertise Humano en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary">
                                Derecho Familiar
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-xl">
                            Más del 40% de los litigios judiciales en México pertenecen a la rama familiar. Especialízate en el área de mayor volumen y trascendencia social de la abogacía.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/cursos/diplomado-derecho-familiar" className="bg-primary hover:bg-white text-navy-deep font-bold px-8 py-4 rounded transition-colors shadow-lg shadow-primary/20 text-center flex items-center justify-center gap-2 group w-max">
                                Ver Diplomado y Cursos <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 hidden lg:block">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-navy-card/80 backdrop-blur border border-navy-border p-6 rounded-2xl transform translate-y-8">
                                <Baby className="h-8 w-8 text-primary mb-4" />
                                <p className="font-bold text-white text-lg">Guarda y Custodia</p>
                                <p className="text-xs text-slate-400 mt-2">Interés superior del menor y alienación parental.</p>
                            </div>
                            <div className="bg-navy-card/80 backdrop-blur border border-navy-border p-6 rounded-2xl">
                                <Users className="h-8 w-8 text-primary mb-4" />
                                <p className="font-bold text-white text-lg">Divorcio Incausado</p>
                                <p className="text-xs text-slate-400 mt-2">Trámites ágiles, propuesta de convenio y disolución del vínculo.</p>
                            </div>
                            <div className="bg-navy-card/80 backdrop-blur border border-navy-border p-6 rounded-2xl transform translate-y-8">
                                <Scale className="h-8 w-8 text-primary mb-4" />
                                <p className="font-bold text-white text-lg">Juicio Oral Familiar</p>
                                <p className="text-xs text-slate-400 mt-2">Desahogo de pruebas bajo las reglas del CNPCF.</p>
                            </div>
                            <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl">
                                <FileText className="h-8 w-8 text-primary mb-4" />
                                <p className="font-bold text-white text-lg">Sucesiones</p>
                                <p className="text-xs text-slate-400 mt-2">Testamentario e Intestamentario (Judicial / Notarial).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Importance */}
            <section className="py-20 bg-navy-card border-y border-navy-border relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        <div className="lg:col-span-4 relative">
                            <img src="https://images.unsplash.com/photo-1536640712-4d4c36ef0e2c?q=80&w=2074&auto=format&fit=crop" alt="Familia" className="rounded-2xl shadow-2xl object-cover h-full min-h-[400px]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-80 rounded-2xl"></div>
                        </div>

                        <div className="lg:col-span-8 space-y-8 text-slate-300 text-lg leading-relaxed font-light flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                La Relevancia del Abogado Familiarista
                            </h2>

                            <p>
                                El <strong>Derecho de Familia</strong> no admite improvisaciones. Involucra los bienes jurídicos más sensibles de nuestra sociedad: estado civil, filiación, patria potestad, sustento económico (alimentos) y transmisión del patrimonio familiar (sucesiones).
                            </p>

                            <p>
                                Ante la promulgación del <strong>Nuevo Código Nacional de Procedimientos Civiles y Familiares</strong>, el litigio en esta materia se transformó radicalmente. El abogado familiar hoy no solo necesita empatía y tacto; requiere velocidad procesal, técnica de interrogatorio incisivo (oralidad) y conocimientos multidisciplinarios (psicología, trabajo social, peritajes) para construir teorías del caso contundentes ante los Jueces Familiares.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mt-6">
                                <div className="bg-navy-deep px-6 py-5 rounded-xl border-l-4 border-l-primary">
                                    <p className="text-3xl font-bold text-white mb-1">+40%</p>
                                    <p className="text-sm text-slate-400">De la carga judicial del país es materia familiar.</p>
                                </div>
                                <div className="bg-navy-deep px-6 py-5 rounded-xl border-l-4 border-l-primary">
                                    <p className="text-3xl font-bold text-white mb-1">C.N.P.C.F.</p>
                                    <p className="text-sm text-slate-400">Transición completa a la oralidad procesal en todo México.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Areas */}
            <section className="py-24 bg-navy-deep">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-2">Temario Especializado</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Nuestros Pilares Formativos
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Analizamos a profundidad cada institución familiar mediante el estudio de casos resueltos y criterios recientes de la Suprema Corte de Justicia de la Nación.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Concept 1 */}
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border flex flex-col md:flex-row gap-8 items-start group hover:border-primary/50 transition-colors">
                            <div className="shrink-0 w-16 h-16 bg-navy-deep border border-navy-border rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <Users className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Divorcio, Alimentos y Compensación</h3>
                                <p className="text-slate-400 font-light mb-4 leading-relaxed">
                                    El proceso de Divorcio Incausado (Sin Expresión de Causa) y la propuesta de convenio. Medidas provisionales de protección, pensiones alimenticias provisionales y definitivas (investigación de bienes ocultos, descuentos vía nómina), y la exigibilidad de la pensión compensatoria para el cónyuge que se dedicó al hogar.
                                </p>
                                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Incidentes de aumento/reducción</li>
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Embargo precautorio</li>
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Juicio de reconocimiento de paternidad</li>
                                </ul>
                            </div>
                        </div>

                        {/* Concept 2 */}
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border flex flex-col md:flex-row gap-8 items-start group hover:border-primary/50 transition-colors">
                            <div className="shrink-0 w-16 h-16 bg-navy-deep border border-navy-border rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <Baby className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Guarda, Custodia y Violencia Familiar</h3>
                                <p className="text-slate-400 font-light mb-4 leading-relaxed">
                                    Litigios donde rige por antonomasia el "Interés Superior del Menor". Abordamos el régimen de visitas y convivencias, pérdida y suspensión de la patria potestad, acreditación de alienación parental, y los protocolos urgentes ante situaciones de violencia familiar (órdenes de protección).
                                </p>
                                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Periciales en Psicología y Trabajo Social</li>
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Restitución Internacional de Menores</li>
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Protocolos de Actuación (SCJN)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Concept 3 */}
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border flex flex-col md:flex-row gap-8 items-start group hover:border-primary/50 transition-colors">
                            <div className="shrink-0 w-16 h-16 bg-navy-deep border border-navy-border rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <Home className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Juicios Sucesorios</h3>
                                <p className="text-slate-400 font-light mb-4 leading-relaxed">
                                    Tratamiento paso a paso de las sucesiones Testamentarias e Intestamentarias, en sede judicial y notarial. Declaratoria de herederos, nombramiento y remoción de albacea, formulación de inventario y avalúo, rendición de cuentas, y partición y adjudicación del acervo hereditario. Impugnación de testamentos inoficiosos.
                                </p>
                                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Intestados</li>
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Inventario y Avalúo</li>
                                    <li className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Proyecto de Partición</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Oralidad */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10">
                    <Scale className="w-96 h-96 text-navy-deep transform translate-x-1/4 translate-y-1/4" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-6">El Juicio Oral Familiar</h2>
                    <p className="text-navy-deep/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                        Con el <strong>Código Nacional de Procedimientos Civiles y Familiares</strong> las oficialías de partes lentas mueren, y nacen las salas de juicios orales. Aprenderás a interrogar, plantear objeciones precisas bajo presión, y formular alegatos de clausura persuasivos estructurando argumentos jurídicos irrebatibles.
                    </p>
                    <Link href="/cursos/cnpcf-oralidad-tecnicas" className="bg-navy-deep text-white font-bold px-8 py-4 rounded hover:bg-slate-800 transition-colors shadow-2xl flex items-center justify-center gap-2 w-max mx-auto group">
                        Descubre Entrenamiento Práctico <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
